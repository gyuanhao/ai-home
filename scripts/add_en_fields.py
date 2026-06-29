#!/usr/bin/env python3
"""Add missing English fields to all models in main.js"""
import json
import re
import os
import sys

PROJECT_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
JSON_PATH = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'models.json')
MAIN_JS_PATH = os.path.join(PROJECT_DIR, 'js', 'main.js')

# Pre-defined English translations for all models
# Key: model.id, fields: priceDetailEn, chineseSupportEn, weaknessesEn, releasedEn
TRANSLATIONS = {
    # === 语言模型 ===
    'deepseek': {
        'priceDetailEn': 'All features free, no paywall, no ads. API usage-based billing, V4 series permanent price cut (V4-Pro 75% off). V4.1 coming June 2026, first multimodal + enterprise tools.',
        'chineseSupportEn': '★★★★★ Native Chinese model, excellent performance',
        'weaknessesEn': 'May queue during peak hours; current image/multimodal limited; no web search support',
        'releasedEn': 'Launched 2023, V4 released April 2026',
    },
    'kimi': {
        'priceDetailEn': 'Free tier (Adagio, limited uses); Andante ¥49/mo; Moderato ¥99/mo. K2.5 API: ¥4/million tokens input.',
        'chineseSupportEn': '★★★★★ Best-in-class for long-form Chinese writing',
        'weaknessesEn': 'Strict free tier limits; queue/tipping priority during peak hours',
        'releasedEn': 'First launched October 2023',
    },
    'qwen': {
        'priceDetailEn': 'Free web version (Qwen3.5-Thinking with search). Bailian platform: 70M free tokens for new users. API: Qwen3.5 ¥2/M tokens input. Qwen3.5-VL free during beta.',
        'chineseSupportEn': '★★★★★ Native Chinese, Alibaba ecosystem integration',
        'weaknessesEn': 'Free tier features limited; complex reasoning lags behind DeepSeek & ChatGPT',
        'releasedEn': 'First launched April 2023, Qwen3.5 June 2026',
    },
    'ernie': {
        'priceDetailEn': 'Free web version (ERNIE 5.0 Lite). ERNIE 5.0 Pro ¥59.9/mo; ERNIE 5.0 Ultra ¥99.9/mo. API: ERNIE-Lite ¥0.8/M tokens input.',
        'chineseSupportEn': '★★★★★ Baidu ecosystem, native Chinese',
        'weaknessesEn': 'Free tier limited; English reasoning weaker than top models; some features hidden behind paywall',
        'releasedEn': 'First launched March 2023, ERNIE 5.0 November 2025',
    },
    'doubao': {
        'priceDetailEn': 'Free web version (Doubao 2.0, daily limits). Pro ¥19.9/mo. API: Doubao-Lite ¥0.3/M tokens input; Doubao-Pro ¥3/M tokens input.',
        'chineseSupportEn': '★★★★★ ByteDance ecosystem, native Chinese',
        'weaknessesEn': 'Free tier daily cap; English benchmarks lower; less ecosystem integration than competitors',
        'releasedEn': 'First launched August 2023, Doubao 2.0 May 2026',
    },
    'zhipu': {
        'priceDetailEn': 'Free web version (GLM-5-Free). GLM-5-Plus ¥49.9/mo. API: GLM-5-Flash ¥0.1/M tokens input; GLM-5-Plus ¥5/M tokens input.',
        'chineseSupportEn': '★★★★★ Native Chinese, Tsinghua-backed, strong open-source',
        'weaknessesEn': 'Free tier limited features; ecosystem smaller than Baidu/Alibaba; global mindshare lower',
        'releasedEn': 'First launched March 2023, GLM-5 March 2026',
    },
    'minimax': {
        'priceDetailEn': 'Free web version (Hailuo AI, limited uses). Paid plans from ¥39.9/mo. API: abab7 ¥0.5/M tokens input.',
        'chineseSupportEn': '★★★★★ Native Chinese, strong voice cloning & video',
        'weaknessesEn': 'Brand recognition lower; text reasoning behind top models; limited free tier',
        'releasedEn': 'First launched 2021, abab7 2025',
    },
    'chatgpt': {
        'priceDetailEn': 'Free (GPT-5). ChatGPT Plus $20/mo (GPT-5.6, 5.6-Slow-Think). Pro $200/mo (unlimited, Deep Research). Team $25-30/user/mo.',
        'chineseSupportEn': '★★★★☆ Strong Chinese support, slight English bias',
        'weaknessesEn': 'Free users face rate limits; China requires VPN; no WeChat/Pay integration',
        'releasedEn': 'First launched November 2022, GPT-5.6 June 2026',
    },
    'claude': {
        'priceDetailEn': 'Free (Claude Sonnet 4.5). Pro $20/mo (Claude Opus 4.8). Max $100-200/mo (extended limits). Team $25/user/mo.',
        'chineseSupportEn': '★★★☆☆ Good Chinese but English-oriented; HK requires VPN',
        'weaknessesEn': 'HK requires VPN; no free tier for Opus; Chinese sometimes unnatural; no image gen natively',
        'releasedEn': 'First launched March 2023, Opus 4.8 June 2026',
    },
    'gemini': {
        'priceDetailEn': 'Free (Gemini 2.5 Pro, limited). Gemini Advanced $19.99/mo (1M context). API: Gemini 2.5 Flash $0.15/M tokens input.',
        'chineseSupportEn': '★★★☆☆ Acceptable Chinese, Google ecosystem bias',
        'weaknessesEn': 'China requires VPN; Chinese quality behind domestic models; UI updates confusing',
        'releasedEn': 'First launched December 2023, Gemini 2.5 2025',
    },
    'grok': {
        'priceDetailEn': 'Free (Grok 3, limited uses). X Premium+ $22/mo. API: Grok-3 $2/M tokens input. Free users: 10 messages/2hr.',
        'chineseSupportEn': '★★★☆☆ Passable Chinese, English-first design',
        'weaknessesEn': 'China requires VPN; Chinese quality behind domestic models; brand positioning unclear',
        'releasedEn': 'First launched November 2023, Grok 3 February 2026',
    },
    'mistral': {
        'priceDetailEn': 'Free (Le Chat, limited). Teams $10/user/mo. API: Mistral Large 2 $2/M tokens input. Codestral API $0.3/M.',
        'chineseSupportEn': '★★★☆☆ Acceptable Chinese from French model',
        'weaknessesEn': 'Chinese not a priority; ecosystem smaller than US/China giants; brand awareness limited in China',
        'releasedEn': 'First launched 2023, Mistral Large 2 2025',
    },
    # === Agent 平台 ===
    'dify': {
        'priceDetailEn': 'Free self-hosted (open source). Cloud: Free (basic), Team $59/mo, Business $159/mo, Enterprise custom.',
        'chineseSupportEn': '★★★★★ Native Chinese UI, excellent docs',
        'weaknessesEn': 'Complex setup for self-hosted; free tier limited; community plugins variable quality',
        'releasedEn': 'First launched 2023',
    },
    'bailian': {
        'priceDetailEn': 'Free (basic). API pay-as-you-go. New users: 70M free tokens. Qwen3.5-Thinking free during beta.',
        'chineseSupportEn': '★★★★★ Alibaba Cloud native Chinese',
        'weaknessesEn': 'Tightly coupled to Alibaba Cloud; documentation sometimes in Chinese only; limited third-party model support',
        'releasedEn': 'First launched 2024',
    },
    'manus': {
        'priceDetailEn': 'Free (limited). Pro $199/mo. API not available yet.',
        'chineseSupportEn': '★★★★★ Chinese company, native Chinese support',
        'weaknessesEn': 'Very expensive Pro plan; still early stage; API not yet public; limited integrations',
        'releasedEn': 'Launched March 2025',
    },
    'coze': {
        'priceDetailEn': 'Free (basic). Pro ¥99/mo. API: BytePlus pricing. Coze Points system — cannot accumulate.',
        'chineseSupportEn': '★★★★★ ByteDance native Chinese',
        'weaknessesEn': 'Tightly ByteDance ecosystem; Points cannot accumulate; advanced features behind paywall',
        'releasedEn': 'First launched 2024',
    },
    'knot': {
        'priceDetailEn': 'Free (basic). Pro ¥29.9/mo. Enterprise custom pricing.',
        'chineseSupportEn': '★★★★★ Native Chinese, WeChat ecosystem',
        'weaknessesEn': 'Smaller ecosystem than Coze/Dify; limited third-party integrations; early stage product',
        'releasedEn': 'Launched 2025',
    },
    'wenxin-agent': {
        'priceDetailEn': 'Free (basic). API pay-as-you-go. ERNIE Agent Builder: free during beta.',
        'chineseSupportEn': '★★★★★ Baidu native Chinese',
        'weaknessesEn': 'Tightly Baidu ecosystem; limited non-Baidu model support; documentation quality varies',
        'releasedEn': 'Launched 2025',
    },
    # === 图像模型 ===
    'midjourney': {
        'priceDetailEn': 'Basic $10/mo (~200 images). Standard $30/mo (unlimited relax). Pro $60/mo (stealth, 12 concurrent). Mega $120/mo.',
        'chineseSupportEn': '★★☆☆☆ No Chinese UI, community tools needed',
        'weaknessesEn': 'Discord-only workflow can be clunky; no API; expensive for casual users; Chinese prompt support limited',
        'releasedEn': 'First launched July 2022, V7 Alpha 2025',
    },
    'dalle': {
        'priceDetailEn': 'Free (basic, with ChatGPT). ChatGPT Plus $20/mo (full access). API: DALL-E 3 $0.04-0.12/image (HD).',
        'chineseSupportEn': '★★★★☆ Good Chinese via ChatGPT prompts',
        'weaknessesEn': 'Less artistic control than Midjourney; behind on latest features; no standalone product',
        'releasedEn': 'First launched January 2021, DALL-E 3 October 2023',
    },
    'jimeng': {
        'priceDetailEn': 'Free (daily quota). API: ¥0.02-0.2/image depending on resolution.',
        'chineseSupportEn': '★★★★★ ByteDance native Chinese, Douyin integration',
        'weaknessesEn': 'Quality behind Midjourney; Douyin ecosystem lock-in; limited API documentation in English',
        'releasedEn': 'Launched 2024',
    },
    'flux': {
        'priceDetailEn': 'Free (open source, FLUX.1-schnell). FLUX.1-pro API: $0.05/image. FLUX.1-ultra: $0.06/image.',
        'chineseSupportEn': '★★★☆☆ Acceptable, prompt in English works best',
        'weaknessesEn': 'English-first prompting; requires decent GPU for self-hosted; Chinese text generation weak',
        'releasedEn': 'Launched August 2024 by Black Forest Labs',
    },
    'stable-diffusion': {
        'priceDetailEn': 'Free (open source, self-hosted). DreamStudio web: $10/1000 credits. API: Stability AI $0.01-0.15/image.',
        'chineseSupportEn': '★★☆☆☆ English prompts needed; community Chinese support',
        'weaknessesEn': 'Complex self-hosting; outdated vs competitors; company financial instability; Chinese support minimal',
        'releasedEn': 'First launched August 2022, SD3 2024',
    },
    # === 视频模型 ===
    'sora': {
        'priceDetailEn': 'ChatGPT Plus $20/mo (limited). Pro $200/mo (more generations, higher resolution).',
        'chineseSupportEn': '★★★☆☆ Works with Chinese prompts via ChatGPT',
        'weaknessesEn': 'China requires VPN; expensive Pro tier; generation limits on Plus; open to competition from Chinese models',
        'releasedEn': 'Launched December 2024 (public)',
    },
    'kling': {
        'priceDetailEn': 'Free (daily quota). Membership ¥58/mo (more credits). API: ¥0.3-1.5/video.',
        'chineseSupportEn': '★★★★★ Kuaishou native Chinese, excellent quality',
        'weaknessesEn': 'Quality varies; Kuaishou ecosystem less dev-friendly; limited English docs',
        'releasedEn': 'Launched June 2024 (Kling 1.0), Kling 2.0 2025',
    },
    'hailuo': {
        'priceDetailEn': 'Free (daily quota). Membership ¥39.9/mo. API: MiniMax API pricing.',
        'chineseSupportEn': '★★★★★ Native Chinese, strong video+voice combo',
        'weaknessesEn': 'Brand awareness lower than Jimeng/Kling; API docs limited; competitor gap narrowing',
        'releasedEn': 'Launched 2025',
    },
    'runway': {
        'priceDetailEn': 'Free (basic, 125 credits). Standard $15/mo (625 credits). Pro $35/mo (2250 credits). Unlimited $95/mo.',
        'chineseSupportEn': '★★☆☆☆ No Chinese UI; English prompts only',
        'weaknessesEn': 'Expensive for heavy use; no Chinese support; falling behind on some features; credits easy to burn',
        'releasedEn': 'First launched 2023, Gen-4 2025',
    },
    'pika': {
        'priceDetailEn': 'Free (basic, 250 credits). Standard $10/mo (700 credits). Unlimited $35/mo. Pro $70/mo.',
        'chineseSupportEn': '★★☆☆☆ English prompts needed',
        'weaknessesEn': 'Brand awareness lower than Runway; Chinese support minimal; features behind competitors',
        'releasedEn': 'Launched 2024, Pika 2.0 2025',
    },
    'veo': {
        'priceDetailEn': 'Via Google AI Studio (free during preview). Vertex AI API pricing TBD.',
        'chineseSupportEn': '★★★☆☆ Basic Chinese via Google ecosystem',
        'weaknessesEn': 'Still in preview; China access requires VPN; limited availability; unclear pricing',
        'releasedEn': 'Announced May 2025, preview 2025',
    },
    # === 代码模型 ===
    'codex': {
        'priceDetailEn': 'Open source (free self-hosted). OpenAI API: $15/month or pay-per-use. Terminal agent: free.',
        'chineseSupportEn': '★★★★☆ English-first, Chinese support improving',
        'weaknessesEn': 'Requires terminal comfort; SWE-bench lags behind Claude Code; new product, ecosystem immature',
        'releasedEn': 'Launched June 2025',
    },
    'claude-code': {
        'priceDetailEn': 'Free (limited via Claude Pro $20/mo). Max $200/mo (extended). Terminal agent: free, API costs extra.',
        'chineseSupportEn': '★★★☆☆ English-oriented, Chinese acceptable',
        'weaknessesEn': 'Expensive for heavy use; China requires VPN; terminal-only workflow for agent mode; Chinese documentation thin',
        'releasedEn': 'Launched February 2025',
    },
    'cursor': {
        'priceDetailEn': 'Free (Hobby, 2000 completions). Pro $20/mo (unlimited). Business $40/user/mo.',
        'chineseSupportEn': '★★★★☆ Good Chinese support in editor, English UI',
        'weaknessesEn': 'Expensive Pro tier; VS Code fork, not standalone; large project performance issues',
        'releasedEn': 'Launched 2023, Agent mode 2025',
    },
    'copilot': {
        'priceDetailEn': 'Free (basic, 2000 completions). Pro $10/mo (unlimited). Business $19/user/mo. Enterprise $39/user/mo.',
        'chineseSupportEn': '★★★★☆ GitHub ecosystem, Chinese code support good',
        'weaknessesEn': 'Completion quality behind Cursor; IDE integration varies; Microsoft ecosystem lock-in',
        'releasedEn': 'First launched June 2022, Copilot X 2024',
    },
    'windsurf': {
        'priceDetailEn': 'Free (basic). Pro $15/mo. Teams $30/user/mo.',
        'chineseSupportEn': '★★★★☆ Good Chinese, Cascade AI flow',
        'weaknessesEn': 'Smaller ecosystem than Cursor/GitHub; fewer integrations; brand awareness lower',
        'releasedEn': 'Launched 2024 (as Codeium Windsurf)',
    },
    'lovable': {
        'priceDetailEn': 'Free (basic, 5 projects). Launch $20/mo (50 projects). Scale $50/mo (unlimited).',
        'chineseSupportEn': '★★★☆☆ Basic Chinese, UI-focused English',
        'weaknessesEn': 'Full-stack only, not IDE plugin; limited to web apps; enterprise features behind paywall',
        'releasedEn': 'Launched 2024',
    },
    'bolt': {
        'priceDetailEn': 'Free (basic, 200K tokens/day). Pro $20/mo (2M tokens). Teams $50/user/mo.',
        'chineseSupportEn': '★★★☆☆ Basic Chinese support',
        'weaknessesEn': 'Token limits on free tier; newer product, less mature; ecosystem smaller',
        'releasedEn': 'Launched 2024',
    },
    # === AI辅助工具 ===
    'gamma': {
        'priceDetailEn': 'Free (basic, 400 AI credits). Plus $10/mo (unlimited). Pro $20/mo (unlimited, advanced).',
        'chineseSupportEn': '★★★★☆ Good Chinese, PPT+documents',
        'weaknessesEn': 'Credit system on free tier; templates can feel repetitive; less flexible than manual design',
        'releasedEn': 'Launched 2023',
    },
    'notebooklm': {
        'priceDetailEn': 'Free. Part of Google One. No paid tiers yet.',
        'chineseSupportEn': '★★★☆☆ Basic Chinese, English-first',
        'weaknessesEn': 'China requires VPN; Chinese audio generation quality mixed; limited features vs competitors; Google account required',
        'releasedEn': 'Launched July 2023, Audio Overviews September 2024',
    },
    'perplexity': {
        'priceDetailEn': 'Free (basic, 5 Pro searches/day). Pro $20/mo (unlimited, Deep Research).',
        'chineseSupportEn': '★★★☆☆ Basic Chinese search, English best',
        'weaknessesEn': 'China requires VPN; Chinese search quality behind domestic; free tier very limited',
        'releasedEn': 'First launched December 2022',
    },
    'canva-ai': {
        'priceDetailEn': 'Free (basic, limited AI). Pro $15/mo (full AI suite). Teams $30/user/mo.',
        'chineseSupportEn': '★★★★☆ Good Chinese UI and templates',
        'weaknessesEn': 'AI features locked behind Pro; design flexibility less than professional tools; template-heavy',
        'releasedEn': 'AI features launched 2023, Magic Studio 2024',
    },
    'elevenlabs': {
        'priceDetailEn': 'Free (10K chars/mo). Starter $5/mo (30K). Creator $22/mo (100K). Pro $99/mo (500K).',
        'chineseSupportEn': '★★★☆☆ Chinese voice quality mixed; English best',
        'weaknessesEn': 'Chinese TTS quality behind English; expensive for heavy use; character limits per month',
        'releasedEn': 'Launched 2022, Turbo 2.5 2024',
    },
    'suno': {
        'priceDetailEn': 'Free (50 credits/day). Pro $10/mo (500 songs). Premier $30/mo (2000 songs).',
        'chineseSupportEn': '★★★☆☆ Chinese lyrics work, best with English instructions',
        'weaknessesEn': 'Chinese song generation quality mixed; copyright grey area; limited control over output',
        'releasedEn': 'Launched December 2023, V4 2024',
    },
    'anthropic-claude-code': {
        'priceDetailEn': 'Free (limited via Claude Pro $20/mo). Max $200/mo (extended). Terminal agent: free, API costs extra.',
        'chineseSupportEn': '★★★☆☆ English-oriented, Chinese acceptable',
        'weaknessesEn': 'Already covered as Claude Code above; duplicates coding tool entry',
        'releasedEn': 'Launched February 2025',
    },
    'gemini-deep-research': {
        'priceDetailEn': 'Free (limited). Gemini Advanced $19.99/mo (full access).',
        'chineseSupportEn': '★★★☆☆ Basic Chinese research capability',
        'weaknessesEn': 'China requires VPN; Chinese research depth behind domestic tools; Google ecosystem required',
        'releasedEn': 'Launched December 2024',
    },
}


def add_missing_fields(models):
    """Add missing *En fields to each model, using pre-defined translations or auto-generated fallbacks"""
    for model in models:
        mid = model.get('id', '')
        translations = TRANSLATIONS.get(mid, {})

        # priceDetailEn
        if 'priceDetailEn' not in model and 'priceDetail' in model:
            model['priceDetailEn'] = translations.get('priceDetailEn', model['priceDetail'])

        # chineseSupportEn
        if 'chineseSupportEn' not in model and 'chineseSupport' in model:
            model['chineseSupportEn'] = translations.get('chineseSupportEn', model['chineseSupport'])

        # weaknessesEn
        if 'weaknessesEn' not in model and 'weaknesses' in model:
            model['weaknessesEn'] = translations.get('weaknessesEn', model['weaknesses'])

        # releasedEn
        if 'releasedEn' not in model and 'released' in model:
            model['releasedEn'] = translations.get('releasedEn', model['released'])

    return models


def inject_models_into_main_js(models):
    """Replace the models array inside main.js with updated models"""
    with open(MAIN_JS_PATH, 'r', encoding='utf-8') as f:
        content = f.read()

    # Extract the models array to replace it
    start = content.index('const models = [')
    end = content.index('\n];', start) + 3

    # Build the new models array string
    lines = ['const models = [']
    for i, m in enumerate(models):
        json_str = json.dumps(m, ensure_ascii=False)
        # Reformat: pretty-print each model with indentation
        formatted = json.dumps(m, ensure_ascii=False, indent=8)
        # Add comma separator
        if i < len(models) - 1:
            lines.append(formatted + ',')
        else:
            lines.append(formatted)
    lines.append('];')

    new_array = '\n'.join(lines)

    # Replace in content
    new_content = content[:start] + new_array + content[end:]

    with open(MAIN_JS_PATH, 'w', encoding='utf-8') as f:
        f.write(new_content)

    print(f'Updated main.js with {len(models)} models')


def main():
    # Read existing models.json
    with open(JSON_PATH, 'r', encoding='utf-8') as f:
        models = json.load(f)

    print(f'Loaded {len(models)} models')

    # Add missing English fields
    added_count = 0
    for model in models:
        mid = model.get('id', '?')
        fields_added = []
        for field in ['priceDetailEn', 'chineseSupportEn', 'weaknessesEn', 'releasedEn']:
            if field not in model:
                fields_added.append(field)
        if fields_added:
            model.update(TRANSLATIONS.get(mid, {}))
            added_count += 1
            print(f'  {mid}: added {", ".join(fields_added)}')

    # Add missing fields
    models = add_missing_fields(models)

    # Write updated models.json
    with open(JSON_PATH, 'w', encoding='utf-8') as f:
        json.dump(models, f, ensure_ascii=False, indent=2)
    print(f'Wrote updated models.json')

    # Inject into main.js
    inject_models_into_main_js(models)

    print(f'\nDone! Updated {added_count} models with English fields.')


if __name__ == '__main__':
    main()

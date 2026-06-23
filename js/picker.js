// AI家AI户 - AI选型器引擎
// 4步决策：场景 → 经验 → 预算 → 人格

(function() {
'use strict';

// ========== 状态管理 ==========
const state = {
    step: 0,
    scene: null,       // code | writing | image | search | video | chat
    experience: null,  // newbie | some | expert
    budget: null,      // free | moderate | unlimited
    personality: null  // pragmatist | creator | efficiency | privacy
};

const steps = [
    { i18nKey: 'picker.step1', key: 'scene' },
    { i18nKey: 'picker.step2', key: 'experience' },
    { i18nKey: 'picker.step3', key: 'budget' },
    { i18nKey: 'picker.step4', key: 'personality' }
];

const stepOptions = {
    scene: [
        { value: 'code',    emoji: '💻', i18nLabel: 'picker.scene.code', i18nDesc: 'picker.scene.codingDesc' },
        { value: 'writing', emoji: '✍️', i18nLabel: 'picker.scene.writing', i18nDesc: 'picker.scene.writingDesc' },
        { value: 'image',   emoji: '🎨', i18nLabel: 'picker.scene.image', i18nDesc: 'picker.scene.imageDesc' },
        { value: 'search',  emoji: '🔍', i18nLabel: 'picker.scene.search', i18nDesc: 'picker.scene.searchDesc' },
        { value: 'video',   emoji: '🎬', i18nLabel: 'picker.scene.video', i18nDesc: 'picker.scene.videoDesc' },
        { value: 'chat',    emoji: '🤖', i18nLabel: 'picker.scene.chat', i18nDesc: 'picker.scene.chatDesc' }
    ],
    experience: [
        { value: 'newbie',  emoji: '🌱', i18nLabel: 'picker.exp.newbie', i18nDesc: 'picker.exp.newbieDesc' },
        { value: 'some',    emoji: '🌿', i18nLabel: 'picker.exp.some', i18nDesc: 'picker.exp.someDesc' },
        { value: 'expert',  emoji: '🌳', i18nLabel: 'picker.exp.expert', i18nDesc: 'picker.exp.expertDesc' }
    ],
    budget: [
        { value: 'free',     emoji: '🆓', i18nLabel: 'picker.budget.free', i18nDesc: 'picker.budget.freeDesc' },
        { value: 'moderate', emoji: '💰', i18nLabel: 'picker.budget.moderate', i18nDesc: 'picker.budget.moderateDesc' },
        { value: 'unlimited',emoji: '💎', i18nLabel: 'picker.budget.unlimited', i18nDesc: 'picker.budget.unlimitedDesc' }
    ],
    personality: [
        { value: 'pragmatist', emoji: '🔧', i18nLabel: 'picker.person.pragmatist', i18nDesc: 'picker.person.pragmatistDesc' },
        { value: 'creator',    emoji: '🎨', i18nLabel: 'picker.person.creator', i18nDesc: 'picker.person.creatorDesc' },
        { value: 'efficiency', emoji: '🚀', i18nLabel: 'picker.person.efficiency', i18nDesc: 'picker.person.efficiencyDesc' },
        { value: 'privacy',    emoji: '🔒', i18nLabel: 'picker.person.privacy', i18nDesc: 'picker.person.privacyDesc' }
    ]
};

function getOptionLabel(opt) { return typeof t === 'function' ? t(opt.i18nLabel) : (opt.label || opt.i18nLabel); }
function getOptionDesc(opt) { return typeof t === 'function' ? t(opt.i18nDesc) : (opt.desc || opt.i18nDesc); }

// ========== 推荐矩阵 ==========
// 规则格式: { scene, experience, budget, personality } → { main, alt1, alt2, reason }
// 每条规则返回模型ID，运行时从 models 数组取完整数据

const rules = [
    // ===== 写代码 =====
    // 新手 + 免费
    { s:'code', e:'newbie', b:'free', p:'pragmatist', main:'tongyi-lingma', a1:'deepseek', a2:'comate', reason:'通义灵码个人版完全免费，阿里出品稳定可靠，中文界面零门槛上手。备选DeepSeek V4编程能力强且免费，文心快码也是免费国产好选择。' },
    { s:'code', e:'newbie', b:'free', p:'creator',    main:'deepseek', a1:'tongyi-lingma', a2:'windsurf', reason:'DeepSeek V4推理和编程能力极强且完全免费，是零预算下最能打的编程模型。通义灵码免费稳定，Windsurf免费版也比Cursor大方。' },
    { s:'code', e:'newbie', b:'free', p:'efficiency',  main:'deepseek', a1:'codex', a2:'tongyi-lingma', reason:'DeepSeek V4免费且响应快，编程效率高。Codex CLI开源免费可本地运行，通义灵码免费且中文友好。' },
    { s:'code', e:'newbie', b:'free', p:'privacy',     main:'tongyi-lingma', a1:'deepseek', a2:'comate', reason:'通义灵码完全免费、国内直接使用、无需翻墙。DeepSeek同样免费国产，文心快码也是国内免翻墙的选择。' },
    // 新手 + 轻度付费
    { s:'code', e:'newbie', b:'moderate', p:'pragmatist', main:'github-copilot', a1:'windsurf', a2:'tongyi-lingma', reason:'GitHub Copilot $10/月最成熟稳定，VS Code深度集成。Windsurf免费版已经很能打，通义灵码完全免费做备选。' },
    { s:'code', e:'newbie', b:'moderate', p:'creator',    main:'cursor', a1:'github-copilot', a2:'deepseek', reason:'Cursor Pro $20/月体验天花板，多文件Agent编辑远超插件类。Copilot $10/月也不错，DeepSeek免费但编程能力出众。' },
    { s:'code', e:'newbie', b:'moderate', p:'efficiency',  main:'cursor', a1:'windsurf', a2:'codex', reason:'Cursor Agent模式效率最高，一句话改全项目。Windsurf Pro $15/月性价比好，Codex CLI开源免费。' },
    { s:'code', e:'newbie', b:'moderate', p:'privacy',     main:'cursor', a1:'tongyi-lingma', a2:'deepseek', reason:'Cursor Pro $20/月体验最好，不想花钱就用通义灵码（完全免费）。DeepSeek也是免费国产强选。' },
    // 新手 + 无限
    { s:'code', e:'newbie', b:'unlimited', p:'pragmatist', main:'github-copilot', a1:'cursor', a2:'codex', reason:'Copilot成熟稳定、全球最多开发者用。Cursor体验更极致，Codex CLI开源可控。' },
    { s:'code', e:'newbie', b:'unlimited', p:'creator',    main:'claude-code', a1:'cursor', a2:'codex', reason:'Claude Code Fable 5登顶AGI Ranker编程榜一（81分），复杂项目重构能力碾压。Cursor IDE体验丝滑，Codex开源无限用。' },
    { s:'code', e:'newbie', b:'unlimited', p:'efficiency',  main:'cursor', a1:'claude-code', a2:'codex', reason:'Cursor Agent模式效率最高，IDE内一站式完成编码。Claude Code编程最强但纯终端，Codex开源免费。' },

    // 用过几个 + 免费
    { s:'code', e:'some', b:'free', p:'pragmatist', main:'deepseek', a1:'tongyi-lingma', a2:'windsurf', reason:'DeepSeek V4免费且编程能力强，用过几款工具后你会更懂它的价值。通义灵码稳定免费，Windsurf免费版也不错。' },
    { s:'code', e:'some', b:'free', p:'creator',    main:'deepseek', a1:'minimax-m3', a2:'codex', reason:'DeepSeek V4免费编程最强。MiniMax M3开源且编程能力超越GPT-5.5，Codex CLI开源免费可本地跑。' },
    { s:'code', e:'some', b:'free', p:'efficiency',  main:'deepseek', a1:'codex', a2:'windsurf', reason:'DeepSeek V4免费高效。Codex CLI开源可本地跑不限额度，Windsurf免费版IDE体验流畅。' },
    { s:'code', e:'some', b:'free', p:'privacy',     main:'deepseek', a1:'tongyi-lingma', a2:'minimax-m3', reason:'DeepSeek完全免费国产，无需翻墙。通义灵码同样国产免费，MiniMax M3开源可控可本地部署。' },

    // 老手 + 免费
    { s:'code', e:'expert', b:'free', p:'pragmatist', main:'deepseek', a1:'codex', a2:'tongyi-lingma', reason:'DeepSeek V4免费且推理上乘，老手用得明白。Codex CLI开源可调，通义灵码企业版免费。' },
    { s:'code', e:'expert', b:'free', p:'creator',    main:'minimax-m3', a1:'deepseek', a2:'codex', reason:'MiniMax M3开源可定制，编程能力超越GPT-5.5，SWE-Bench Pro 59%。DeepSeek免费强力备选，Codex开源自由。' },
    { s:'code', e:'expert', b:'free', p:'efficiency',  main:'deepseek', a1:'codex', a2:'minimax-m3', reason:'DeepSeek V4免费高效无上限。Codex CLI开源本地跑，MiniMax M3开源API可用。' },

    // 老手 + 无限
    { s:'code', e:'expert', b:'unlimited', p:'creator',    main:'claude-code', a1:'cursor', a2:'minimax-m3', reason:'Claude Code Fable 5编程榜冠军，老手才能榨干它的潜力。Cursor IDE一体化体验极致，MiniMax M3开源可魔改。' },
    { s:'code', e:'expert', b:'unlimited', p:'efficiency',  main:'cursor', a1:'claude-code', a2:'codex', reason:'Cursor完整Agent模式效率拉满。Claude Code深度重构能力最强，Codex开源无限可定制。' },
    { s:'code', e:'expert', b:'unlimited', p:'pragmatist', main:'cursor', a1:'github-copilot', a2:'claude-code', reason:'Cursor Pro $20/月功能最全最稳定。Copilot成熟可靠，Claude Code适合超复杂项目。' },
    { s:'code', e:'expert', b:'unlimited', p:'privacy',     main:'cursor', a1:'minimax-m3', a2:'deepseek', reason:'Cursor本地IDE数据可控。MiniMax M3开源可本地部署，DeepSeek免费国产。' },

    // ===== 写作 =====
    { s:'writing', e:'newbie', b:'free', p:'pragmatist', main:'kimi', a1:'deepseek', a2:'qwen', reason:'Kimi免费版日常写作完全够用，长文处理和语气把控到位。DeepSeek通用能力强且免费，通义千问也很稳定。' },
    { s:'writing', e:'newbie', b:'free', p:'creator',    main:'kimi', a1:'deepseek', a2:'chatgpt', reason:'Kimi中文写作公认最细腻，200万上下文能读完一本小说。DeepSeek免费全能，ChatGPT免费版英文写作也够用。' },
    { s:'writing', e:'newbie', b:'free', p:'privacy',     main:'kimi', a1:'deepseek', a2:'qwen', reason:'Kimi国产无需翻墙，中文写作体验最佳。DeepSeek和通义千问也是免翻墙的国产好选择。' },
    { s:'writing', e:'some', b:'free', p:'creator',    main:'kimi', a1:'deepseek', a2:'claude', reason:'Kimi中文长文写作天花板。DeepSeek免费强力通用，Claude免费版写作质量也很高。' },
    { s:'writing', e:'some', b:'moderate', p:'creator',main:'kimi', a1:'claude', a2:'chatgpt', reason:'Kimi ¥49/月解锁完整写作能力。Claude Pro $20/月写作细腻度公认最优，ChatGPT Plus综合体验最稳。' },
    { s:'writing', e:'expert', b:'unlimited', p:'creator', main:'claude', a1:'kimi', a2:'chatgpt', reason:'Claude Opus写作天花板，语气细腻、逻辑严谨。Kimi中文写作仍是首选，ChatGPT Plus综合最强。' },
    { s:'writing', e:'expert', b:'unlimited', p:'efficiency', main:'claude', a1:'chatgpt', a2:'deepseek', reason:'Claude Opus专业写作效率最高。ChatGPT Plus多模态一体化，DeepSeek免费备用。' },

    // ===== 图片 =====
    { s:'image', e:'newbie', b:'free', p:'pragmatist', main:'jimeng', a1:'dalle', a2:'stable-diffusion', reason:'即梦（字节出品）中文Prompt零门槛，免费额度大方。DALL-E在ChatGPT免费版里可用，Stable Diffusion开源但需技术。' },
    { s:'image', e:'newbie', b:'free', p:'privacy',     main:'jimeng', a1:'stable-diffusion', a2:'dalle', reason:'即梦国产免翻墙、中文好用。Stable Diffusion开源可本地部署数据不外传，DALL-E需翻墙。' },
    { s:'image', e:'some', b:'moderate', p:'creator',  main:'midjourney', a1:'dalle', a2:'jimeng', reason:'Midjourney V7图像质量天花板，$10/月即可入门。DALL-E 3.5与ChatGPT深度集成极方便，即梦免费好用。' },
    { s:'image', e:'expert', b:'unlimited', p:'creator', main:'midjourney', a1:'flux', a2:'stable-diffusion', reason:'Midjourney V7+Niji 7画质和风格把控业界第一。FLUX文字渲染精准（海报/LOGO），SD开源可魔改。' },
    { s:'image', e:'expert', b:'unlimited', p:'efficiency', main:'midjourney', a1:'flux', a2:'dalle', reason:'Midjourney出图效率最高质量最好。FLUX速度快且文字渲染精准，DALL-E自然语言描述最省事。' },

    // ===== 搜索研究 =====
    { s:'search', e:'newbie', b:'free', p:'pragmatist', main:'deepseek', a1:'kimi', a2:'qwen', reason:'DeepSeek V4推理能力强且完全免费，适合深度研究。Kimi长文本处理和分析出色，通义千问企业级可靠。' },
    { s:'search', e:'some', b:'moderate', p:'creator',main:'claude', a1:'deepseek', a2:'gemini', reason:'Claude Pro $20/月长文档分析+严谨推理最适合研究。DeepSeek免费强力备选，Gemini有Google搜索加持。' },
    { s:'search', e:'expert', b:'unlimited', p:'efficiency', main:'claude', a1:'chatgpt', a2:'gemini', reason:'Claude Opus深度分析和推理无敌。ChatGPT Plus综合能力强，Gemini集成Google生态实时搜索。' },

    // ===== 视频 =====
    { s:'video', e:'newbie', b:'free', p:'pragmatist', main:'kling', a1:'hailuo-video', a2:'pika', reason:'可灵（快手出品）免费额度大方、中文零门槛、生成速度快。海螺视频也是国产免费好选，Pika趣味性强。' },
    { s:'video', e:'some', b:'moderate', p:'creator', main:'runway', a1:'kling', a2:'pika', reason:'Runway Gen-4功能最全面（生成+后期+音频），$15/月性价比高。可灵国产免费备用，Pika入门便宜。' },
    { s:'video', e:'expert', b:'unlimited', p:'creator', main:'sora', a1:'runway', a2:'veo', reason:'Sora影视级画质天花板，物理光影极其逼真。Runway专业后期工具最全，Veo与Gemini集成一站式。' },

    // ===== 日常聊天 =====
    { s:'chat', e:'newbie', b:'free', p:'pragmatist', main:'deepseek', a1:'qwen', a2:'kimi', reason:'DeepSeek V4完全免费且综合能力强，日常使用完全够用。通义千问阿里出品稳定，Kimi对话体验好。' },
    { s:'chat', e:'newbie', b:'free', p:'privacy',     main:'deepseek', a1:'qwen', a2:'kimi', reason:'DeepSeek国产免费免翻墙，日常聊天最省心。通义千问和Kimi同样是无需翻墙的国产好选择。' },
    { s:'chat', e:'some', b:'moderate', p:'creator',   main:'claude', a1:'chatgpt', a2:'deepseek', reason:'Claude Pro $20/月日常对话最自然。ChatGPT Plus多模态一体化方便，DeepSeek免费强力备用。' },
    { s:'chat', e:'expert', b:'unlimited', p:'pragmatist', main:'chatgpt', a1:'claude', a2:'gemini', reason:'ChatGPT Plus $20/月综合体验最稳定。Claude对话更细腻，Gemini有Google生态加持。' },
];

// 默认兜底规则（当没有精确匹配时，按场景+预算降级匹配）
function fallbackRecommend() {
    const { scene, experience, budget, personality } = state;
    // 尝试降级匹配：忽略人格 → 忽略经验 → 忽略预算
    let match = rules.find(r => r.s===scene && r.e===experience && r.b===budget && r.p===personality);
    if (match) return match;
    match = rules.find(r => r.s===scene && r.e===experience && r.b===budget);
    if (match) return match;
    match = rules.find(r => r.s===scene && r.b===budget);
    if (match) return match;
    match = rules.find(r => r.s===scene);
    if (match) return match;
    // 终极兜底
    return { main:'deepseek', a1:'kimi', a2:'qwen', reason:'DeepSeek V4是完全免费的通用AI，中文原生体验极好，适合大多数场景。Kimi写作出色，通义千问企业级可靠。' };
}

// ========== 推荐引擎 ==========
function getModelById(id) {
    if (typeof models === 'undefined') return null;
    return models.find(m => m.id === id) || null;
}

function recommend() {
    const rule = fallbackRecommend();
    const main = getModelById(rule.main);
    const alt1 = getModelById(rule.a1);
    const alt2 = getModelById(rule.a2);
    if (!main) return rule; // 模型数据没加载完

    return {
        main: { name: main.name, id: main.id, price: main.priceLabel, strengths: main.strengths, website: main.website },
        alt1: { name: alt1 ? alt1.name : '—', id: alt1 ? alt1.id : '', price: alt1 ? alt1.priceLabel : '', strengths: alt1 ? alt1.strengths : '' },
        alt2: { name: alt2 ? alt2.name : '—', id: alt2 ? alt2.id : '', price: alt2 ? alt2.priceLabel : '', strengths: alt2 ? alt2.strengths : '' },
        reason: rule.reason
    };
}

// ========== 人格标签 ==========
function getTag() {
    const pLabel = stepOptions.personality.find(o => o.value === state.personality);
    const eLabel = stepOptions.experience.find(o => o.value === state.experience);
    const bLabel = stepOptions.budget.find(o => o.value === state.budget);
    const sLabel = stepOptions.scene.find(o => o.value === state.scene);
    return (pLabel ? pLabel.emoji + ' ' + getOptionLabel(pLabel) + t('picker.tag.typeSuffix') : '') +
           (eLabel ? getOptionLabel(eLabel) : '') + ' · ' +
           (bLabel ? getOptionLabel(bLabel) : '') + ' · ' +
           (sLabel ? getOptionLabel(sLabel) + t('picker.tag.sceneSuffix') : '');
}

// ========== URL 分享 ==========
function buildShareUrl() {
    const params = new URLSearchParams();
    const r = recommend();
    if (r.main) params.set('main', r.main.id);
    params.set('tag', getTag());
    params.set('reason', encodeURIComponent(r.reason || ''));
    return window.location.origin + window.location.pathname + '?' + params.toString();
}

function loadFromURL() {
    const params = new URLSearchParams(window.location.search);
    const mainId = params.get('main');
    const tag = params.get('tag');
    const reason = params.get('reason');
    if (mainId && tag && reason) {
        return {
            mainId, tag, reason: decodeURIComponent(reason),
            result: getModelById(mainId)
        };
    }
    return null;
}

// ========== UI 渲染 ==========
function renderStep() {
    const container = document.getElementById('pickerSteps');
    if (!container) return;

    if (state.step >= steps.length) {
        renderResult();
        return;
    }

    const s = steps[state.step];
    const opts = stepOptions[s.key];

    let html = '<div class="picker-step fade-in">';
    html += '<div class="picker-step-indicator">';
    for (let i = 0; i < steps.length; i++) {
        const cls = i < state.step ? 'done' : i === state.step ? 'current' : '';
        html += '<span class="step-dot ' + cls + '"></span>';
        if (i < steps.length - 1) html += '<span class="step-line ' + (i < state.step ? 'done' : '') + '"></span>';
    }
    html += '</div>';
    html += '<h2 class="picker-question">' + t(s.i18nKey) + '</h2>';
    html += '<div class="picker-options">';

    opts.forEach((opt, idx) => {
        const selected = state[s.key] === opt.value;
        html += '<button class="picker-option' + (selected ? ' selected' : '') + '" onclick="PickerSelect(\'' + s.key + '\', \'' + opt.value + '\')">';
        html += '<span class="opt-emoji">' + opt.emoji + '</span>';
        html += '<div class="opt-text"><span class="opt-label">' + getOptionLabel(opt) + '</span>';
        html += '<span class="opt-desc">' + getOptionDesc(opt) + '</span></div>';
        html += '</button>';
    });

    html += '</div>';

    // 返回按钮（非第一步）
    if (state.step > 0) {
        html += '<div class="picker-nav"><button class="picker-back" onclick="PickerBack()">' + t('picker.back') + '</button></div>';
    }

    html += '</div>';
    container.innerHTML = html;
}

function renderResult() {
    const container = document.getElementById('pickerSteps');
    if (!container) return;

    const tag = getTag();
    const r = recommend();

    const mainM = r.main || { name: '—', price: '', strengths: '', website: '#', id: '' };
    const alt1 = r.alt1 || { name: '—', price: '', strengths: '' };
    const alt2 = r.alt2 || { name: '—', price: '', strengths: '' };

    let html = '<div class="picker-result fade-in">';

    // 人格标签
    html += '<div class="result-tag">' + tag + '</div>';

    // 主推卡片
    html += '<div class="result-main-card">';
    html += '<div class="result-crown">' + t('picker.resultCrown') + '</div>';
    html += '<div class="result-main-name">★ ' + mainM.name + '</div>';
    html += '<div class="result-main-price">' + mainM.price + '</div>';
    html += '<div class="result-main-reason">' + (r.reason ? r.reason.split('。')[0] + '。' : mainM.strengths) + '</div>';
    if (mainM.website) {
        html += '<a href="' + mainM.website + '" target="_blank" rel="noopener" class="result-main-link">' + t('picker.resultGo') + mainM.name + t('picker.resultLink') + '</a>';
    }
    html += '</div>';

    // 备选方案
    html += '<div class="result-alt">';
    html += '<div class="result-alt-title">' + t('picker.resultAlt') + '</div>';
    html += '<div class="result-alt-item"><strong>' + alt1.name + '</strong>' + (alt1.price ? ' — ' + alt1.price.split(' / ')[0] : '') + '<br><span class="result-alt-desc">' + (alt1.strengths ? alt1.strengths.split('。')[0] + '。' : '') + '</span></div>';
    html += '<div class="result-alt-item"><strong>' + alt2.name + '</strong>' + (alt2.price ? ' — ' + alt2.price.split(' / ')[0] : '') + '<br><span class="result-alt-desc">' + (alt2.strengths ? alt2.strengths.split('。')[0] + '。' : '') + '</span></div>';
    html += '</div>';

    // 操作按钮
    html += '<div class="result-actions">';
    html += '<button class="result-btn btn-reset" onclick="PickerReset()">' + t('picker.btnReset') + '</button>';
    html += '<a href="compare-custom.html" class="result-btn btn-compare">' + t('picker.btnCompare') + '</a>';
    html += '<button class="result-btn btn-share" onclick="PickerShare()">' + t('picker.btnShare') + '</button>';
    html += '</div>';

    html += '</div>';
    container.innerHTML = html;
}

// ========== 导出页面函数 ==========
window.PickerSelect = function(key, value) {
    state[key] = value;
    state.step++;
    // 预算步骤特殊处理：图片/视频/聊天场景跳过一些不相关的步骤
    if (key === 'budget' && (state.scene === 'image' || state.scene === 'video' || state.scene === 'chat')) {
        // 这些场景人格影响不大，但保留完整流程以保持体验一致
    }
    renderStep();
    // 滚动到顶部
    document.getElementById('pickerSteps').scrollIntoView({ behavior: 'smooth' });
};

window.PickerBack = function() {
    if (state.step > 0) {
        state.step--;
        // 清除当前步骤的选择
        const currentKey = steps[state.step].key;
        state[currentKey] = null;
        renderStep();
        document.getElementById('pickerSteps').scrollIntoView({ behavior: 'smooth' });
    }
};

window.PickerReset = function() {
    state.step = 0;
    state.scene = null;
    state.experience = null;
    state.budget = null;
    state.personality = null;
    renderStep();
    document.getElementById('pickerSteps').scrollIntoView({ behavior: 'smooth' });
};

window.PickerShare = function() {
    const url = buildShareUrl();
    if (navigator.clipboard) {
        navigator.clipboard.writeText(url).then(() => {
            alert(t('picker.shareOk'));
        }).catch(() => {
            prompt(t('picker.sharePrompt'), url);
        });
    } else {
        prompt(t('picker.sharePrompt'), url);
    }
};

// 初始化
document.addEventListener('DOMContentLoaded', function() {
    const shared = loadFromURL();
    if (shared && shared.result) {
        // 有分享链接，直接展示结果
        state.step = steps.length; // 跳过步骤直接到结果
        // 我们需要重建状态以便renderResult正常工作
        // 从URL恢复人格标签
        const r = recommend();
        renderResult();
    } else {
        renderStep();
    }
});

})();

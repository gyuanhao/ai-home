// AI家AI户 - VS对比页通用渲染脚本
// 用法：在HTML中定义 <script>const VS_IDS = ['id1', 'id2'];</script> 然后加载本脚本

(function() {
    if (typeof VS_IDS === 'undefined' || VS_IDS.length !== 2) return;

    document.addEventListener('DOMContentLoaded', function() {
        const modelA = models.find(m => m.id === VS_IDS[0]);
        const modelB = models.find(m => m.id === VS_IDS[1]);

        if (!modelA || !modelB) {
            document.body.innerHTML = '<div style="text-align:center;padding:100px 24px;"><h2>模型数据未找到</h2><p>请检查页面配置</p><p><a href="/">返回首页</a></p></div>';
            return;
        }

        renderVsPage(modelA, modelB);
    });

    function renderVsPage(a, b) {
        // 基本信息对比表
        const basicTable = document.getElementById('basicCompare');
        if (basicTable) {
            const rows = [
                ['开发商', a.company, b.company],
                ['价格', a.priceLabel, b.priceLabel],
                ['详细定价', a.priceDetail, b.priceDetail],
                ['中文支持', a.chineseSupport, b.chineseSupport],
                ['上下文窗口', a.contextWindow, b.contextWindow],
                ['API可用', a.apiAvailable ? '✅ 可用' : '❌ 不可用', b.apiAvailable ? '✅ 可用' : '❌ 不可用'],
                ['发布日期', a.released, b.released],
            ];
            basicTable.innerHTML = rows.map(r =>
                '<tr><td>' + r[0] + '</td><td>' + r[1] + '</td><td>' + r[2] + '</td></tr>'
            ).join('');
        }

        // 优劣势对比
        const proconTable = document.getElementById('proconCompare');
        if (proconTable) {
            const rows = [
                ['核心优势', a.strengths, b.strengths],
                ['主要短板', a.weaknesses, b.weaknesses],
                ['最适合', a.bestFor, b.bestFor],
            ];
            proconTable.innerHTML = rows.map(r =>
                '<tr><td>' + r[0] + '</td><td>' + r[1] + '</td><td>' + r[2] + '</td></tr>'
            ).join('');
        }

        // 填充卡片区
        ['cardAName', 'cardBName'].forEach(function(id) {
            const el = document.getElementById(id);
            if (!el) return;
            const model = id === 'cardAName' ? a : b;
            el.textContent = model.name;
        });

        ['cardACompany', 'cardBCompany'].forEach(function(id) {
            const el = document.getElementById(id);
            if (!el) return;
            const model = id === 'cardACompany' ? a : b;
            el.textContent = model.company;
        });

        ['cardAPrice', 'cardBPrice'].forEach(function(id) {
            const el = document.getElementById(id);
            if (!el) return;
            const model = id === 'cardAPrice' ? a : b;
            el.textContent = model.priceLabel;
        });

        ['cardATags', 'cardBTags'].forEach(function(id) {
            const el = document.getElementById(id);
            if (!el) return;
            const model = id === 'cardATags' ? a : b;
            el.innerHTML = model.tags.map(function(t) { return '<span class="model-tag">' + t + '</span>'; }).join('');
        });

        ['cardADesc', 'cardBDesc'].forEach(function(id) {
            const el = document.getElementById(id);
            if (!el) return;
            const model = id === 'cardADesc' ? a : b;
            el.textContent = model.strengths;
        });

        ['cardABest', 'cardBBest'].forEach(function(id) {
            const el = document.getElementById(id);
            if (!el) return;
            const model = id === 'cardABest' ? a : b;
            el.textContent = '最适合：' + model.bestFor;
        });

        ['linkA', 'linkB'].forEach(function(id) {
            const el = document.getElementById(id);
            if (!el) return;
            const model = id === 'linkA' ? a : b;
            el.href = model.website;
        });

        document.getElementById('pageDate') && (document.getElementById('pageDate').textContent = a.lastUpdated);
        document.getElementById('pageSourceA') && (document.getElementById('pageSourceA').textContent = a.source);
        document.getElementById('pageSourceB') && (document.getElementById('pageSourceB').textContent = b.source);

        // 推荐结论
        const conclusion = document.getElementById('vsConclusion');
        if (conclusion) {
            conclusion.innerHTML = generateConclusion(a, b);
        }
    }

    function generateConclusion(a, b) {
        const aFree = a.pricing === 'free';
        const bFree = b.pricing === 'free';

        let html = '<div class="vs-conclusion"><h3>总结：怎么选？</h3>';

        if (aFree && !bFree) {
            html += '<p>如果预算为零或想降低成本，<strong>' + a.name + '</strong> 有免费版本可用，日常对话体验良好。</p>';
            html += '<p>如果愿意付费且需要更强性能、更多功能（如图像/视频），<strong>' + b.name + '</strong> 值得投入。</p>';
        } else if (bFree && !aFree) {
            html += '<p>如果预算为零或想降低成本，<strong>' + b.name + '</strong> 有免费版本可用，日常对话体验良好。</p>';
            html += '<p>如果愿意付费且需要更强性能，<strong>' + a.name + '</strong> 值得投入。</p>';
        } else if (aFree && bFree) {
            html += '<p>两个都免费，可以同时用！<strong>' + a.name + '</strong> 和 <strong>' + b.name + '</strong> 各有所长，建议根据具体场景切换。</p>';
        } else {
            html += '<p>两者各有千秋，选择取决于你的需求和预算。建议先试试两者的免费版，感受一下风格差异再做决定。</p>';
        }

        html += '<p>还可以试试 <a href="../compare-custom.html">自定义对比工具</a>，勾选你想比的任意模型一键对比。</p>';
        html += '</div>';

        return html;
    }
})();

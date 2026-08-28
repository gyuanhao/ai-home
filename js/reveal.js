// 通用滚动进场：给 .reveal 元素加 .in（错峰淡入上浮）。
// 用法：渲染卡片后调用 window.initReveal(容器)；本文件也会在 DOMContentLoaded 自动扫描一次。
// 渐进增强：仅在 JS 可用时给 <html> 加 .reveal-ready，使 .reveal 的初始隐藏态生效；
// 若本文件被移除/加载失败，.reveal 不隐藏，内容照常可见（避免“删掉动效内容就没了”）。
(function () {
    document.documentElement.classList.add('reveal-ready');
    function initReveal(scope) {
        var root = scope || document;
        var els = root.querySelectorAll('.reveal:not(.in)');
        if (!els.length) return;
        // 不支持 IntersectionObserver 时直接显示，避免卡片永久隐藏
        if (!('IntersectionObserver' in window)) {
            Array.prototype.forEach.call(els, function (e) { e.classList.add('in'); });
            return;
        }
        var io = new IntersectionObserver(function (entries) {
            entries.forEach(function (en) {
                if (en.isIntersecting) {
                    en.target.classList.add('in');
                    io.unobserve(en.target);
                }
            });
        }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });
        Array.prototype.forEach.call(els, function (el, i) {
            el.style.transitionDelay = ((i % 4) * 60) + 'ms';
            io.observe(el);
        });
    }
    window.initReveal = initReveal;
    function run() {
        initReveal();
        // 兜底：1.5s 后强制揭示仍未被 observer 触发的 .reveal，
        // 杜绝因动态内容注入、observer 未命中或脚本异常导致内容永久隐藏。
        setTimeout(function () {
            var stuck = document.querySelectorAll('.reveal:not(.in)');
            Array.prototype.forEach.call(stuck, function (e) { e.classList.add('in'); });
        }, 1500);
    }
    if (document.readyState !== 'loading') run();
    else document.addEventListener('DOMContentLoaded', run);
})();

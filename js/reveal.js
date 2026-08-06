// 通用滚动进场：给 .reveal 元素加 .in（错峰淡入上浮）。
// 用法：渲染卡片后调用 window.initReveal(容器)；本文件也会在 DOMContentLoaded 自动扫描一次。
(function () {
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
    if (document.readyState !== 'loading') {
        initReveal();
    } else {
        document.addEventListener('DOMContentLoaded', function () { initReveal(); });
    }
})();

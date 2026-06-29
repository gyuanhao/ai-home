(function() {
    'use strict';

    /* ---- 从桌面端导航克隆链接到抽屉 ---- */
    function initDrawer() {
        var navLinks  = document.querySelector('.nav-links');
        var drawerUl  = document.querySelector('.drawer-links');
        if (!navLinks || !drawerUl) return;

        var items = navLinks.querySelectorAll('li');
        items.forEach(function(li) {
            var clone = li.cloneNode(true);
            // 语言切换按钮单独处理
            var btn = clone.querySelector('button');
            if (btn) {
                btn.style.marginLeft = '';
                clone.classList.add('drawer-lang-row');
            }
            drawerUl.appendChild(clone);
        });
    }

    /* ---- 打开 / 关闭 ---- */
    window.toggleMobileNav = function() {
        var overlay = document.getElementById('navOverlay');
        var drawer  = document.getElementById('navDrawer');
        if (!overlay || !drawer) return;
        var opening = !drawer.classList.contains('open');
        overlay.classList.toggle('open', opening);
        drawer.classList.toggle('open', opening);
        document.body.style.overflow = opening ? 'hidden' : '';
    };

    window.closeMobileNav = function() {
        var overlay = document.getElementById('navOverlay');
        var drawer  = document.getElementById('navDrawer');
        if (overlay) overlay.classList.remove('open');
        if (drawer)  drawer.classList.remove('open');
        document.body.style.overflow = '';
    };

    /* ---- 底部 Tab 高亮当前页 ---- */
    function setActiveTab() {
        var path = window.location.pathname;
        var tabs = document.querySelectorAll('.mobile-tab');
        tabs.forEach(function(t) { t.classList.remove('active'); });

        if (path.endsWith('/') || path.endsWith('index.html')) {
            tabs[0] && tabs[0].classList.add('active');          // 首页
        } else if (path.includes('models.html')) {
            tabs[1] && tabs[1].classList.add('active');          // 模型库
        } else if (path.includes('compare')) {
            tabs[2] && tabs[2].classList.add('active');          // 对比
        } else if (path.includes('skills.html')) {
            tabs[3] && tabs[3].classList.add('active');          // 技能包
        }
    }

    /* ---- 启动 ---- */
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function() {
            initDrawer();
            setActiveTab();
        });
    } else {
        initDrawer();
        setActiveTab();
    }
})();

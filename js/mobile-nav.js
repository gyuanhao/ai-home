(function() {
    'use strict';

    /* ---- 移动端抽屉打开 / 关闭（操作 #sidebarDrawer，其 z-index 高于遮罩，可正常点击）---- */
    window.toggleSidebar = function() {
        var drawer  = document.getElementById('sidebarDrawer');
        var overlay = document.getElementById('sidebarOverlay');
        if (!drawer) return;
        var opening = !drawer.classList.contains('open');
        drawer.classList.toggle('open', opening);
        if (overlay) overlay.classList.toggle('open', opening);
        document.body.style.overflow = opening ? 'hidden' : '';
    };

    window.closeSidebar = function() {
        var drawer  = document.getElementById('sidebarDrawer');
        var overlay = document.getElementById('sidebarOverlay');
        if (drawer)  drawer.classList.remove('open');
        if (overlay) overlay.classList.remove('open');
        document.body.style.overflow = '';
    };

    /* ---- 兼容旧函数名（部分页面可能仍引用） ---- */
    window.toggleMobileNav = window.toggleSidebar;
    window.closeMobileNav  = window.closeSidebar;

    /* ---- 底部 Tab 高亮当前页 ---- */
    function setActiveTab() {
        var path = window.location.pathname;
        var tabs = document.querySelectorAll('.mobile-tab');
        tabs.forEach(function(t) { t.classList.remove('active'); });

        if (path.endsWith('/') || path.endsWith('index.html')) {
            tabs[0] && tabs[0].classList.add('active');
        } else if (path.includes('models.html')) {
            tabs[1] && tabs[1].classList.add('active');
        } else if (path.includes('compare')) {
            tabs[2] && tabs[2].classList.add('active');
        } else if (path.includes('skills.html')) {
            tabs[3] && tabs[3].classList.add('active');
        } else if (path.includes('tools.html') || path.includes('/tools/')) {
            tabs[2] && tabs[2].classList.add('active');
        }
    }

    /* ---- 点击侧边栏链接后关闭移动端抽屉 ---- */
    function bindDrawerLinks() {
        var sb = document.querySelector('.sidebar-drawer');
        if (!sb) return;
        sb.querySelectorAll('a').forEach(function(a) {
            a.addEventListener('click', function() { closeSidebar(); });
        });
    }

    /* ---- 启动 ---- */
    function init() {
        setActiveTab();
        bindDrawerLinks();
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();

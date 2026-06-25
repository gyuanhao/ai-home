/**
 * AI家AI户 — Cookie 同意弹窗
 * 轻量级实现，只依赖 localStorage，不引入额外依赖
 */
(function () {
    'use strict';

    var COOKIE_KEY = 'aihome_cookie_consent';

    // 已经做过选择的，不再弹窗
    if (localStorage.getItem(COOKIE_KEY)) return;

    // 获取当前语言
    var lang = (localStorage.getItem('aihome_lang') || 'zh') === 'en' ? 'en' : 'zh';

    var texts = {
        zh: {
            title: '🍪 Cookie 使用说明',
            body: '本网站使用 Cookie 来记住你的语言偏好、统计访问数据（Google Analytics），以及展示个性化广告（Google AdSense）。点击「接受」即表示同意。',
            accept: '接受',
            decline: '拒绝',
            more: '了解更多',
        },
        en: {
            title: '🍪 Cookie Notice',
            body: 'This site uses cookies to remember your language preference, track usage (Google Analytics), and show personalized ads (Google AdSense). Click "Accept" to agree.',
            accept: 'Accept',
            decline: 'Decline',
            more: 'Learn more',
        },
    };

    var t = texts[lang];

    // 遮罩层
    var overlay = document.createElement('div');
    overlay.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.25);z-index:9998;';

    // 弹窗
    var banner = document.createElement('div');
    banner.style.cssText =
        'position:fixed;bottom:0;left:0;right:0;z-index:9999;' +
        'background:var(--card-bg,#fff);border-top:1px solid var(--border,#e2e8f0);' +
        'padding:20px 24px;box-shadow:0 -4px 16px rgba(0,0,0,0.08);' +
        'display:flex;align-items:center;justify-content:center;flex-wrap:wrap;gap:14px;' +
        'font-size:14px;color:var(--text,#1e293b);line-height:1.6;';

    banner.innerHTML =
        '<span style="flex:1 1 260px;min-width:200px;">' +
        '<strong>' + t.title + '</strong> ' + t.body +
        '</span>' +
        '<span style="display:flex;gap:8px;flex-shrink:0;">' +
        '<a href="privacy.html" style="padding:8px 16px;border:1px solid var(--border,#e2e8f0);border-radius:6px;color:var(--text-secondary,#64748b);text-decoration:none;font-size:13px;white-space:nowrap;">' + t.more + '</a>' +
        '<button id="cookie-decline" style="padding:8px 16px;border:1px solid var(--border,#e2e8f0);border-radius:6px;background:var(--card-bg,#fff);color:var(--text-secondary,#64748b);cursor:pointer;font-size:13px;white-space:nowrap;">' + t.decline + '</button>' +
        '<button id="cookie-accept" style="padding:8px 20px;border:none;border-radius:6px;background:var(--primary,#0ea5e9);color:#fff;cursor:pointer;font-size:13px;font-weight:600;white-space:nowrap;">' + t.accept + '</button>' +
        '</span>';

    function hideBanner() {
        overlay.remove();
        banner.remove();
    }

    function accept() {
        localStorage.setItem(COOKIE_KEY, 'accepted');
        hideBanner();
    }

    function decline() {
        localStorage.setItem(COOKIE_KEY, 'declined');
        hideBanner();
    }

    document.addEventListener('DOMContentLoaded', function () {
        // 如果 DOMContentLoaded 已经过了，直接插入
        if (document.readyState !== 'loading') {
            document.body.appendChild(overlay);
            document.body.appendChild(banner);
        } else {
            // 等待 DOM ready
            window.addEventListener('load', function () {
                document.body.appendChild(overlay);
                document.body.appendChild(banner);
            });
        }

        // 事件委托（因为按钮是动态创建的）
        banner.querySelector('#cookie-accept').addEventListener('click', accept);
        banner.querySelector('#cookie-decline').addEventListener('click', decline);
    });

    // 如果 DOM 已经 ready，直接插入
    if (document.readyState !== 'loading') {
        document.body.appendChild(overlay);
        document.body.appendChild(banner);
        banner.querySelector('#cookie-accept').addEventListener('click', accept);
        banner.querySelector('#cookie-decline').addEventListener('click', decline);
    }
})();

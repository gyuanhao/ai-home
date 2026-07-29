/**
 * AI家AI户 · 每日AI资讯渲染
 * 读取 window.AIHomeNews（js/news-data.js），按日期分组渲染到 #newsContainer。
 * 每条：标题(外链) + 摘要 + 来源。数据由站点维护，非接口实时拉取。
 */
(function () {
  'use strict';
  var data = window.AIHomeNews || [];
  var container = document.getElementById('newsContainer');
  if (!container) return;

  if (!data.length) {
    container.innerHTML = '<p style="color:var(--text-secondary);">暂时还没有资讯，过段时间再来看看。</p>';
    return;
  }

  function esc(s) {
    return String(s == null ? '' : s)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  var html = '';
  data.forEach(function (day) {
    var items = day.items || [];
    if (!items.length) return;
    html += '<div class="news-day">';
    html += '<div class="news-day-head">';
    html += '<span class="news-day-date">' + esc(day.display) + '</span>';
    html += '<span class="news-day-weekday">' + esc(day.weekday) + '</span>';
    html += '</div>';
    items.forEach(function (it) {
      html += '<div class="news-item">';
      html += '<a class="news-title" href="' + esc(it.url) + '" target="_blank" rel="noopener">' + esc(it.title) + '</a>';
      if (it.summary) {
        html += '<p class="news-summary">' + esc(it.summary) + '</p>';
      }
      html += '<div class="news-meta">来源：' + esc(it.source) + '</div>';
      html += '</div>';
    });
    html += '</div>';
  });

  container.innerHTML = html;
})();

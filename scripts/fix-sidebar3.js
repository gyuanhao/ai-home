const fs = require("fs");
const path = require("path");

var ROOT = path.resolve(__dirname, "..");

function fullDrawer(prefix) {
    return '<div class="sidebar-overlay" id="sidebarOverlay" onclick="closeSidebar()"></div>\n'
         + '<div class="sidebar-drawer" id="sidebarDrawer">\n'
         + '    <div class="drawer-head">\n'
         + '        <span class="d-logo">🏠 AI家AI户</span>\n'
         + '        <button class="drawer-close-btn" onclick="closeSidebar()" aria-label="close">&#10005;</button>\n'
         + "    </div>\n"
         + '    <nav class="sidebar-nav">\n'
         + '        <ul class="sidebar-links">\n'
         + '            <li><a href="' + prefix + 'index.html" class="sidebar-link">首页</a></li>\n'
         + '            <li><a href="' + prefix + 'models.html" class="sidebar-link">模型库</a></li>\n'
         + '            <li><a href="' + prefix + 'compare.html" class="sidebar-link">横向对比</a></li>\n'
         + '            <li><a href="' + prefix + 'compare-custom.html" class="sidebar-link">自定义对比</a></li>\n'
         + '            <li><a href="' + prefix + 'vs/" class="sidebar-link">热门对比</a></li>\n'
         + '            <li><a href="' + prefix + 'picker.html" class="sidebar-link">AI选型器</a></li>\n'
         + '            <li><a href="' + prefix + 'news.html" class="sidebar-link">新闻</a></li>\n'
         + '            <li><a href="' + prefix + 'skills.html" class="sidebar-link">技能包</a></li>\n'
         + '            <li><a href="' + prefix + 'about.html" class="sidebar-link">关于</a></li>\n'
         + "        </ul>\n"
         + "    </nav>\n"
         + '    <div class="sidebar-footer"><button onclick="switchLang();closeSidebar();" class="sidebar-lang-btn">EN</button></div>\n'
         + "</div>\n";
}

function getPrefix(fp) {
    var rel = path.relative(ROOT, fp).replace(/\\/g, "/");
    if (rel.indexOf("models/") === 0 || rel.indexOf("vs/") === 0) return "../";
    return "";
}

var files = [];
function walk(d) {
    try {
        var entries = fs.readdirSync(d);
        for (var i = 0; i < entries.length; i++) {
            var f = entries[i];
            var p = path.join(d, f);
            try {
                var s = fs.statSync(p);
                if (s.isDirectory()) walk(p);
                else if (/\.html$/.test(f) && f !== "index.html") files.push(p);
            } catch (e) {}
        }
    } catch (e) {}
}
walk(ROOT);

console.log("Processing", files.length, "files...");
var fixed = 0;

for (var fi = 0; fi < files.length; fi++) {
    var fp = files[fi];
    var h = fs.readFileSync(fp, "utf8");
    var rel = path.relative(ROOT, fp);

    if (h.indexOf('<aside class="sidebar"') === -1) continue;

    var changed = false;
    var prefix = getPrefix(fp);

    // Fix formatting: ensure newline between aside and toggle button
    if (h.indexOf("</aside><button class=\"sidebar-toggle\"") !== -1) {
        h = h.replace("</aside><button class=\"sidebar-toggle\"", "</aside>\n<button class=\"sidebar-toggle\"");
        changed = true;
    }

    // Replace incomplete drawer section (from overlay to before main-content)
    var overlayIdx = h.indexOf('<div class="sidebar-overlay"');
    var mainIdx = h.indexOf("<main");
    if (overlayIdx !== -1 && mainIdx !== -1 && overlayIdx < mainIdx) {
        var between = h.substring(overlayIdx, mainIdx);
        // Check if drawer is broken (missing closing div or inner nav)
        if (between.indexOf("</div>") === -1 || 
            between.indexOf('class="sidebar-nav"') === -1 ||
            between.indexOf("<main") !== -1 ||
            between.length < 200) {
            h = h.substring(0, overlayIdx) + fullDrawer(prefix) + "\n" + h.substring(mainIdx);
            changed = true;
        }
    }

    // Remove orphan drawer-links div
    var oldLen = h.length;
    h = h.replace(/<div class="drawer-links"[^>]*><\/div>\s*\n?/g, "");
    if (h.length !== oldLen) changed = true;

    // Remove orphan </div> before script/model-data
    oldLen = h.length;
    h = h.replace(/<\/div>\s*\n(<script id="model-data")/g, "\n$1");
    if (h.length !== oldLen) changed = true;

    // Ensure only one <main>
    var mainOpens = h.match(/<main[\s>]/g);
    if (mainOpens && mainOpens.length > 1) {
        var firstMainEnd = h.indexOf(">", h.indexOf("<main")) + 1;
        var rest = h.substring(firstMainEnd);
        // Remove subsequent <main...</main> wrappers but keep content
        rest = rest.replace(/<main[\s>][\s\S]*?<\/main>/g, function(m) {
            var inner = m.replace(/<main[\s>]/, "").replace(/<\/main>\s*$/, "");
            changed = true;
            return inner;
        });
        h = h.substring(0, firstMainEnd) + rest;
    }

    if (changed) {
        fs.writeFileSync(fp, h, "utf8");
        fixed++;
        console.log("FIXED", rel);
    } else {
        console.log("OK   ", rel);
    }
}

// Handle vs/index.html separately
var vsIndex = path.join(ROOT, "vs", "index.html");
if (fs.existsSync(vsIndex)) {
    var vh = fs.readFileSync(vsIndex, "utf8");
    if (vh.indexOf('<nav class="nav">') !== -1) {
        vh = vh.replace(/<nav class="nav">\s*<div class="nav-inner">[\s\S]*?<\/div>\s*<\/nav>\s*\n?/, "");
        vh = vh.replace(/<div class="nav-overlay"[^>]*><\/div>\s*\n?/g, "");

        var insIdx = vh.indexOf("<section") !== -1 ? vh.indexOf("<section") : vh.indexOf("<main");
        var sbPart = '<aside class="sidebar" id="sidebar">\n'
            + '    <a href="../index.html" class="sidebar-logo">\n'
            + '        <svg width="26" height="26" class="logo-icon" viewBox="0 0 24 24" fill="none"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>\n'
            + '        AI家AI户\n'
            + "    </a>\n"
            + '    <nav class="sidebar-nav">\n'
            + '        <ul class="sidebar-links">\n'
            + '            <li><a href="../index.html" class="sidebar-link">首页</a></li>\n'
            + '            <li><a href="../models.html" class="sidebar-link">模型库</a></li>\n'
            + '            <li><a href="../compare.html" class="sidebar-link">横向对比</a></li>\n'
            + '            <li><a href="../compare-custom.html" class="sidebar-link">自定义对比</a></li>\n'
            + '            <li><a href="index.html" class="sidebar-link active">热门对比</a></li>\n'
            + '            <li><a href="../picker.html" class="sidebar-link">AI选型器</a></li>\n'
            + '            <li><a href="../news.html" class="sidebar-link">新闻</a></li>\n'
            + '            <li><a href="../skills.html" class="sidebar-link">技能包</a></li>\n'
            + '            <li><a href="../about.html" class="sidebar-link">关于</a></li>\n'
            + "        </ul>\n"
            + "    </nav>\n"
            + "</aside>\n"
            + '<button class="sidebar-toggle" onclick="toggleSidebar()" aria-label="menu">&#9776;</button>\n';

        vh = vh.substring(0, insIdx) + sbPart + fullDrawer("../") + '<main class="main-content">\n' + vh.substring(insIdx);
        vh = vh.replace(/\n<\/body>/, "\n</main>\n</body>");
        fs.writeFileSync(vsIndex, vh, "utf8");
        fixed++;
        console.log("FIXED vs/index.html");
    }
}

console.log("\n=== " + fixed + " files fixed in pass 3 ===");

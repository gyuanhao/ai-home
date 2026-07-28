# 仙侠世界 ← 主站 内容同步

主站（myaishome.com）和仙侠世界（/xianxia）是**同一套仓库**，但仙侠的数据文件是
从主站"搬运"过来的独立副本。为了让两边内容永远一致，不要手动改两处，
改完主站后用下面这一个命令同步即可。

## 一键同步（更新完主站内容后运行）

```bash
python xianxia/scripts/sync_xianxia.py
```

它会依次执行三个转换：

| 步骤 | 主站源 | 仙侠文件 | 说明 |
|------|--------|----------|------|
| 1 模型 | `scripts/models.json` | `xianxia/src/data/models.js` | 只留中文字段 |
| 2 技能 | `js/skills-data.js` | `xianxia/src/data/skills.js` | 自动补 `slug`/`detailUrl`（详情页存在才链接） |
| 3 新闻 | `news.html` | `xianxia/src/data/news.js` | 解析静态新闻 HTML |

跑完会改动 `xianxia/src/data/` 下三个文件，记得一起提交上线。

## 各脚本可单独跑（调试用）

```bash
python xianxia/scripts/convert_models.py   # 只同步模型
node   xianxia/scripts/convert_skills.js    # 只同步技能
python xianxia/scripts/convert_news.py      # 只同步新闻
```

## 注意事项

- **选型器 `picker.js` 是仙侠专用精简中文版**，规则里的模型 ID 引用的是已同步的
  模型数据。如果主站 `js/picker.js` 的推荐逻辑或模型 ID 有大改，需要**人工校对**
  `xianxia/src/data/picker.js`（两边结构不同，无法全自动）。
- 技能详情页：目前 296 个技能里有 218 个有独立详情页（其余社区技能尚未生成
  详情页，卡片只显示"前往仓库"）。等主站补了详情页，重跑同步会自动接上链接。
- 路径按脚本自身位置推算，无论从哪个目录运行都正确，不用 `cd`。

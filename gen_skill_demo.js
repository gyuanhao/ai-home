const fs = require('fs');
const {
  Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell,
  AlignmentType, LevelFormat, ExternalHyperlink, HeadingLevel,
  BorderStyle, WidthType, ShadingType, VerticalAlign, PageBreak
} = require('docx');

// ---------- Brand palette ----------
const BLUE   = "2563EB"; // primary
const BLUE_L = "DBEAFE"; // light blue band
const INK    = "1F2937"; // dark text
const GRAY   = "6B7280"; // secondary
const GRAY_L = "F3F4F6"; // chip bg
const WHITE  = "FFFFFF";
const GREEN  = "16A34A";
const GREEN_L= "DCFCE7";
const AMBER  = "D97706";
const AMBER_L= "FEF3C7";

const noBorder = { style: BorderStyle.NONE, size: 0, color: "FFFFFF" };
const allNo = { top: noBorder, bottom: noBorder, left: noBorder, right: noBorder };

function chip(text, fill, color) {
  return new TableCell({
    borders: allNo,
    width: { size: 0, type: WidthType.AUTO },
    margins: { top: 40, bottom: 40, left: 120, right: 120 },
    shading: { fill: fill, type: ShadingType.CLEAR },
    children: [ new Paragraph({ alignment: AlignmentType.CENTER, children: [
      new TextRun({ text: text, bold: true, color: color, size: 18 })
    ]})]
  });
}

function sectionTitle(text) {
  return new Paragraph({
    spacing: { before: 320, after: 120 },
    border: { bottom: { style: BorderStyle.SINGLE, size: 8, color: BLUE, space: 4 } },
    children: [ new TextRun({ text: text, bold: true, size: 26, color: BLUE }) ]
  });
}

function bullet(text) {
  return new Paragraph({
    numbering: { reference: "bullets", level: 0 },
    spacing: { after: 60 },
    children: [ new TextRun({ text: text, size: 21, color: INK }) ]
  });
}

function numbered(text) {
  return new Paragraph({
    numbering: { reference: "numbers", level: 0 },
    spacing: { after: 60 },
    children: [ new TextRun({ text: text, size: 21, color: INK }) ]
  });
}

function para(text, opts = {}) {
  return new Paragraph({
    spacing: { after: 100, line: 300 },
    children: [ new TextRun({ text: text, size: 21, color: opts.color || INK, bold: opts.bold || false }) ]
  });
}

// ---------- Build document ----------
const doc = new Document({
  numbering: {
    config: [
      { reference: "bullets", levels: [{ level: 0, format: LevelFormat.BULLET, text: "•",
        alignment: AlignmentType.LEFT, style: { paragraph: { indent: { left: 480, hanging: 240 } } } }] },
      { reference: "numbers", levels: [{ level: 0, format: LevelFormat.DECIMAL, text: "%1.",
        alignment: AlignmentType.LEFT, style: { paragraph: { indent: { left: 480, hanging: 240 } } } }] },
    ]
  },
  sections: [{
    properties: {
      page: { margin: { top: 1080, right: 1080, bottom: 1080, left: 1080 } }
    },
    children: [
      // Top brand banner
      new Table({
        width: { size: 9360, type: WidthType.DXA },
        columnWidths: [9360],
        borders: allNo,
        rows: [ new TableRow({
          children: [ new TableCell({
            borders: allNo,
            shading: { fill: BLUE, type: ShadingType.CLEAR },
            margins: { top: 140, bottom: 140, left: 240, right: 240 },
            children: [ new Paragraph({ children: [
              new TextRun({ text: "AI家AI户", bold: true, size: 24, color: WHITE }),
              new TextRun({ text: "   技能详情页 · DEMO", size: 20, color: "BFD7FF" })
            ]})]
          })]
        })]
      }),

      // Breadcrumb
      new Paragraph({ spacing: { before: 160, after: 60 }, children: [
        new TextRun({ text: "首页", size: 18, color: GRAY }),
        new TextRun({ text: "  ›  ", size: 18, color: "BFBFBF" }),
        new TextRun({ text: "技能包", size: 18, color: GRAY }),
        new TextRun({ text: "  ›  ", size: 18, color: "BFBFBF" }),
        new TextRun({ text: "Word文档处理", size: 18, color: BLUE, bold: true }),
      ]}),

      // Title
      new Paragraph({ spacing: { before: 60, after: 40 }, children: [
        new TextRun({ text: "Word文档处理", bold: true, size: 40, color: INK }),
      ]}),
      new Paragraph({ spacing: { after: 140 }, children: [
        new TextRun({ text: "docx", size: 20, color: GRAY, font: "Consolas" }),
      ]}),

      // Tag chips: 来源 / 分类 / 团队
      new Table({
        width: { size: 9360, type: WidthType.DXA },
        columnWidths: [2400, 2400, 4560],
        borders: allNo,
        rows: [ new TableRow({ children: [
          chip("来源 · VoltAgent", BLUE, WHITE),
          chip("分类 · 文档处理", GRAY_L, "374151"),
          chip("团队 · Anthropic", AMBER_L, AMBER),
        ]})]
      }),

      // 概述
      sectionTitle("一、功能概述"),
      para("该技能让 AI 能够创建、编辑和分析 Microsoft Word（.docx）文档，支持复杂排版、样式、表格、图片与自动生成报告。底层基于 python-docx 实现，适用于需要批量产出合同、报告、简历、论文等正式文档的场景。"),

      // 功能介绍
      sectionTitle("二、功能介绍"),
      bullet("创建全新 .docx：支持标题、段落、有序/无序列表、表格、页眉页脚与分节"),
      bullet("编辑已有文档：修改正文、替换占位符、统一字体与样式"),
      bullet("分析文档结构：提取全文文本、统计字数、读取表格与图片信息"),
      bullet("插入元素：图片、图表、超链接、目录、页码与批注"),
      bullet("批量生成：基于模板一次产出多份差异化文档（如合同、通知书）"),

      // 使用方式
      sectionTitle("三、使用方式"),
      numbered("在支持 Skill 的 AI 客户端（如 Claude）中安装「docx」技能"),
      numbered("用自然语言描述需求，例如：『帮我生成一份项目周报 Word，包含本周进度、风险、下周计划三个表格』"),
      numbered("AI 自动调用 python-docx 生成文件，并在对话中交付下载"),
      numbered("如需微调，直接告诉 AI 修改点（加一页封面、把表格改成横向等）"),

      // 来源信息
      sectionTitle("四、来源信息"),
      new Table({
        width: { size: 9360, type: WidthType.DXA },
        columnWidths: [2000, 7360],
        borders: { top: { style: BorderStyle.SINGLE, size: 1, color: "D1D5DB" },
                   bottom: { style: BorderStyle.SINGLE, size: 1, color: "D1D5DB" },
                   left: { style: BorderStyle.SINGLE, size: 1, color: "D1D5DB" },
                   right: { style: BorderStyle.SINGLE, size: 1, color: "D1D5DB" } },
        rows: [
          new TableRow({ children: [
            new TableCell({ width: { size: 2000, type: WidthType.DXA }, shading: { fill: GRAY_L, type: ShadingType.CLEAR },
              margins: { top: 80, bottom: 80, left: 120, right: 120 },
              children: [ new Paragraph({ children: [ new TextRun({ text: "来源仓库", bold: true, size: 20, color: "374151" }) ] }) ] }),
            new TableCell({ width: { size: 7360, type: WidthType.DXA },
              margins: { top: 80, bottom: 80, left: 120, right: 120 },
              children: [ new Paragraph({ children: [
                new ExternalHyperlink({ children: [ new TextRun({ text: "github.com/anthropics/skills/tree/main/skills/docx", size: 20, color: BLUE, underline: {} }) ],
                  link: "https://github.com/anthropics/skills/tree/main/skills/docx" })
              ] }) ] }),
          ]}),
          new TableRow({ children: [
            new TableCell({ width: { size: 2000, type: WidthType.DXA }, shading: { fill: GRAY_L, type: ShadingType.CLEAR },
              margins: { top: 80, bottom: 80, left: 120, right: 120 },
              children: [ new Paragraph({ children: [ new TextRun({ text: "提供方", bold: true, size: 20, color: "374151" }) ] }) ] }),
            new TableCell({ width: { size: 7360, type: WidthType.DXA },
              margins: { top: 80, bottom: 80, left: 120, right: 120 },
              children: [ new Paragraph({ children: [ new TextRun({ text: "Anthropic（Claude 官方技能）", size: 20, color: INK }) ] }) ] }),
          ]}),
          new TableRow({ children: [
            new TableCell({ width: { size: 2000, type: WidthType.DXA }, shading: { fill: GRAY_L, type: ShadingType.CLEAR },
              margins: { top: 80, bottom: 80, left: 120, right: 120 },
              children: [ new Paragraph({ children: [ new TextRun({ text: "开源许可", bold: true, size: 20, color: "374151" }) ] }) ] }),
            new TableCell({ width: { size: 7360, type: WidthType.DXA },
              margins: { top: 80, bottom: 80, left: 120, right: 120 },
              children: [ new Paragraph({ children: [ new TextRun({ text: "Apache 2.0（示意，以仓库实际许可为准）", size: 20, color: INK }) ] }) ] }),
          ]}),
        ]
      }),

      // Footer note
      new Paragraph({ spacing: { before: 360 }, border: { top: { style: BorderStyle.SINGLE, size: 4, color: "E5E7EB", space: 6 } }, children: [
        new TextRun({ text: "说明：本文件为「技能详情页」设计 Demo。定稿后将以相同版式复用到全部 271 个技能，并部署上线。", size: 17, color: GRAY, italics: true })
      ]}),
    ]
  }]
});

Packer.toBuffer(doc).then(buf => {
  fs.writeFileSync("skill-detail-demo.docx", buf);
  console.log("✅ 已生成 skill-detail-demo.docx (" + buf.length + " bytes)");
});

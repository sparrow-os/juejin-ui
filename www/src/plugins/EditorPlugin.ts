import matter from "gray-matter";
import type { BytemdPlugin, BytemdAction, BytemdViewerContext } from "bytemd";
import markdownThemesStr from "../utils/theme";
import highlightStyles from "../utils/data";

export const icons = {
  // Formula:
  //   '<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 48 48"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="m40 9-3-3H8l18 18L8 42h29l3-3"/></svg>',
  // Inline:
  //   '<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 48 48"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="m37 9-3-3H8l17 18L8 42h26l3-3M5 24h10M33 24h10"/></svg>',
  // Block:
  //   '<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 48 48"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="m36 11-3-3H12l16 16-16 16h21l3-3M6 5v38M42 5v38"/></svg>',
  CodeStyleSelect: `<?xml version="1.0" encoding="UTF-8"?><svg width="24" height="24" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="48" height="48" fill="white" fill-opacity="0.01"/><path d="M6 44L6 25H12V17H36V25H42V44H6Z" fill="none" stroke="#333" stroke-width="4" stroke-linejoin="round"/><path d="M17 17V8L31 4V17" stroke="#333" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  ThemeSelect: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M6 2H2.66667C2.29848 2 2 2.29848 2 2.66667V6C2 6.36819 2.29848 6.66667 2.66667 6.66667H6C6.36819 6.66667 6.66667 6.36819 6.66667 6V2.66667C6.66667 2.29848 6.36819 2 6 2Z" stroke="#1D2129" stroke-width="1.33" stroke-linejoin="round"/>
  <path d="M6 9.3335H2.66667C2.29848 9.3335 2 9.63197 2 10.0002V13.3335C2 13.7017 2.29848 14.0002 2.66667 14.0002H6C6.36819 14.0002 6.66667 13.7017 6.66667 13.3335V10.0002C6.66667 9.63197 6.36819 9.3335 6 9.3335Z" stroke="#1D2129" stroke-width="1.33" stroke-linejoin="round"/>
  <path d="M13.3334 2H10C9.63185 2 9.33337 2.29848 9.33337 2.66667V6C9.33337 6.36819 9.63185 6.66667 10 6.66667H13.3334C13.7016 6.66667 14 6.36819 14 6V2.66667C14 2.29848 13.7016 2 13.3334 2Z" stroke="#1D2129" stroke-width="1.33" stroke-linejoin="round"/>
  <path d="M13.3334 9.3335H10C9.63185 9.3335 9.33337 9.63197 9.33337 10.0002V13.3335C9.33337 13.7017 9.63185 14.0002 10 14.0002H13.3334C13.7016 14.0002 14 13.7017 14 13.3335V10.0002C14 9.63197 13.7016 9.3335 13.3334 9.3335Z" stroke="#1D2129" stroke-width="1.33" stroke-linejoin="round"/>
  </svg>
`,
};

const mdThemes: Record<string, { style: string; highlight: string }> =
  JSON.parse(markdownThemesStr);

let previousHighlightStyle: any;
let previousThemeStyle: any;
let themeEl: any;
let highlightEl: any;

if (typeof window !== undefined && window.document) {
  themeEl = document.createElement("style");
  highlightEl = document.createElement("style");
  document.head.appendChild(themeEl);
  document.head.appendChild(highlightEl);
}

function getThemeStyle(key = "juejin") {
  return mdThemes[key]?.style ?? mdThemes.juejin.style;
}
function getHighlighStyle(key = "github") {
  return highlightStyles[key] ?? highlightStyles.github;
}

interface Ifrontmatter {
  [K: string]: string;
}

export default function CustomEditorPlugin(): BytemdPlugin {
  return {
    viewerEffect(ctx: BytemdViewerContext) {
      const { frontmatter } = ctx.file as { frontmatter: Ifrontmatter };
      themeEl.innerHTML = getThemeStyle(frontmatter?.["theme"]);
      highlightEl.innerHTML = getHighlighStyle(frontmatter?.["highlight"]);
    },
    actions: [
      {
        icon: icons.ThemeSelect,
        title: "Markdown 主题",
        handler: {
          type: "dropdown",
          actions: [
            ...(Object.keys(mdThemes).map((key) => ({
              title: key,
              handler: {
                type: "action",
                click({ editor }) {
                  const { data, content } = matter(editor.getValue());
                  data.theme = key;
                  const { top } = editor.getScrollInfo();
                  editor.setValue(matter.stringify(content, data));
                  editor.scrollTo(null, top);
                  editor.focus();
                },
                mouseenter() {
                  previousThemeStyle = themeEl.innerHTML;
                  themeEl.innerHTML = getThemeStyle(key);
                },
                mouseleave() {
                  themeEl.innerHTML = previousThemeStyle;
                },
              },
            })) as BytemdAction[]),
          ],
        },
      },
      {
        title: "代码样式高亮",
        icon: icons.CodeStyleSelect, // 16x16 SVG icon
        handler: {
          type: "dropdown",
          actions: Object.keys(highlightStyles).map((key) => ({
            title: key,
            handler: {
              type: "action",
              click({ editor }) {
                const { data, content } = matter(editor.getValue());
                data.highlight = key;
                const { top } = editor.getScrollInfo();
                editor.setValue(matter.stringify(content, data));
                editor.scrollTo(null, top);
                editor.focus();
              },
              mouseenter() {
                previousHighlightStyle = highlightEl.innerHTML;
                highlightEl.innerHTML = getHighlighStyle(key);
              },
              mouseleave() {
                highlightEl.innerHTML = previousHighlightStyle;
              },
            },
          })),
        },
      },
    ],
  };
}

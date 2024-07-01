import * as bytemd from "bytemd";
import gfm from "@bytemd/plugin-gfm";
import highlight from "@bytemd/plugin-highlight-ssr";
import frontmatter from "@bytemd/plugin-frontmatter";

import { markdownThemes, highlightStyles } from "./data";
import CustomEditorPlugin from "../plugins/EditorPlugin";

// 根据key获取主题内容
export function getThemeStyle(key = "juetu") {
  return markdownThemes[key]?.style ?? markdownThemes.juetu.style;
}

// 根据key获取高亮内容
export function getHighlighStyle(key = "github") {
  return highlightStyles[key] ?? highlightStyles.github;
}

// const dispatchPlugin = () => {
//   return (...args) => {
//     console.log("args", ...args);
//   };
// };

// 根据markdown的字符串生成HTML结构
export const markdown2Html = (value: string, dispatchPlugin:any) => {
  const plugins = [gfm(), highlight(), frontmatter(), CustomEditorPlugin()];

  try {
    return bytemd
      .getProcessor({
        plugins: [
          ...plugins,
          {
            rehype: (processor) => processor.use(dispatchPlugin),
          },
        ],
      })
      .processSync(value);
  } catch (err) {
    console.error(err);
  }
};

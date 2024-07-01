import matter from "gray-matter";
import type { BytemdPlugin, BytemdAction, BytemdViewerContext } from "bytemd";
import { getThemeStyle, getHighlighStyle } from "../utils/editor";

import { markdownThemes, highlightStyles } from "../utils/data";

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

let previousHighlightStyle: any;
let previousThemeStyle: any;
let themeEl: any;
let highlightEl: any;

// if (typeof window !== undefined && window.document) {
//   themeEl = document.createElement("style");
//   highlightEl = document.createElement("style");
//   document.head.appendChild(themeEl);
//   document.head.appendChild(highlightEl);
// }

interface Ifrontmatter {
  [K: string]: string;
}

export default function CustomEditorPlugin(): BytemdPlugin {
  return {
    viewerEffect(ctx: BytemdViewerContext) {
      const { frontmatter } = ctx.file as { frontmatter: Ifrontmatter };
      const themeEl = document.createElement("style");
      const highlightEl = document.createElement("style");
      document.head.appendChild(themeEl);
      document.head.appendChild(highlightEl);
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
            ...(Object.keys(markdownThemes).map((key) => ({
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

const mdStr = `---%0Atheme%3A%20fancy%0A---%0A%3Cp%20align%3D%22center%22%3E%0A%20%20%3Ca%20href%3D%22https%3A%2F%2Fnextjs.org%22%3E%0A%20%20%20%20%3Cpicture%3E%0A%20%20%20%20%20%20%3Csource%20media%3D%22(prefers-color-scheme%3A%20dark)%22%20srcset%3D%22https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Fv1662130559%2Fnextjs%2FIcon_dark_background.png%22%3E%0A%20%20%20%20%20%20%3Cimg%20src%3D%22https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Fv1662130559%2Fnextjs%2FIcon_light_background.png%22%20height%3D%22128%22%3E%0A%20%20%20%20%3C%2Fpicture%3E%0A%20%20%20%20%3Ch1%20align%3D%22center%22%3ENext.js%3C%2Fh1%3E%0A%20%20%3C%2Fa%3E%0A%3C%2Fp%3E%0A%0A%3Cp%20align%3D%22center%22%3E%0A%20%20%3Ca%20aria-label%3D%22Vercel%20logo%22%20href%3D%22https%3A%2F%2Fvercel.com%22%3E%0A%20%20%20%20%3Cimg%20src%3D%22https%3A%2F%2Fimg.shields.io%2Fbadge%2FMADE%2520BY%2520Vercel-000000.svg%3Fstyle%3Dfor-the-badge%26logo%3DVercel%26labelColor%3D000%22%3E%0A%20%20%3C%2Fa%3E%0A%20%20%3Ca%20aria-label%3D%22NPM%20version%22%20href%3D%22https%3A%2F%2Fwww.npmjs.com%2Fpackage%2Fnext%22%3E%0A%20%20%20%20%3Cimg%20alt%3D%22%22%20src%3D%22https%3A%2F%2Fimg.shields.io%2Fnpm%2Fv%2Fnext.svg%3Fstyle%3Dfor-the-badge%26labelColor%3D000000%22%3E%0A%20%20%3C%2Fa%3E%0A%20%20%3Ca%20aria-label%3D%22License%22%20href%3D%22https%3A%2F%2Fgithub.com%2Fvercel%2Fnext.js%2Fblob%2Fcanary%2Flicense.md%22%3E%0A%20%20%20%20%3Cimg%20alt%3D%22%22%20src%3D%22https%3A%2F%2Fimg.shields.io%2Fnpm%2Fl%2Fnext.svg%3Fstyle%3Dfor-the-badge%26labelColor%3D000000%22%3E%0A%20%20%3C%2Fa%3E%0A%20%20%3Ca%20aria-label%3D%22Join%20the%20community%20on%20GitHub%22%20href%3D%22https%3A%2F%2Fgithub.com%2Fvercel%2Fnext.js%2Fdiscussions%22%3E%0A%20%20%20%20%3Cimg%20alt%3D%22%22%20src%3D%22https%3A%2F%2Fimg.shields.io%2Fbadge%2FJoin%2520the%2520community-blueviolet.svg%3Fstyle%3Dfor-the-badge%26logo%3DNext.js%26labelColor%3D000000%26logoWidth%3D20%22%3E%0A%20%20%3C%2Fa%3E%0A%3C%2Fp%3E%0A%0A%23%23%20Getting%20Started%0A%0AVisit%20%3Ca%20aria-label%3D%22next.js%20learn%22%20href%3D%22https%3A%2F%2Fnextjs.org%2Flearn%22%3Ehttps%3A%2F%2Fnextjs.org%2Flearn%3C%2Fa%3E%20to%20get%20started%20with%20Next.js.%0A%0A%23%23%20Documentation%0A%0AVisit%20%5Bhttps%3A%2F%2Fnextjs.org%2Fdocs%5D(https%3A%2F%2Fnextjs.org%2Fdocs)%20to%20view%20the%20full%20documentation.%0A%0A%23%23%20Who%20is%20using%20Next.js%3F%0A%0ANext.js%20is%20used%20by%20the%20world's%20leading%20companies.%20Check%20out%20the%20%5BNext.js%20Showcase%5D(https%3A%2F%2Fnextjs.org%2Fshowcase)%20to%20learn%20more.%0A%0A%23%23%20Community%0A%0AThe%20Next.js%20community%20can%20be%20found%20on%20%5BGitHub%20Discussions%5D(https%3A%2F%2Fgithub.com%2Fvercel%2Fnext.js%2Fdiscussions)%2C%20where%20you%20can%20ask%20questions%2C%20voice%20ideas%2C%20and%20share%20your%20projects.%0A%0ATo%20chat%20with%20other%20community%20members%20you%20can%20join%20the%20%5BNext.js%20Discord%5D(https%3A%2F%2Fnextjs.org%2Fdiscord).%0A%0AOur%20%5BCode%20of%20Conduct%5D(https%3A%2F%2Fgithub.com%2Fvercel%2Fnext.js%2Fblob%2Fcanary%2FCODE_OF_CONDUCT.md)%20applies%20to%20all%20Next.js%20community%20channels.%0A%0A%23%23%20Contributing%0A%0APlease%20see%20our%20%5Bcontributing.md%5D(%2Fcontributing.md).%0A%0A%23%23%23%20Good%20First%20Issues%0A%0AWe%20have%20a%20list%20of%20%5Bgood%20first%20issues%5D(https%3A%2F%2Fgithub.com%2Fvercel%2Fnext.js%2Flabels%2Fgood%2520first%2520issue)%20that%20contain%20bugs%20that%20have%20a%20relatively%20limited%20scope.%20This%20is%20a%20great%20place%20to%20get%20started%2C%20gain%20experience%2C%20and%20get%20familiar%20with%20our%20contribution%20process.%0A%0A%23%23%20Authors%0A%0A-%20Tim%20Neutkens%20(%5B%40timneutkens%5D(https%3A%2F%2Ftwitter.com%2Ftimneutkens))%0A-%20Naoyuki%20Kanezawa%20(%5B%40nkzawa%5D(https%3A%2F%2Ftwitter.com%2Fnkzawa))%0A-%20Guillermo%20Rauch%20(%5B%40rauchg%5D(https%3A%2F%2Ftwitter.com%2Frauchg))%0A-%20Arunoda%20Susiripala%20(%5B%40arunoda%5D(https%3A%2F%2Ftwitter.com%2Farunoda))%0A-%20Tony%20Kovanen%20(%5B%40tonykovanen%5D(https%3A%2F%2Ftwitter.com%2Ftonykovanen))%0A-%20Dan%20Zajdband%20(%5B%40impronunciable%5D(https%3A%2F%2Ftwitter.com%2Fimpronunciable))%0A%0A%23%23%20Security%0A%0AIf%20you%20believe%20you%20have%20found%20a%20security%20vulnerability%20in%20Next.js%2C%20we%20encourage%20you%20to%20responsibly%20disclose%20this%20and%20not%20open%20a%20public%20issue.%20We%20will%20investigate%20all%20legitimate%20reports.%20Email%20%60security%40vercel.com%60%20to%20disclose%20any%20security%20vulnerabilities.%0A%0Ahttps%3A%2F%2Fvercel.com%2Fsecurity%0A`;

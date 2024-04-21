import "./ArticleMain.css";

import { markdown2Html, getThemeStyle, getHighlighStyle } from "@/utils/editor";
import { mdStr } from "@/utils/data";
import { visit } from "unist-util-visit";

interface ITreeInfo {
  type: string;
  children: any[];
}

function stringifyHeading(e: any) {
  let result = "";
  visit(e, (node) => {
    if (node.type === "text") {
      result += node.value;
    }
  });
  return result;
}

const getMarkdownContentById = (id: string): Promise<string> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      Math.random() > 0.2
        ? resolve(decodeURIComponent(mdStr))
        : reject("getArticle content error !!!");
    }, 300);
  });
};

const getFileInfoByArticleId = async (id: string): Promise<any> => {
  const markdownContent = await getMarkdownContentById(id);
  let treeInfo: ITreeInfo | null = null;
  let minLevel = 6;
  let currentHeadingIndex = 0;
  let currentBlockIndex = 0;
  const contents: any[] = [];

  const dispatchPlugin = () => (tree: ITreeInfo) => {
    treeInfo = tree;
    tree.children
      .filter((v) => v.type === "element")
      .forEach((node, index) => {
        if (node.tagName[0] === "h" && !!node.children.length) {
          const i = Number(node.tagName[1]);
          minLevel = Math.min(minLevel, i);
          contents.push({
            level: i,
            text: stringifyHeading(node),
          });
        }

        // console.log(currentBlockIndex, index);
        if (currentBlockIndex >= index) {
          currentHeadingIndex = contents.length - 1;
        }
      });
  };
  const fileInfo = markdown2Html(markdownContent, dispatchPlugin);

  return {
    file: fileInfo,
    contents,
  };
};

type Props = {
  params: { articleId: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

interface Ifrontmatter {
  [K: string]: string;
}

export default async function PostPage({ params, searchParams }: Props) {
  console.log("props", params, searchParams);

  const str = "====>";
  try {
    const { file, contents = [] } = await getFileInfoByArticleId(
      params.articleId
    );
    // console.log('file', file)
    const genMdStyleTag = () => {
      if (!file) {
        return "<style></style>";
      }
      const { frontmatter } = file as { frontmatter: Ifrontmatter };
      const theme = getThemeStyle(frontmatter?.["theme"]);
      return `<style>${theme}</style>`;
    };

    const genHighlighStyleTag = () => {
      if (!file) {
        return "<style></style>";
      }
      const { frontmatter } = file as { frontmatter: Ifrontmatter };
      const highlight = getHighlighStyle(frontmatter?.["highlight"]);
      return `<style>${highlight}</style>`;
    };

    const _HTML = (genMdStyleTag() +
      genHighlighStyleTag() +
      file?.value) as unknown as string;

    return (
      <div className="main-area article-area">
        <article className="article">
          <div className="text-5xl font-bold">
            Cur articleId is {str} {params.articleId}
          </div>
          <div
            className="article-content markdown-body"
            dangerouslySetInnerHTML={{ __html: _HTML }}
          ></div>
        </article>
        <hr />
        {/* <div>{decodeURIComponent(mdStr)}</div> */}
      </div>
    );
  } catch (err: any) {
    console.log("error", err);
    return <h1 className="text-4xl">出错了，错误信息是： {err}</h1>;
  }
}

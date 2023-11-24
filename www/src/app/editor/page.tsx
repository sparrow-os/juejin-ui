import dynamic from "next/dynamic";

const ArticleEditor = dynamic(() => import("../../components/ArticleEditor"));

export default function Page() {
  return <ArticleEditor />;
}

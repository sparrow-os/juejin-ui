# tainwind 支持mui 官方说明文档
https://mui.com/material-ui/integrations/interoperability/#tailwind-css


Remove Tailwind CSS's(modern-normalize) preflight style so it can use the Material UI's preflight instead (CssBaseline)

https://tailwindcss.com/docs/preflight

```
  corePlugins: {
    preflight: false,
  }
```
```
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  // important: '#__next',
  theme: {
    extend: {},
  },  
};
export default config;
```
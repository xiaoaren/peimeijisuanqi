import { defineConfig } from "umi";
const {PUBLIC_PATH =''} = process.env
export default defineConfig({
  base: "/" + PUBLIC_PATH, //要在非根目录下部署 umi 项目时，你可以使用 base 配置。 默认值：/
  publicPath: PUBLIC_PATH + '/', //配置 webpack 的 publicPath。
  outputPath: 'docs', // 配置输出路径。  默认dist
  routes: [
    { path: "/", component: "index" },
    { path: "/docs", component: "docs" },
    { path: "/mycomputer", component: "mycomputer" },
  ],
  npmClient: 'pnpm',
});

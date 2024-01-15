import { defineConfig } from "umi";
const {PUBLIC_PATH =''} = process.env
export default defineConfig({
  // base: PUBLIC_PATH,
  publicPath: PUBLIC_PATH + '/',
  outputPath: 'docs', //默认dist
  routes: [
    { path: "/", component: "index" },
    { path: "/docs", component: "docs" },
    { path: "/mycomputer", component: "mycomputer" },
  ],
  npmClient: 'pnpm',
});

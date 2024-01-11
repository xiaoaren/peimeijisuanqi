import { defineConfig } from "umi";
const {PUBLIC_PATH =''} = process.env
export default defineConfig({
  // base: PUBLIC_PATH,
  // publicPath: PUBLIC_PATH + '/',
  routes: [
    { path: "/", component: "index" },
    { path: "/docs", component: "docs" },
    { path: "/mycomputer", component: "mycomputer" },
  ],
  npmClient: 'pnpm',
});

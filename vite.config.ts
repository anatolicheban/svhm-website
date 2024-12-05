import { defineConfig } from "vite";
import { ghPages } from "vite-plugin-gh-pages";
import { resolve } from "path";

export default defineConfig({
  base: "/svhm-website/",
  plugins: [
    ghPages({
      // Укажите имя репозитория, если проект не является корневым (опционально)
      base: "/svhm-website/", // Замените на имя репозитория
    }),
  ],
  build: {
    rollupOptions: {
      input: {
        index: resolve(__dirname, "index.html"),
        ["all-courses"]: resolve(__dirname, "all-courses.html"),
        about: resolve(__dirname, "about.html"),
      },
    },
  },
});

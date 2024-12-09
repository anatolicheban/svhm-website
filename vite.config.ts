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
        blogs: resolve(__dirname, "blogs.html"),
        article: resolve(__dirname, "article.html"),
        course: resolve(__dirname, "course.html"),
        event: resolve(__dirname, "event.html"),
      },
    },
  },
});

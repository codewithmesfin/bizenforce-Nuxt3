import { defineNuxtConfig } from "nuxt";
export default defineNuxtConfig({
  buildModules: ["@nuxt/typescript-build"],
  modules: ["@nuxtjs/tailwindcss"],
  app: {
    head: {
      charset: 'utf-16',
      title: 'BizEnforce',
      titleTemplate: '%s',
      meta: [
        { name: 'description', content: 'We are a small team of professional Software Engineers. After working in some of the highest Tech Industries in Ethiopia, USA, and United Kingdom, we realized that our experience, technical skills, and our African values can be put togather to create technologies that will transform lives' }
      ],
    }
  }
});

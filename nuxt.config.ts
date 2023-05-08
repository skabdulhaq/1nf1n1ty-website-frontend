// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    target: 'static',
    buildModules: [
        "@nuxt/image-edge"
    ],
    modules:[
        "@nuxt/image-edge",
        '@nuxtjs/tailwindcss',
        '@nuxtjs/robots'
    ]
})

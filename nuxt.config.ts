// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    nitro: {
        compressPublicAssets: true,
    },
    target: 'static',
    buildModules: [
        '@nuxtjs/tailwindcss',
        '@nuxtjs/robots'
    ],
    modules: ['@nuxtjs/tailwindcss', '@nuxtjs/robots'],
    base:'/1nf1n1ty-website-frontend/'
})
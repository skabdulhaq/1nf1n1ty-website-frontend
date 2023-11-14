// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    nitro: {
        compressPublicAssets: true,
    },
    ssr:false,
    target: 'static',
    buildModules: [
        '@nuxtjs/tailwindcss',
        '@nuxtjs/robots'
    ],
    modules: ['@nuxtjs/tailwindcss', '@nuxtjs/robots'],
})
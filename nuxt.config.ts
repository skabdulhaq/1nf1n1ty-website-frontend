// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    experimental: {
        payloadExtraction: true
    },
    nitro: {
        compressPublicAssets: true,
    },
    ssr:true,
    target: 'static',
    buildModules: [
        '@nuxtjs/tailwindcss',
        '@nuxtjs/robots',
    ],
    modules: ['@nuxtjs/tailwindcss', '@nuxtjs/robots'],
    subFolders: true,
})
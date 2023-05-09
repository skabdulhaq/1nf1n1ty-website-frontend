// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    nitro: {
        compressPublicAssets: true,
    },
    target: 'static',
    buildModules: [
        "@nuxt/image-edge"
    ],
    modules: [
        "@nuxt/image-edge",
        '@nuxtjs/tailwindcss',
        '@nuxtjs/robots'
    ]
})

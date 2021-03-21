import createApi from '@/api'
import { defineNuxtPlugin } from '@nuxtjs/composition-api'

interface keyable {
  [key: string]: any
}

declare module '@nuxt/types' {
  interface Context {
    $api: keyable
  }

  interface NuxtAppOptions {
    $api: keyable
  }
}

declare module 'vue/types/vue' {
  interface Vue {
    $api: keyable
  }
}

export default defineNuxtPlugin((ctx, inject) => {
  inject('api', createApi(ctx.$axios))
})

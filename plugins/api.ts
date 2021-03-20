import createApi from '@/api'
import { defineNuxtPlugin } from '@nuxtjs/composition-api'

export default defineNuxtPlugin((ctx, inject) => {
  inject('api', createApi(ctx.$axios))
})

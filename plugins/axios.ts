import { Context } from '@nuxt/types'
import camelcaseKeys from 'camelcase-keys'
import { defineNuxtPlugin } from '@nuxtjs/composition-api'

export default defineNuxtPlugin(({ $axios }: Context) => {
  $axios.onRequest((config) => {
    console.log('Making request to ' + config.url)
    if (config.params) {
      console.log('params ' + config.params)
    }

    config.transformResponse = (data) => {
      if (typeof data === 'string') {
        try {
          data = camelcaseKeys(JSON.parse(data), { deep: true })
        } catch (e) {
          /* Ignore */
        }
      }
      return data
    }
  })
})

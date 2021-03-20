import { NuxtAxiosInstance } from '@nuxtjs/axios'
import post from './post'

export default ($axios: NuxtAxiosInstance) => ({
  post: post($axios),
})

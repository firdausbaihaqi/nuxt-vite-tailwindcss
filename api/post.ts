import { NuxtAxiosInstance } from '@nuxtjs/axios'

interface ShowParams {
  id: number
}

export default ($axios: NuxtAxiosInstance) => ({
  index() {
    return $axios.$get(`https://jsonplaceholder.typicode.com/posts`)
  },
  show({ id }: ShowParams) {
    return $axios.$get(`https://jsonplaceholder.typicode.com/posts/${id}`)
  },
})

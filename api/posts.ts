import { NuxtAxiosInstance } from '@nuxtjs/axios'

interface ShowParams {
  id: number
}

export default ($axios: NuxtAxiosInstance) => ({
  index() {
    return $axios.$get(`/api/posts`)
  },
  show({ id }: ShowParams) {
    return $axios.$get(`/api/posts/${id}`)
  },
})

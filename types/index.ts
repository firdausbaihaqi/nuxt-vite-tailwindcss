export interface Post {
  body: string
  id: number
  title: string
  userId: number
}

interface NuxtApiInstance {}

declare module '@nuxt/types' {
  interface Context {
    $api: NuxtApiInstance
  }
}

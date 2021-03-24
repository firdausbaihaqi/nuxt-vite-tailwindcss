<template>
  <NuxtLink
    :to="route"
    class="p-4 h-full block transition rounded shadow-sm bg-gray-100 bg-opacity-80 active:bg-brand-700 hover:bg-brand-600 hover:text-white hover:bg-opacity-100 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-500 focus:ring-opacity-50"
  >
    <h2 class="font-semibold">{{ post.title }}</h2>
    <p class="mt-2">{{ post.body }}</p>
  </NuxtLink>
</template>

<script lang="ts">
import { PropType, defineComponent } from '@nuxtjs/composition-api'
import { Post } from '~/types'

export default defineComponent({
  name: 'PostListItem',
  props: {
    route: {
      type: [String, Object],
      required: true,
    },

    post: {
      type: Object as PropType<Post>,
      required: true,
    },
  },
})
</script>

<template>
  <NuxtLink :to="route" class="">
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

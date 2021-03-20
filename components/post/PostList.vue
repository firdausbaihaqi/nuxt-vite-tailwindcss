<template>
  <div class="">
    <ul
      v-if="posts.length"
      class="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
    >
      <li
        v-for="post in posts"
        :key="post.id"
        class="transition rounded shadow-sm bg-gray-100 bg-opacity-80 hover:bg-brand-600 active:bg-brand-700 hover:text-white hover:bg-opacity-100 p-4 hover:shadow-md"
      >
        <slot :post="post" />
      </li>
    </ul>
    <div v-else class="">List empty</div>
  </div>
</template>

<script lang="ts">
import { PropType, defineComponent } from '@nuxtjs/composition-api'
import { Post } from '~/types'

export default defineComponent({
  name: 'PostList',
  props: {
    posts: {
      type: Array as PropType<Post[]>,
      required: true,
    },
  },
})
</script>

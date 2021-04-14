<template>
  <div class="">
    <ul v-if="posts.length" class="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      <li v-for="post in posts" :key="post.id" class="">
        <slot :post="post" />
      </li>
    </ul>
    <div v-else class="">List empty</div>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';
import { Post } from '~/types';

export default Vue.extend({
  name: 'PostList',
  props: {
    posts: {
      type: Array as PropType<Post[]>,
      required: true,
    },
  },
});
</script>

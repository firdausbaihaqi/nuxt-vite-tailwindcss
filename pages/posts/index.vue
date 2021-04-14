<template>
  <div class="container mx-auto p-4">
    <NuxtLink class="btn btn-primary" :to="{ name: 'index' }">Homepage</NuxtLink>

    <FetchState class="mt-6" :state="$fetchState">
      <PostList v-slot="{ post }" :posts="posts">
        <PostListItem :post="post" :route="{ name: 'posts-id', params: { id: post.id } }" />
      </PostList>
    </FetchState>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Posts',

  data() {
    return {
      posts: [],
    };
  },

  async fetch() {
    this.posts = await this.$api.posts.index();
  },
});
</script>

<template>
  <div class="w-full min-h-screen p-4 mx-auto bg-gray-100">
    <PostList v-if="this.posts.length !== 0" v-slot="{ post }" :posts="posts">
      <PostListItem :post="post" :route="{ name: 'posts-id', params: { id: post.id } }" />
    </PostList>
    <div class="max-w-xl mx-auto mt-10" v-else>Memuat artikel...</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      posts: [],
    };
  },
  async fetch() {
    const resp = await this.$axios.$get(
      "https://mcpd-backend.herokuapp.com/api/articles?populate=comments"
    );

    this.posts = resp.data;
  },
};
</script>

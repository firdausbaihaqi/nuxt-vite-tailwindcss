<template>
  <div v-if="post !== {}">
    <PostDetail :post="post" :comments="comments" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      post: {},
      comments: [],
    };
  },
  async fetch() {
    const resp = await this.$axios.$get(
      `https://mcpd-backend.herokuapp.com/api/articles/${this.$route.params.id}?populate=comments`
    );

    this.post = resp.data.attributes;
    this.id = resp.data.id;
    this.comments = resp.data.attributes.comments.data;
  },
};
</script>

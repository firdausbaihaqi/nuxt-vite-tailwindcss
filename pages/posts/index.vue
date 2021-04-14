<template>
  <div class="container mx-auto p-4">
    <NuxtLink class="btn btn-primary" :to="{ name: 'index' }"> Homepage </NuxtLink>

    <FetchState class="mt-6" :state="$fetchState">
      <PostList v-slot="{ post }" :posts="posts">
        <PostListItem :post="post" :route="{ name: 'posts-id', params: { id: post.id } }" />
      </PostList>
    </FetchState>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, useContext, useFetch } from '@nuxtjs/composition-api';

export default defineComponent({
  name: 'Posts',
  setup() {
    const posts = ref([]);
    const { $api } = useContext();

    useFetch(async () => {
      posts.value = await $api.posts.index();
    });

    return { posts };
  },
});
</script>

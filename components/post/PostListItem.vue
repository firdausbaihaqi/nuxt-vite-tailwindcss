<template>
  <NuxtLink :to="route">
    <div class="p-5 bg-white border rounded shadow-md hover:shadow-xl md:flex-grow">
      <h2 class="mb-2 text-2xl font-medium text-gray-900 title-font">
        {{ post.attributes.title }}
      </h2>
      <p class="leading-relaxed">{{ post.attributes.content.substring(0, 150) }}...</p>
      <a class="inline-flex items-center mt-4 text-indigo-500"
        >Selengkapnya
        <svg
          class="w-4 h-4 ml-2"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="M5 12h14"></path>
          <path d="M12 5l7 7-7 7"></path>
        </svg>
      </a>
    </div>
  </NuxtLink>
  <!-- <NuxtLink
    :to="route"
    class="block h-full p-4 transition bg-gray-100 rounded shadow-sm bg-opacity-80 active:bg-brand-700 hover:bg-brand-600 hover:text-white hover:bg-opacity-100 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-500 focus:ring-opacity-50"
  >
    <h2 class="font-semibold">{{ post.title }}</h2>
    <p class="mt-2">{{ post.body }}</p>
  </NuxtLink> -->
</template>

<script>
export default {
  name: "PostListItem",
  props: {
    route: {
      type: [String, Object],
      required: true,
    },

    post: {
      type: Object,
      required: true,
    },
  },
};
</script>

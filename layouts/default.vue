<template>
  <div>
    <nav v-if="$nuxt.$route.path !== '/'" class="flex items-center bg-white shadow dark:bg-gray-800">
      <div class="ml-2">
        <img width="70" height="70" src="~/assets/img/mcpd.png" />
      </div>
      <div class="flex items-center justify-center flex-1 p-6 mx-auto mr-10 text-gray-600 capitalize dark:text-gray-300">
        <NuxtLink
          v-for="n in nav"
          :key="n.name"
          :class="`text-gray-800
            transition-colors
            duration-200
            transform
            dark:text-gray-200
            mx-1.5
            sm:mx-6 ${$nuxt.$route.path === n.path && 'border-b-4 border-red-500'}`"
          :to="{ path: n.path }"
        >
          {{ n.name }}
        </NuxtLink>
      </div>
    </nav>
    <Nuxt />
  </div>
</template>

<script>
export default {
  data() {
    return {
      nav: [
        {
          name: 'Home',
          path: '/'
        },
        {
          name: 'Artikel',
          path: '/posts'
        }
      ]
    }
  }
}
</script>

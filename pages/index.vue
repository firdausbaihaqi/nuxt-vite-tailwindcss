<template>
  <div
    class="container mx-auto text-center h-screen flex flex-col items-center justify-center"
  >
    <div>
      <Logo />
      <h1 class="mt-6 uppercase font-medium tracking-tight text-3xl">
        nuxt-vite-tailwindcss
      </h1>
      <div class="mt-6 space-x-4">
        <a
          href="https://nuxtjs.org/"
          target="_blank"
          rel="noopener noreferrer"
          class="btn btn-primary"
        >
          Documentation
        </a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-block px-6 py-2 text-brand-600 border border-brand-600 rounded-lg"
        >
          GitHub
        </a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>

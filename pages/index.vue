<template>
  <div>
    <div
      class="flex flex-col items-center justify-center w-full min-h-screen p-4 mx-auto text-center bg-gray-300"
    >
      <div class="grid place-items-center">
        <Logo />
        <h1 class="mt-6 text-3xl font-medium tracking-tight uppercase">
          MCPD <br />
          Mari Cegah Pernikahan Dini
        </h1>
        <div class="mt-6 space-x-4">
          <NuxtLink
            class="relative text-white bg-red-500 hover:bg-red-400 btn"
            :to="{ name: 'posts' }"
          >
            <span>Artikel</span>
          </NuxtLink>
          <!-- <NuxtLink class="relative btn btn-secondary" :to="{ name: 'posts' }">
            <span>Pengajuan Masalah</span>
          </NuxtLink> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "HomePage",
});
</script>

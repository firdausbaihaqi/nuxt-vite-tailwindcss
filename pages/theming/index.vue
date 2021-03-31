<template>
  <div class="">
    <div class="m-6">
      <NuxtLink class="btn btn-primary" :to="{ name: 'index' }">
        Homepage
      </NuxtLink>
    </div>

    <div class="sm:m-6 space-y-6">
      <HeroSimpleCentered />
      <HeroSimpleCentered class="theme-swiss" />
      <HeroSimpleCentered class="theme-neon" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'ThemingPage',
})
</script>

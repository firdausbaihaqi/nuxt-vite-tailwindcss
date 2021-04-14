<template>
  <div class="min-h-screen flex items-center bg-purple-500">
    <div class="flex-1 max-w-4xl mx-auto p-10">
      <ul class="grid grid-cols-6 grid-rows-4 gap-8 grid-flow-col-dense">
        <li class="bg-white rounded-lg shadow-xl">
          <div class="h-24 flex items-center justify-center font-medium text-2xl">1</div>
        </li>
        <li class="row-span-4 bg-pink-300 rounded-lg shadow-xl">
          <div class="h-24 flex items-center justify-center font-medium text-2xl">2</div>
        </li>
        <li class="bg-yellow-200 rounded-lg shadow-xl">
          <div class="h-24 flex items-center justify-center font-medium text-2xl">3</div>
        </li>
        <li class="bg-yellow-200 rounded-lg shadow-xl">
          <div class="h-24 flex items-center justify-center font-medium text-2xl">4</div>
        </li>
        <li class="bg-white rounded-lg shadow-xl">
          <div class="h-24 flex items-center justify-center font-medium text-2xl">5</div>
        </li>
        <li class="bg-white rounded-lg shadow-xl">
          <div class="h-24 flex items-center justify-center font-medium text-2xl">6</div>
        </li>
        <li class="bg-white rounded-lg shadow-xl">
          <div class="h-24 flex items-center justify-center font-medium text-2xl">7</div>
        </li>
        <li class="bg-white rounded-lg shadow-xl">
          <div class="h-24 flex items-center justify-center font-medium text-2xl">8</div>
        </li>
        <li class="bg-white rounded-lg shadow-xl">
          <div class="h-24 flex items-center justify-center font-medium text-2xl">9</div>
        </li>
        <li class="bg-white rounded-lg shadow-xl">
          <div class="h-24 flex items-center justify-center font-medium text-2xl">10</div>
        </li>
        <li class="bg-white rounded-lg shadow-xl">
          <div class="h-24 flex items-center justify-center font-medium text-2xl">11</div>
        </li>
        <li class="bg-white rounded-lg shadow-xl">
          <div class="h-24 flex items-center justify-center font-medium text-2xl">12</div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Grid',
});
</script>

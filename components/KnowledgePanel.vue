<script setup>
defineProps(['name', 'label', 'desc_text', 'desc_site', 'desc_url'])


</script>

<template>
   <div
      class="flex flex-col items-start justify-center gap-4 border-2 border-black min-h-24 m-2 p-2 rounded-2xl backdrop-blur-3xl grow">
      <h1 class="text-lg">Knowledge Panel</h1>
      <h2 class="text-2xl"> {{ name }} ({{ label }}) </h2>
      <div class="text-base">Description: {{ desc_text }}</div>

      <div class="text-sm">
         Source: <NuxtLink :to="desc_url">{{ desc_site }}</NuxtLink>
      </div>

   </div>
</template>
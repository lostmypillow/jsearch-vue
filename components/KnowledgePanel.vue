<script setup>
defineProps(['name', 'label', 'desc_text', 'desc_site', 'desc_url', 'image', 'knowledge_panel'])


</script>

<template>
   <div
      class="flex flex-col items-start justify-center gap-4 border-2 border-black min-h-24 m-2 p-2 rounded-2xl backdrop-blur-3xl grow">
      <h1 class="text-lg">Knowledge Panel</h1>
      <h2 class="text-2xl"> {{ knowledge_panel.name }} ({{ knowledge_panel.label }}) </h2>
<img :src="knowledge_panel.image.url" alt="image">
      <div class="text-base">Description: {{ knowledge_panel.description.text }}</div>

      <div class="text-sm">
         Source: <NuxtLink :to="knowledge_panel.description.url">{{ knowledge_panel.description.site }}</NuxtLink>
      </div>
<div>INFO:</div>
<div v-for="inf in knowledge_panel.info">{{ inf.title }}:
   <div v-for="label in inf.labels">{{ label }}</div></div>

   </div>
</template>
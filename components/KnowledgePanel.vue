<script setup>
defineProps(['name', 'label', 'desc_text', 'desc_site', 'desc_url', 'image', 'knowledge_panel'])

const showMore = ref(false)
</script>

<template>
   <div
      class="flex flex-col items-start justify-center gap-4 border-2 border-black min-h-24  mx-4 my-8 px-4 py-8 rounded-3xl backdrop-blur-3xl grow">

      <h1 class="text-sm">KNOWLEDGE PANEL</h1>

      <h2 class="text-2xl">
         {{ knowledge_panel.name }} ({{ knowledge_panel.label }})
      </h2>

      <img :src="knowledge_panel.image.url" alt="image">

      <div class="text-base">
         &emsp;{{ knowledge_panel.description.text }}
      </div>

      <div class="text-sm">
         Source:
         <NuxtLink :to="knowledge_panel.description.url">
            {{ knowledge_panel.description.site }}
         </NuxtLink>
      </div>

      <button @click="showMore = !showMore">Show More info</button>
      <div v-show="showMore">
         <div v-for="inf in knowledge_panel.info">
            {{ inf.title }}:
            <div v-for="label in inf.labels">
               {{ label }}
            </div>
         </div>
      </div>


   </div>
</template>
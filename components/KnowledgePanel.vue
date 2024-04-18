<script setup>
defineProps(['knowledge_panel'])

const showMore = ref(false)
</script>

<template>


   <div
      class="flex flex-col items-start justify-center gap-2 border-2 border-black min-h-24  mx-4 my-8 p-4 rounded-3xl backdrop-blur-3xl grow">
      <h3 class="text-sm font-light">KNOWLEDGE PANEL</h3>

      <div class="flex flex-row w-full items-center justify-between">
         <h1 class="text-2xl">
            {{ knowledge_panel.name }} 
         </h1>
         <img class="max-w-10" :src="knowledge_panel.image.url" alt="image">
      </div>

      <h2 class="text-base font-light">
            {{ knowledge_panel.label }}
         </h2>


      <div class="text-base">
         &emsp;{{ knowledge_panel.description.text }}
      </div>

      <div class="text-sm">
         Source:
         <NuxtLink :to="knowledge_panel.description.url">
            {{ knowledge_panel.description.site }}
         </NuxtLink>
      </div>
      <br>
      <NavButton @click="showMore = !showMore">
         <div class=" flex flex-row" v-if="showMore == false">
            <PlusSVG />
            Show More Info
         </div>
         <div class=" flex flex-row" v-else>
            <MinusSVG />
            Show Less Info
         </div>
      </NavButton>

      <div v-auto-animate>
         <div v-if="showMore" class="flex flex-col gap-4">
            <div v-for="inf in knowledge_panel.info">


               <div class="font-bold"> {{ inf.title }}:</div>

               <div v-for="label in inf.labels">
                  {{ label }}
               </div>
            </div>
         </div>

      </div>
   </div>
</template>
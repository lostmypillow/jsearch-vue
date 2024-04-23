<script setup>
const route = useRoute()
const router = useRouter()
</script>



<template>
  <div class="flex flex-row gap-2" v-auto-animate>
    
    <NuxtLink to="/" class="flex items-center w-fit h-11 text-3xl font-bold">
      JSearch
    </NuxtLink>

    <div v-if="route.fullPath != '/'" class="flex items-center w-fit h-11 text-3xl font-bold gap-2">
      <SVGChevronRight />
      {{ route.fullPath.charAt(1).toUpperCase() + route.fullPath.slice(2) }}
    </div>

  </div>



</template>

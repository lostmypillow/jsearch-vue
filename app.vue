<script setup>
const route = useRoute()
const router = useRouter()
</script>


<template>
  <div class="max-w-screen max-h-screen">

    <div class="flex flex-row m-4 items-center justify-start gap-2">
      <button 
      v-if="route.fullPath != '/'"
      class="flex flex-row border-2 border-black rounded-full items-center justify-center px-2 w-20 h-11  hover:border-white hover:bg-black hover:text-white" 
      @click="router.back()">
      <ArrowLeftSVG />
      Back
      </button>

      <NuxtLink v-else to="/" class="flex flex-row border-2 border-black rounded-full items-center justify-center px-2 min-w-20 h-11 text-2xl font-semibold hover:border-white hover:bg-black hover:text-white">
        J
        <SearchSVG class="mt-1" />
      </NuxtLink> 

    <h1 v-if="route.fullPath == '/'" class="flex items-center w-screen h-11 text-3xl font-bold">JSearch</h1>


    <h1 v-else class="flex items-center w-screen h-11 text-3xl font-bold">
      {{ route.fullPath.charAt(1).toUpperCase() + route.fullPath.slice(2) }}
    </h1>

    </div>
    
  <NuxtPage />
  </div>

</template>
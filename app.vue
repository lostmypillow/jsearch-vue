<script setup>
const route = useRoute()
const router = useRouter()
</script>


<template>
  <div class="w-screen h-screen">
    <div class="flex flex-row mb-4 items-center justify-start gap-2">
      <button v-if="route.fullPath != '/'" class="flex flex-row border-2 border-black rounded-full px-4 py-2 w-fit h-11" @click="router.back()">
            <ArrowLeftSVG />
            Back</button>
    <h1 v-if="route.fullPath == '/'" class="flex items-center w-screen h-11 text-3xl shrink-0">JSearch</h1>


    <h1 v-else class="flex items-center w-screen h-11 text-3xl shrink-0">{{ route.fullPath.charAt(1).toUpperCase() + route.fullPath.slice(2) }}</h1>
    </div>
    
  <NuxtPage />
  </div>

</template>
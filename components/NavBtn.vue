<template>
 <button 
      v-if="route.fullPath != '/'"
      class="flex flex-row bg-black text-white rounded-full items-center justify-center px-2 w-20 gap-1 h-11 " 
      @click="router.back()">
      <ArrowLeftSVG />
      Back
      </button>

      <span
      v-else
      class="flex border-2 border-black rounded-full items-center justify-center px-2 gap-1 w-20 h-11 " >
      <HomeSVG />
     Home
</span>
</template>

<script setup>
const route = useRoute()
const router = useRouter()
</script>

<style>

</style>
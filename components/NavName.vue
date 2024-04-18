<template>
  <div v-auto-animate > <h1 v-if="route.fullPath == '/'" class="flex items-center w-fit h-11 text-3xl font-bold">JSearch</h1>


<h1 v-else class="flex items-center w-fit h-11 text-3xl font-bold">
  {{ route.fullPath.charAt(1).toUpperCase() + route.fullPath.slice(2) }}
</h1></div>
 
</template>

<script setup>
const route = useRoute()
</script>

<style>

</style>
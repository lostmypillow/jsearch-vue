<script setup>

defineProps(['results'])
</script>

<template>
    <div class="flex flex-col gap-4">
        <NuxtLink class="border-2 border-black rounded-lg" v-for="r in results" :to="r.url"  :key="r.position">
    {{ r.title }} <br>
    {{ r.description }}
    </NuxtLink>
    </div>
   
    
</template>
<script setup>

defineProps(['results'])
</script>

<template>
    <div class="flex flex-col border-2 border-black rounded-3xl  mx-4 my-8 px-4 py-8 gap-4"  v-for="r in results">
        <NuxtLink class="flex text-2xl text-blue-600 " :to="r.url"
            :key="r.position">
            {{ r.title }}

        </NuxtLink>
        <div class="flex">{{ r.description }}</div>

    </div>


</template>
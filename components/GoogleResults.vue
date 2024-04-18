<script setup>

defineProps(['results'])
</script>

<template>
    <h2 v-if="results != ''" class="mx-4 my-8 text-2xl font-bold">Results:</h2>
    <div class="flex flex-col border-2 border-black rounded-3xl  mx-4 my-8 px-4 py-8 gap-4"  v-for="r in results">

        <NuxtLink class="flex text-2xl text-blue-600 " :to="r.url"
            :key="r.position">
            {{ r.title }}

        </NuxtLink>
        <div class="flex">{{ r.description }}</div>

    </div>


</template>
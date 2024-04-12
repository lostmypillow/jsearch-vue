<script setup>
defineProps(['smalltext', 'title', 'subtitle', 'image', 'description'])


</script>

<template>
    <div
        class="flex flex-row items-center justify-start gap-4 border-2 border-black min-h-24 m-2 p-2 rounded-2xl backdrop-blur-3xl grow md:max-w-96">
        <div class="shrink-0">
            <img class="h-11" :src="image" alt="">
        </div>

        <div>
            <h3 class="text-sm font-light">
                {{ smalltext }}
            </h3>
            <div class="text-lg">
                {{ title }} <br class="md:hidden"> ({{ subtitle }})
            </div>
            <div>
                {{ description }}
            </div>
        </div>

    </div>
</template>
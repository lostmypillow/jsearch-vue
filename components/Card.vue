<script setup>
defineProps(['smalltext', 'title', 'subtitle', 'image'])


</script>

<template>
    <div
        class="flex flex-row items-center justify-start gap-4 border-2 border-black mx-2 my-4 p-2 rounded-2xl backdrop-blur-3xl max-w-96">
        <div class="shrink-0">
            <img class="h-11" :src="image" alt="">
        </div>

        <div>
            <h3 class="text-sm font-light">
                {{ smalltext }}
            </h3>
            <div class="text-lg">
                {{ title }} <br> ({{ subtitle }})
            </div>
        </div>

    </div>
</template>
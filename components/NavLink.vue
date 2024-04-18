<script setup>
defineProps(['to'])
</script>
<template>
    <NuxtLink class="border-2 px-4 py-2 rounded-full text-xl border-none bg-black text-white" :to="to">
        <slot></slot>
    </NuxtLink>
</template>
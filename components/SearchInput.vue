<script setup>
const searchTerm = ref("")
const emit = defineEmits(['input'])
function handleInput(e) {
    emit('input', e.target.value)
}
</script>
<template>
    
    <input
            class="outline-none border-2 border-black rounded-full px-4 py-2 w-[90%] items-center justify-center h-11 md:w-[50%]" placeholder="Search movies" :value="searchTerm" @input="handleInput" />
</template>
<script setup>
const searchTerm = ref("")
const emit = defineEmits(['input'])
const route = useRoute()
function handleInput(e) {
    emit('input', e.target.value)
}
</script>
<template>
    <div v-if="route.fullPath != '/'" class="flex flex-col md:flex-row gap-2 items-center justify-center">
        <input class="outline-none border-2 border-black rounded-full px-4 py-2 w-[90%] items-center justify-center h-11 md:w-[50%]"
            :placeholder="`Search ${route.fullPath.slice(1)}`" :value="searchTerm" @input="handleInput" />
         <button class="flex flex-row gap-2  bg-black text-white rounded-full px-4 py-2 items-center justify-center h-11 w-[90%] md:w-fit" >
        <SearchSVG />
        Search
    </button>
    </div>
</template>
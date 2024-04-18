<template>
    <button
        class="flex flex-row gap-2  bg-black text-white rounded-full px-4 py-2 items-center justify-center h-11 w-[90%] md:w-fit"
        @click="$emit('click')">
        <SearchSVG />
        Search
    </button>
</template>
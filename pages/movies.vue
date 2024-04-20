<script setup>
import axios from 'axios'
const searchTerm = ref("");
const apiError = ref(false);
const movies = ref()
const movieError = ref(false)
const runtimeConfig = useRuntimeConfig()
function handleSearch(n) {
    searchTerm.value = n
}

async function searchMovies() {
    try {
        const response = await axios.get('http://localhost:3001/get_deps?year=112&sem=2');
        movies.value = response.data.deps
        console.log(response.data.deps)
    } catch (error) {
        
    }
}
</script>

<template>
    <MovieInteract>
        
        <SearchButton @click="searchMovies" />
    </MovieInteract>

  <Card v-for="m in movies" :title="m" />
</template>
<script setup>
import axios from 'axios'
const searchTerm = ref("");
const apiError = ref(false);
const movies = ref([])
const movieError = ref(false)
const runtimeConfig = useRuntimeConfig()
function handleSearch(n) {
    searchTerm.value = n
}

async function searchMovies() {
    try {
        const response = await axios.get('https://www.omdbapi.com/?apikey=' + runtimeConfig.public.API_KEY + '&s=' + searchTerm.value);
        movies.value = response.data.Search
        keyExists.value = true
        if (response.data.Error != null) {
            movieError.value = response.data.Error
        } else {
            movieError.value = false
        }
    } catch (error) {
        movieError.value = response.data.Error
    }
}
</script>

<template>
    <MovieInteract>
        <SearchInput @input="handleSearch" />
        <SearchButton @click="searchMovies" />
    </MovieInteract>

    <ErrorMessage v-if="movieError" :type="movieError" />
    <ErrorMessage v-if="apiError" :type="apiError" />

    <MovieResults>
        <Card v-for="movie in movies" :smalltext="movie.Type" :title="movie.Title" :subtitle="movie.Year"
            :image="movie.Poster" />
    </MovieResults>
</template>
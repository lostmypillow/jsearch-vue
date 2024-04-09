<script setup>
import axios from 'axios'
const searchTerm = ref("");
const keyExists = ref(true);
const movies = ref([])
const ErrorMessage = ref("")
const runtimeConfig = useRuntimeConfig()

async function searchMovies() {
    try {

        const response = await axios.get('https://www.omdbapi.com/?apikey=' + runtimeConfig.public.API_KEY + '&s=' + searchTerm.value);
        console.log("Success")
        console.log(response.data);
        movies.value = response.data.Search
        keyExists.value = true
        if (response.data.Error != null) {
            ErrorMessage.value = response.data.Error
        } else {
            ErrorMessage.value = null
        }
    } catch (error) {
        console.log("I have errored")
        ErrorMessage.value = response.data.Error
    }
}
</script>

<template>
    <div class="flex flex-col md:flex-row gap-2 items-center justify-center mb-4">

        <input
            class="outline-none border-none bg-black rounded-full px-4 py-2 text-white w-full items-center justify-center h-11 md:w-[50%]"
            v-model="searchTerm" placeholder="Search movies" />

        <SearchButton @click="searchMovies" />

        <span v-if="keyExists == false">API Key incorrect</span>

    </div>

    <ErrorMessage v-if="ErrorMessage != null">
        {{ ErrorMessage }}
    </ErrorMessage>

    <Card v-for="movie in movies" 
    :smalltext="movie.Type" 
    :title="movie.Title" 
    :subtitle="movie.Year"
    :image="movie.Poster" />

</template>
<script setup>
import axios from 'axios'
const title = ref("");
// const apiKey = ref("");
const searchTerm = ref("");
const keyExists= ref("");

const F = ref()
async function searchMovies() {
  try {
    const response = await axios.get('https://www.omdbapi.com/?apikey=' + runtimeConfig.public.API_KEY + '&s=batman');
    console.log(response.data.Search);
    F.value = response.data.Search
    keyExists.value = true
  } catch (error) {
    keyExists.value = false
    console.error(error);
    console.log(keyExists.value)
  }
}
const runtimeConfig = useRuntimeConfig()


function whatsmyenv() {
  console.log()
}
 
</script>

<template>
  <button @click="searchMovies">click</button>
  <p v-if="keyExists">API Success</p>
  <p v-if="keyExists == false ">API Key incorrect</p>
  <div class="border-2 border-rose-600 m-2 p-2 rounded-2xl" v-for="f in F" >[{{ f.Type.toUpperCase() }}] {{f.Title}} ({{ f.Year }})
 
 <img :src="f.Poster" alt="">
  </div>
  

</template>
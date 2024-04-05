<script setup>
import { ref } from 'vue'
import MainPage from './components/MainPage.vue'
import TopSection from './components/TopSection.vue'
import InputWrapper from './components/InputWrapper.vue'
import APIInput from './components/APIInput.vue'
import SearchInput from './components/SearchInput.vue'
import MovieView from './components/MovieView.vue'
import AppTitle from './components/AppTitle.vue'



// const movies = ref([]);
const title = ref("");
const apikey = ref("");
const searchTerm = ref("");
const API_URL = ref("")
const showSearch = ref(false);
function hide(n) {
   showSearch.value = !showSearch.value;
// console.log(n.value)
//  apikey.value = n
// API_URL.value += apikey.value
// console.log(API_URL.value)
API_URL.value = "https://www.omdbapi.com/?apikey=" + apikey.value
 };
async function searchMovies() {

  const response = await fetch(`${API_URL.value}&s=${title.value}`)
  const json = await response.json();
  console.log(json.Search)

}

</script>

<template>
  <MainPage>
    <TopSection>
      <AppTitle />

      <InputWrapper>

        <APIInput v-if="showSearch == false" @show-search="hide" v-model="apikey"  />
        <SearchInput v-else @search-movies="searchMovies(title)" v-model="title" />

      </InputWrapper>
    </TopSection>

    <MovieView>
      
      <MovieCard movie={movie} />)
      
      <h1>no movies found</h1>
     
      <p>{{ title }}</p>
    </MovieView>
  </MainPage>

</template>
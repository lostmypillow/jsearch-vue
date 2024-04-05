<script setup>
const title = ref("");
// const apiKey = ref("");
const searchTerm = ref("");
const keyExists= ref(false);

async function searchMovies() {
  try {
    const response = await axios.get('https://www.omdbapi.com/?apikey=&s=batman');
    console.log(response.toJSON());
  } catch (error) {
    console.error(error);
  }
}
 
</script>

<template>
  <MainPage>
    <TopSection>
      <AppTitle />

      <InputWrapper>

        <APIInput v-if="keyExists == false" @show-search="hide" v-model="apikey"  />
    <APIButton @click="keyExists == !keyExists" />
        <SearchInput v-else  v-model="title" />
    <SearchButton />

      </InputWrapper>
    </TopSection>

    <MovieView>
      
      <MovieCard movie={movie} />)
      
      <h1>no movies found</h1>
     
      <p>{{ title }}</p>
    </MovieView>
  </MainPage>

</template>
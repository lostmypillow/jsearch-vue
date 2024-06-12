<script setup>

</script>


<template>

<h1 class="text-3xl">Search Results:</h1>
   
<div class="flex flex-col w-full gap-4 pt-4"> 
    
    <v-card 

    v-for="movie in $attrs.data"
    :key="movie.imdbID"
  :title="movie.Title"
  :subtitle="movie.Year"
  :text="movie.Type.toUpperCase()"
  variant="tonal"
>
<v-img
      height="200px"
      :src="movie.Poster"
      cover
    ></v-img>


</v-card></div>
   
</template>

<style scoped>
img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}
</style>

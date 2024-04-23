<script setup>
import axios from 'axios'
const knowledge_panel = ref('')
const results = ref('')
// const related_keywords = response.related_keywords.keywords
const searchTerm =ref('')

function handleGoogleSearch(n) {
    searchTerm.value = n
}
async function searchGoogle() {
  const options = {
    method: 'GET',
    url: 'https://google-search74.p.rapidapi.com/',
    params: {
      query: searchTerm.value,
      limit: '10',
      related_keywords: 'false'
    },
    headers: {
      'X-RapidAPI-Key': '4cc2304fb3msh28544a85c39f266p17c92bjsnd635c2ee140a',
      'X-RapidAPI-Host': 'google-search74.p.rapidapi.com'
    }
  };
  try {
    const response = await axios.request(options);
    knowledge_panel.value = response.data.knowledge_panel
    results.value = response.data.results
    console.log(response)

  } catch (error) {
    console.log("Error")
  }
}
</script>

<template>
  <!-- <MovieInteract>
        <SearchInput @input="handleGoogleSearch" />
        <SearchButton @click="searchGoogle" />
    </MovieInteract> -->

 
  <KnowledgePanel v-if="knowledge_panel" :knowledge_panel="knowledge_panel"/>
  <GoogleResults :results="results" />

</template>
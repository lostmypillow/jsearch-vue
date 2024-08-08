<script setup>
const route = useRoute()

const expand = ref(false)
// console.log("type value is")
// console.log(type.value)
const data = ref()
const isLoading = ref(false)
// watch(type, query, (newtype, newquery) => {
//   console.log(`new type is ${newtype} ${newquery}`)
// })
const type = computed(() => route.query.type)
const query = computed(() => route.query.query)
// console.log(query.value)
const router = useRouter();
const sorry =ref(false)

const croute = computed(() => router.currentRoute.value.fullPath)
watch(croute, (newcroute, oldcroute) => {
  if (newcroute !== oldcroute) {
    console.log("changed")
    getALl();
  }
});

onBeforeMount(() => {
  const type = computed(() => route.query.type)
  console.log(`meow ${type.value}`)
  if (type.value) {
    getALl()
  }
  
})



async function getALl() {
  // console.log(`type value is ${type.value} within getAll`)
  if (type.value == "movies") {
   
    await getMovies()
    
    console.log("got movies")
  } else if (type.value == "google") {

    await getGoogle()
  
    console.log("got google")
  }

}


async function getMovies() {

  try {
  isLoading.value = true;

  // Define a timeout promise that rejects after 3 seconds
  const timeout = new Promise((_, reject) =>
    setTimeout(() => reject(new Error('Request timed out')), 3000)
  );

  // Attempt to fetch data from the first URL with a 3-second timeout
  const todo = await Promise.race([
    fetch('https://jsearch.lostmypillow.duckdns.org/api/get-movies/?query=' + query.value + "&limit=10&related=false"),
    timeout
  ]);

  const response = await todo.json();
  console.log(response.results.Search);
  data.value = await response.results.Search;

} catch (error) {
  // If the first fetch failed or timed out, try the second URL
  sorry.value = true;

  try {
    const todo = await fetch('https://jsearch-latest.onrender.com/get-movies/?query=' + query.value + "&limit=10&related=false");
    const response = await todo.json();
    console.log(response.results.Search);
    data.value = await response.results.Search;
  } catch (error) {
    console.error('Both requests failed:', error);
    // Handle the error if the second request also fails
  }

} finally {
  console.log("search google completed");
  isLoading.value = false;
  sorry.value = false;
}

}

async function getGoogle() {



  try {
  isLoading.value = true;

  // Define a timeout promise that rejects after 3 seconds
  const timeout = new Promise((_, reject) =>
    setTimeout(() => reject(new Error('Request timed out')), 3000)
  );

  // Attempt to fetch data from the first URL with a 3-second timeout
  const todo = await Promise.race([
    fetch('https://jsearch.lostmypillow.duckdns.org/api/get-google/?query=' + query.value + "&limit=10&related=false"),
    timeout
  ]);

  const response = await todo.json();
  console.log(response.results);
  data.value = await response.results;

} catch (error) {
  // If the first fetch failed or timed out, try the second URL
  sorry.value = true;

  try {
    const todo = await fetch('https://jsearch-latest.onrender.com/get-google/?query=' + query.value + "&limit=10&related=false");
    const response = await todo.json();
    console.log(response.results);
    data.value = await response.results;
  } catch (error) {
    console.error('Both requests failed:', error);
    // Handle the error if the second request also fails
  }

} finally {
  console.log("search google completed");
  isLoading.value = false;
  sorry.value = false;
}

}

</script>


<template>

  <h1 class="flex w-fit text-xl md:text-3xl gap-4">
    You searched for:
    <p class="font-mono font-extrabold">
      {{ query }}
    </p>
    in
    <p class="font-mono font-extrabold">
      {{ type }}
    </p>
  </h1>
  <v-progress-circular indeterminate v-if="isLoading"></v-progress-circular>
  
  <div class="flex w-fit"  v-if="sorry">
    <p>
      Sorry, it appears the Raspberry Pi hosting my API is down, the website will automatically try the same API hosted on Render.com. Render.com's free tier starts up reeaaaaaaaaaaaalllly slow, so please be patient.
    </p>
  </div>
  <div v-if="data">
    <div v-if="type == 'movies'"
      class="flex flex-col md:flex-row flex-wrap items-center justify-center w-full gap-4 pt-4">

      <v-card class=" md:w-1/5 " v-for="movie in data" :key="movie.imdbID" :title="movie.Title" :subtitle="movie.Year"
        :text="movie.Type" variant="tonal">

        <v-img height="200px" :src="movie.Poster" cover />

      </v-card>

    </div>

    <div v-else class="flex flex-col flex-wrap items-center justify-center w-full gap-4 pt-4">
   
      <v-card class="md:w-2/3 " v-for="result in data.results" :key="result.position" :title="result.title"
        :subtitle="result.url" :text="result.description" :href="result.url" variant="tonal" />
    </div>
  </div>

</template>

<style scoped>
img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}
</style>

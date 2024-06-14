<script setup>
const toggle = ref("dark")
const searchType = ref("movies")
const searchTerm = ref()
const searchLabel = computed(() => {
  return searchType.value == "movies" ? "Search with OMDb API" : " Search with RapidAPI"
})
const loading = ref(false)
const route = useRoute()
const data = ref()
const type = computed(() => route.query.type)
const query = computed(() => route.query.query)


async function onClick() {
  loading.value = true
  await navigateTo({
    path: '/search',
    query: {
      type: searchType.value,
      query: searchTerm.value,
    }
  })
  console.log(type.value)
  getALl()


}

// onMounted(() => {
//   getALl()
// })

function getALl() {
  if (type.value == "movies") {
    getMovies()
  } else if (type.value == "google") {
    getGoogle()
  }
}


async function getMovies() {
  loading.value = true
  const result = await $fetch("https://www.omdbapi.com/?apikey=e9cb394&s=" + query.value);
  data.value = result.Search
  loading.value = false
  console.log(result.Search)
  console.log("searched movie")
}

async function getGoogle() {
  loading.value = true
  const todo = await $fetch('https://google-search74.p.rapidapi.com', {
    method: 'GET',
    params: {
      query: query.value,
      limit: "10",
      related_keywords: "false",
    },
    headers: {
      "X-RapidAPI-Key":
        "4cc2304fb3msh28544a85c39f266p17c92bjsnd635c2ee140a",
      "X-RapidAPI-Host": "google-search74.p.rapidapi.com",
    },
  })
  data.value = todo
  loading.value = false
  console.log(todo)
  console.log("searched google")
}

// 
</script>


<template>
  <NuxtLayout>
    <v-app>
      <v-app-bar scroll-behavior="elevate" rounded>

        <v-app-bar-title><v-btn variant="text" to="/">
            <label class="text-2xl">JSEARCH</label>
          </v-btn></v-app-bar-title>

        <template v-slot:append>

          <v-btn-toggle v-model="toggle" color="primary" mandatory>
            <v-btn icon="mdi-white-balance-sunny" value="light"></v-btn>
            <v-btn icon="mdi-moon-waning-crescent" value="dark"></v-btn>

          </v-btn-toggle>
        </template>
      </v-app-bar>

      <div class="flex flex-col w-svw items-center justify-center pt-16 px-6 pb-6">
        <v-text-field v-model="searchTerm" class="flex w-full md:w-1/4 h-11 pt-2" :label=searchLabel type="input"
          append-icon="mdi-send" @click:append="onClick" @keyup.enter="onClick" :loading="loading" />

        <v-select v-model="searchType" class="flex w-full pt-6 md:w-1/4" label="Change Search Type"
          :items="['movies', 'google']" variant="underlined" />


        <div class="flex flex-col pt-4 w-full items-center">

          <v-progress-circular v-if="loading" indeterminate />

          <NuxtPage :data="data" />

        </div>

      </div>
    </v-app>
  </NuxtLayout>
</template>

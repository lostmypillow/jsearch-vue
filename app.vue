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
  getALl()


}



// onMounted(() => {
// getALl()

// })

async function getALl() {
  if (type.value == "movies") {
    getMovies()
  } else { 
    getGoogle() 
  }
}


async function getMovies() {
  loading.value = true
  const result = await $fetch("https://www.omdbapi.com/?apikey=e9cb394&s=" + query.value);
  data.value = result.Search
  loading.value = false
  // console.log(result.Search)
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
//   const todo = {
//     "search_term": "Nike",
//     "knowledge_panel": {
//         "name": "Nike",
//         "label": "Footwear company",
//         "description": {
//             "text": "Nike, Inc. is an American athletic footwear and apparel corporation headquartered near Beaverton, Oregon, United States. It is the world's largest supplier of athletic shoes and apparel and a major manufacturer of sports equipment, with revenue in excess of US$46 billion in its fiscal year 2022.",
//             "url": "https://en.wikipedia.org/wiki/Nike,_Inc.",
//             "site": "Wikipedia"
//         },
//         "image": {
//             "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:m8TS_7lVuPlJlM",
//             "width": 225,
//             "height": 225,
//             "page_url": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTNoD9oT_VnEYNKKeOor8U4qK5T1LF4bC2iRDD75fQdveQMHTUA"
//         },
//         "info": [
//             {
//                 "title": "Founders",
//                 "labels": [
//                     "Phil Knight",
//                     "Bill Bowerman"
//                 ]
//             },
//             {
//                 "title": "Headquarters",
//                 "labels": [
//                     "Beaverton, OR"
//                 ]
//             },
//             {
//                 "title": "Customer service",
//                 "labels": [
//                     "1 (800) 806-6453"
//                 ]
//             },
//             {
//                 "title": "Founded",
//                 "labels": [
//                     "January 25, 1964, Eugene, OR"
//                 ]
//             },
//             {
//                 "title": "CEO",
//                 "labels": [
//                     "John Donahoe (Jan 13, 2020–)"
//                 ]
//             },
//             {
//                 "title": "President",
//                 "labels": [
//                     "John Donahoe"
//                 ]
//             }
//         ]
//     },
//     "results": [
//         {
//             "position": 1,
//             "url": "https://www.nike.com/",
//             "title": "Nike. Just Do It. Nike.com",
//             "description": "Nike delivers innovative products, experiences and services to inspire athletes."
//         },
//         {
//             "position": 2,
//             "url": "https://www.instagram.com/nike/",
//             "title": "Nike (@nike) • Instagram photos and videos",
//             "description": "The collection puts a refined spin on sportswear staples and singular outerwear pieces, with branded trims and discoverable details that tastefully bridge the ..."
//         },
//         {
//             "position": 3,
//             "url": "https://en.wikipedia.org/wiki/Nike,_Inc.",
//             "title": "Nike, Inc. - Wikipedia",
//             "description": "Nike, Inc. (stylized as NIKE) is an American athletic footwear and apparel corporation headquartered near Beaverton, Oregon, United States."
//         },
//         {
//             "position": 4,
//             "url": "https://play.google.com/store/apps/details?id=com.nike.omega&hl=en_US",
//             "title": "Nike: Shoes, Apparel & Stories - Apps on Google Play",
//             "description": "Access exclusive products, shop trending clothing and sneakers, and stay up-to-date with the newest Member experiences. ... Shop online in the Nike shopping app ..."
//         },
//         {
//             "position": 5,
//             "url": "https://twitter.com/nike?lang=en",
//             "title": "Nike - X",
//             "description": "It's time to feel the unreal. The next generation of Air technology is available now. The Nike Air Max Dn is designed to offer an all-new underfoot sensation ..."
//         },
//         {
//             "position": 6,
//             "url": "https://www.youtube.com/user/NIKE",
//             "title": "Nike - YouTube",
//             "description": "In the Wild · Welcome to In The Wild. A series where we discover which Nike products athletes everywhere are rocking in their natural habitat. · L.A. ..."
//         },
//         {
//             "position": 7,
//             "url": "https://www.linkedin.com/company/nike",
//             "title": "Nike - LinkedIn",
//             "description": "NIKE, Inc. is a purpose-driven organization energized by a shared commitment to move the world forward through the power of sport. We champion diversity and ..."
//         },
//         {
//             "position": 8,
//             "url": "https://www.nikegrind.com/",
//             "title": "Nike Grind | Changing the Game From the Ground Up",
//             "description": "Our innovative partners are using Nike Grind materials to make high-performance surfaces and products. Together, we're transforming waste into limitless ..."
//         },
//         {
//             "position": 9,
//             "url": "https://www.swoosh.nike/",
//             "title": "Home | .SWOOSH",
//             "description": ".SWOOSH is the home for Nike Virtual Products ; Unlock Product Access. Collect Nike in-game wearables and unlock exclusive access to physical products. People ..."
//         },
//         {
//             "position": 10,
//             "url": "https://www.tiktok.com/@nike?lang=en",
//             "title": "Nike (@nike) Official - TikTok",
//             "description": "Nike (@nike) on TikTok | 30.6M Likes. 6.2M Followers. Watch the latest video from Nike (@nike)."
//         }
//     ]
// }
data.value = todo
loading.value = false
  console.log(todo)
}

// 
</script>


<template>
  <NuxtLayout>
    <v-app>
      <v-app-bar scroll-behavior="elevate" rounded>

        <v-app-bar-title><v-btn  variant="text" to="/">
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
        <v-text-field 
        v-model="searchTerm" 
        class="flex w-full md:w-1/4 h-11 pt-2" 
        :label=searchLabel 
        type="input" 
        append-icon="mdi-send"
        @click:append="onClick"
        @keyup.enter="onClick"
        :loading="loading"
        />

        <v-select 
        v-model="searchType" 
        class="flex w-full pt-6 md:w-1/4"
        label="Change Search Type"
        :items="['movies', 'google']"
        variant="underlined" />

        
        <div class="flex flex-col pt-4 w-full items-center">

          <v-progress-circular
          v-if="loading"
          indeterminate />
         
          <NuxtPage :data="data" />
          
        </div>

      </div>
    </v-app>
  </NuxtLayout>
</template>

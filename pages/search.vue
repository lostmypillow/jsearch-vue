<script setup>
const route = useRoute()
const type = computed(() => route.query.type)
const query = computed(() => route.query.query)

import { ref } from 'vue'

const labels = { 0: 'SU', 1: 'MO', 2: 'TU', 3: 'WED', 4: 'TH', 5: 'FR', 6: 'SA' }
const forecast = [
  { day: 'Tuesday', icon: 'mdi-white-balance-sunny', temp: '24\u00B0/12\u00B0' },
  { day: 'Wednesday', icon: 'mdi-white-balance-sunny', temp: '22\u00B0/14\u00B0' },
  { day: 'Thursday', icon: 'mdi-cloud', temp: '25\u00B0/15\u00B0' },
]

const expand = ref(false)
const time = ref(0)

</script>


<template>

<h1 class="flex w-fit text-3xl gap-3">You searched for: <p class="font-mono font-extrabold">{{ query }}</p> </h1>



  <v-card
    class="mx-auto"
    max-width="368"
  >
    <v-card-item title="Florida">
      <template v-slot:subtitle>
        <v-icon
          class="me-1 pb-1"
          color="error"
          icon="mdi-alert"
          size="18"
        ></v-icon>

        Extreme Weather Alert
      </template>
    </v-card-item>

    <v-card-text class="py-0">
      <v-row align="center" no-gutters>
        <v-col
          class="text-h2"
          cols="6"
        >
          64&deg;F
        </v-col>

        <v-col class="text-right" cols="6">
          <v-icon
            color="error"
            icon="mdi-weather-hurricane"
            size="88"
          ></v-icon>
        </v-col>
      </v-row>
    </v-card-text>

    <div class="d-flex py-3 justify-space-between">
      <v-list-item
        density="compact"
        prepend-icon="mdi-weather-windy"
      >
        <v-list-item-subtitle>123 km/h</v-list-item-subtitle>
      </v-list-item>

      <v-list-item
        density="compact"
        prepend-icon="mdi-weather-pouring"
      >
        <v-list-item-subtitle>48%</v-list-item-subtitle>
      </v-list-item>
    </div>

    <v-expand-transition>
      <div v-if="expand">
        <div class="py-2">
          <v-slider
            v-model="time"
            :max="6"
            :step="1"
            :ticks="labels"
            class="mx-4"
            color="primary"
            density="compact"
            show-ticks="always"
            thumb-size="10"
            hide-details
          ></v-slider>
        </div>

        <v-list class="bg-transparent">
          <v-list-item
            v-for="item in forecast"
            :key="item.day"
            :append-icon="item.icon"
            :subtitle="item.temp"
            :title="item.day"
          >
          </v-list-item>
        </v-list>
      </div>
    </v-expand-transition>

    <v-divider></v-divider>

    <v-card-actions>
      <v-btn
        :text="!expand ? 'Full Report' : 'Hide Report'"
        @click="expand = !expand"
      ></v-btn>
    </v-card-actions>
  </v-card>



   
<div class="flex flex-col md:flex-row flex-wrap items-center justify-center w-full gap-4 pt-4"> 
    
    <v-card 
    v-if="type == 'movies'"
    class="md:w-1/5"
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


</v-card>


<v-card 
    v-else
    class="md:w-1/5"
  
  :title="$attrs.data.knowledge_panel.name"
  :subtitle="$attrs.data.knowledge_panel.label"
  :text="$attrs.data.knowledge_panel.description.text"
  variant="tonal"
>
<v-img
      height="200px"
      :src="$attrs.data.knowledge_panel.image.url"
      cover
    ></v-img>


</v-card>





</div>
   
</template>

<style scoped>
img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}
</style>

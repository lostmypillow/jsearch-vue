<script setup>
const route = useRoute()
const type = computed(() => route.query.type)
const query = computed(() => route.query.query)
const expand = ref(false)
</script>


<template>

  <h1 class="flex w-fit text-3xl gap-4">
    You searched for:
    <p class="font-mono font-extrabold">
      {{ query }}
    </p>
  </h1>

  <div v-if="type == 'movies'"
  class="flex flex-col md:flex-row flex-wrap items-center justify-center w-full gap-4 pt-4">

    <v-card 
    class="md:w-1/5 "
    v-for="movie in $attrs.data"
    :key="movie.imdbID"
    :title="movie.Title"
    :subtitle="movie.Year"
    :text="movie.Type"
    variant="tonal">

      <v-img
      height="200px"
      :src="movie.Poster"
      cover />

    </v-card>

  </div>

  <div v-else
  class="flex flex-col flex-wrap items-center justify-center w-full gap-4 pt-4">

    <v-card v-if="$attrs.data.knowledge_panel != null"
    class="md:w-2/3"
    :title="$attrs.data.knowledge_panel.name"
    :subtitle="$attrs.data.knowledge_panel.label"
    :text="$attrs.data.knowledge_panel.description.text"
    variant="tonal">
      <v-img 
      :height="$attrs.data.knowledge_panel.image.height" :width="$attrs.data.knowledge_panel.image.width"
      :src="$attrs.data.knowledge_panel.image.url" cover />

      <a 
      class="px-4 underline text-blue-500"
      :href="$attrs.data.knowledge_panel.description.url">
      Source:
      {{ $attrs.data.knowledge_panel.description.site }}
      </a>

      <div v-if="expand" class="py-2 px-4">
        <v-list lines="one">

          <v-list-item 
          v-for="n in $attrs.data.knowledge_panel.info"
          :title="n.title">

            <template v-slot:subtitle>
              <p v-for="s in n.labels">{{ s }}</p>
            </template>

          </v-list-item>

        </v-list>

      </div>

      <v-card-actions>

        <v-btn
        :text="!expand ? 'More Info' : 'Hide Info'" @click="expand = !expand" />

      </v-card-actions>

    </v-card>

    <v-card
    class="md:w-2/3 "
    v-for="result in $attrs.data.results"
    :key="result.position"
    :title="result.title"
    :subtitle="result.url"
    :text="result.description"
    :href="result.url"
    variant="tonal" />

  </div>

</template>

<style scoped>
img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}
</style>

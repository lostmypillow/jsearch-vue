<script setup>
const toggle = ref('light');
const route = useRoute();
const type = computed(() => route.query.type);
const searchType = ref('movies');
const query = computed(() => route.query.query);
const searchTerm = ref('');
const searchLabel = computed(() => {
    return searchType.value == 'movies' ? 'Search with OMDb API' : ' Search with RapidAPI';
});
const loading = ref(false);

import { useTheme } from 'vuetify';

const theme = useTheme();

watch(toggle, (newtoggle) => {
    toggleTheme();
});

function toggleTheme() {
    theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark';
}

function onClick() {
    navigateTo({
        path: '/search',
        query: {
            type: searchType.value,
            query: searchTerm.value,
        },
    });
}
const isReady = ref(false);
</script>
<template>
    <div class="flex w-svw h-svh">
        <v-app>
            <v-app-bar scroll-behavior="elevate" rounded>
                <v-app-bar-title
                    ><v-btn variant="text" to="/">
                        <h1 class="text-2xl">SEARCH</h1>
                    </v-btn> <v-btn-toggle v-model="toggle" color="primary" mandatory>
                        <v-btn icon="mdi-white-balance-sunny" value="light"></v-btn>
                        <v-btn icon="mdi-moon-waning-crescent" value="dark"></v-btn>
                    </v-btn-toggle></v-app-bar-title
                >
                <div class="flex-grow-1 mx-4" style="max-width: 600px;">
                <v-text-field
                center-affix
                    v-model="searchTerm"
                    class="flex-1 flex "
                    variant="solo-filled"
                    :label="searchLabel"
                    type="input"
                    append-icon="mdi-send"
                    @click:append="onClick"
                    @keyup.enter="onClick"
                    :loading="loading"
                    :readonly="isReady"
                    hide-details
      single-line
      density="compact"
                /></div>
            </v-app-bar>

            <div class="flex flex-col w-svw items-center justify-center pt-16 px-6 pb-6">
                <div class="flex flex-col pt-4 w-full items-center">
                    <slot></slot>
                </div>
            </div>
        </v-app>
    </div>
</template>
<style></style>

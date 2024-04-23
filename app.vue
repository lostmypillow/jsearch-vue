<script setup>
const searchTerm = ref("")
function handleSearch(n) {
    searchTerm.value = n
}
</script>


<template>


  <!-- 
    <NavBar>
      <NavBtn />
      <NavName />
    </NavBar> -->
  <Main>
    <ResponsiveTop>
      <NavBar />
      <SearchBar @input="handleSearch" @requestSearch="" />
    </ResponsiveTop>

 <ResponsiveBottom>
    <NuxtPage v-auto-animate :searchTerm="searchTerm"/>
  </ResponsiveBottom>
  </Main>


</template>
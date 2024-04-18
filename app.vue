<script setup>
const route = useRoute()
const router = useRouter()
</script>


<template>
  <div class="max-w-screen max-h-screen">


    <NavBar>
      <NavBtn />
      <NavName />
    </NavBar>


    <NuxtPage v-auto-animate />


  </div>

</template>
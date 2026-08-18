<script setup>
const isReady = ref(false);

const waitForHealthCheck = async (url) => {
  while (!isReady.value) {
    try {
      const response = await fetch(url);

      if (response.ok) {
        isReady.value = true;
        console.log('Endpoint is healthy!');
        break;
      }
    } catch (error) {
      console.warn('Endpoint not ready, retrying in 2 seconds...');
    }

    await new Promise(resolve => setTimeout(resolve, 2000));
  }
};

onMounted(() => {
  waitForHealthCheck('https://jsearch-api.onrender.com/health');
})

</script>


<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

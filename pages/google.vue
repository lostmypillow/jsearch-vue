<script setup>

const options = {
  method: 'GET',
  url: 'https://google-search74.p.rapidapi.com/',
  params: {
    query: 'Nike',
    limit: '10',
    related_keywords: 'true'
  },
  headers: {
    'X-RapidAPI-Key': '4cc2304fb3msh28544a85c39f266p17c92bjsnd635c2ee140a',
    'X-RapidAPI-Host': 'google-search74.p.rapidapi.com'
  }
};
async function searchGoogle() {
try {
    const response = await axios.request(options);
    console.log(response.data);
} catch (error) {
    console.error(error);
}
}
</script>

<template>
    <span>this is all page</span>
</template>
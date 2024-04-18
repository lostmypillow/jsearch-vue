<script setup>
import axios from 'axios'

const response = {
  "search_term": "Nike",
  "knowledge_panel":
  {
    "name": "Nike",
    "label": "Footwear company",
    "description":
    {
      "text": "Nike, Inc. is an American athletic footwear and apparel corporation headquartered near Beaverton, Oregon, United States. It is the world's largest supplier of athletic shoes and apparel and a major manufacturer of sports equipment, with revenue in excess of US$46 billion in its fiscal year 2022.",
      "url": "https://en.wikipedia.org/wiki/Nike,_Inc.",
      "site": "Wikipedia"
    },
    "image":
    {
      "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:m8TS_7lVuPlJlM", "width": 225, "height": 225, "page_url": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTNoD9oT_VnEYNKKeOor8U4qK5T1LF4bC2iRDD75fQdveQMHTUA"
    },
    "info":
      [
        {
          "title": "Customer service",
          "labels": ["1 (800) 806-6453"]
        },
        {
          "title": "Founders",
          "labels": ["Phil Knight", "Bill Bowerman"]
        },
        {
          "title": "Headquarters",
          "labels": ["Beaverton, OR"]
        },
        {
          "title": "Founded",
          "labels": ["January 25, 1964, Eugene, OR"]
        },
        {
          "title": "CEO",
          "labels": ["John Donahoe (Jan 13, 2020–)"]
        },
        {
          "title": "President",
          "labels": ["John Donahoe"]
        }
      ]
  },
  "results":
    [
      {
        "position": 1,
        "url": "https://www.nike.com/",
        "title": "Nike. Just Do It. Nike.com",
        "description": "Nike delivers innovative products, experiences and services to inspire athletes."
      },
      {
        "position": 2,
        "url": "https://www.instagram.com/nike/?hl=en", "title": "Nike (@nike) • Instagram photos and videos", "description": "Spotlighting athlete* and stories. One Bowerman Dr, Beaverton, Oregon 97005. linkin.bio/nike. Destroy: Never's profile picture. Destroy: Never."
      },
      {
        "position": 3,
        "url": "https://en.wikipedia.org/wiki/Nike,_Inc.",
        "title": "Nike, Inc. - Wikipedia",
        "description":
          "Nike, Inc. (stylized as NIKE) is an American athletic footwear and apparel corporation headquartered near Beaverton, Oregon, United States."
      },
      {
        "position": 4,
        "url": "https://twitter.com/Nike",
        "title": "Nike - X.com", "description":
          "It's time to feel the unreal. The next generation of Air technology is available now. The Nike Air Max Dn is designed to offer an all-new underfoot sensation ..."
      },
      {
        "position": 5,
        "url": "https://www.linkedin.com/company/nike",
        "title": "Nike - LinkedIn",
        "description": "NIKE, Inc. is a purpose-driven organization energized by a shared commitment to move the world forward through the power of sport. We champion diversity and ..."
      },
      {
        "position": 6,
        "url": "https://www.footlocker.com/category/brands/nike.html",
        "title": "Nike Shoes, Apparel, and Accessories - Foot Locker",
        "description": "From Nike training shoes to Nike clothing and Nike backpacks , Foot Locker has everything you need to dominate your next workout."
      },
      {
        "position": 7,
        "url": "https://www.youtube.com/nike",
        "title": "Nike - YouTube",
        "description": "We will continue to stand up for equality and work to break down barriers for athletes* all over the world. We will do and invest more to uphold ..."
      },
      {
        "position": 8,
        "url": "https://www.swoosh.nike/",
        "title": "Home | .SWOOSH",
        "description": ".SWOOSH is the home for Nike Virtual Products ; Unlock Product Access. Collect Nike in-game wearables and unlock exclusive access to physical products. People ..."
      },
      {
        "position": 9,
        "url": "https://www.nikegrind.com/",
        "title": "Nike Grind | Changing the Game From the Ground Up",
        "description": "Our innovative partners are using Nike Grind materials to make high-performance surfaces and products. Together, we're transforming waste into limitless ..."
      },
      {
        "position": 10,
        "url": "https://www.amazon.com/nike/s?k=nike",
        "title": "Nike - Amazon.com",
        "description": "Price and other details may vary based on product size and color. Nike Performance Cushion Crew Socks with Band (6 Pairs). Pinch to zoom-in further ..."
      }
    ],
  "related_keywords":
  {
    "spelling_suggestion_html": null,
    "spelling_suggestion": null,
    "keywords":
      [
        {
          "position": 1,
          "knowledge":
          {
            "title": "Nike",
            "label": "",
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnKZpLUqr-X_W0wHYYY844zvzXz_V5Qh49u70oTm4S4Q&s=10"
          },
          "keyword_html": "nike",
          "keyword": "nike"
        },
        {
          "position": 2,
          "knowledge":
          {
            "title":
              "Nike Factory Store",
            "label": "",
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKxeOUXH6P5GodcuzL8BpklWhbOQnivXbx2Pzn2xvNboxwoDJ9ynFmY5k_ZQ&s=10"
          },
          "keyword_html": "nike outlet",
          "keyword": "nike outlet"
        },
        {
          "position": 3,
          "knowledge": null,
          "keyword_html": "nike<b> dunks</b>",
          "keyword": "nike dunks"
        },
        {
          "position": 4,
          "knowledge": null,
          "keyword_html": "nike<b> shoes</b>",
          "keyword": "nike shoes"
        },
        {
          "position": 5,
          "knowledge": null,
          "keyword_html": "nike<b> tech</b>",
          "keyword": "nike tech"
        },
        {
          "position": 6,
          "knowledge":
          {
            "title": "Nike Air Max",
            "label": "Shoes",
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSejwSKfTdSQSxJQb6IneKzq5QAO3pMsqwaAUcThpWDc-0tBb3-Mr_I38h6qQ&s=10"
          },
          "keyword_html": "nike air max",
          "keyword": "nike air max"
        },
        {
          "position": 7,
          "knowledge": null,
          "keyword_html": "nike<b> socks</b>",
          "keyword": "nike socks"
        },
        {
          "position": 8,
          "knowledge": null,
          "keyword_html": "nike<b> stock</b>",
          "keyword": "nike stock"
        },
        {
          "position": 9,
          "knowledge": null,
          "keyword_html": "nike<b> air force 1</b>",
          "keyword": "nike air force 1"
        },
        {
          "position": 10,
          "knowledge":
          {
            "title": "Nike Blazer",
            "label": "Shoes",
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuFOS39R0wOC3qFLb8VqeIOow355AVx5SqCH1yks8Hwa_BqkuD6GU9OWJllQ&s=10"
          },
          "keyword_html": "nike blazers",
          "keyword": "nike blazers"
        }
      ]
  }
}
const knowledge_panel = response.knowledge_panel
const results = response.results
const related_keywords = response.related_keywords.keywords
// async function searchGoogle() {
//   const options = {
//     method: 'GET',
//     url: 'https://google-search74.p.rapidapi.com/',
//     params: {
//       query: 'Nike',
//       limit: '10',
//       related_keywords: 'true'
//     },
//     headers: {
//       'X-RapidAPI-Key': '4cc2304fb3msh28544a85c39f266p17c92bjsnd635c2ee140a',
//       'X-RapidAPI-Host': 'google-search74.p.rapidapi.com'
//     }
//   };
//   try {
//     const response = await axios.request(options);
//     results.value = response.data
//     console.log(response)

//   } catch (error) {
//     console.log("Error")
//   }
// }
</script>

<template>
  <!-- <p>google</p> -->
  <!-- <button @click="searchGoogle">search</button> -->
  <!-- <p>{{ results }}</p> -->
  <span>You searched for {{ response.search_term }}</span>
  <!-- <div class="flex flex-row gap-2">
    <span v-for="r in related_keywords" :key="r.position">{{ r }}</span>
  </div> -->
 
  <KnowledgePanel :knowledge_panel="knowledge_panel"/>
  <GoogleResults :results="results" />
  
</template>
# JSearch
## What is it?
A full stack search engine for movies and Google search. Consumes OMDb API and a random rate limited RapidAPI.

Works with the [FastAPI server in this repo](https://github.com/lostmypillow/jsearch). API hosted on my own RPi 3B+, automatically switches to backup API hosted on Render.com in case RPi is down.

Features dark/light mode switch.


[**Demo website**](https://lostmypillow.github.io/jsearch-vue)
[**API Documentation**](https://jsearch.lostmypillow.duckdns.org/docs)

[**Backup API Docs (Render.com's free tier so might be slow to load!)**](https://jsearch.onrender.com/docs)

## How does it work?
1. User inputs a value in Vue frontend
2. Frontend navigates to search path and sends the data to the FastAPI server
3. FastAPI server sends back the results
4. Vue frontend displays the results
   
## Tech Stack
- **FastAPI** API endpoints
- **Nuxt(Vue)** frontend x **Vuetify** components

<template>
  <div id="app">
    <NavBar @search="search" />
    <MoviesList :movies="movies" />
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";
import MoviesList from "./components/MoviesList.vue";
export default {
  name: "App",
  components: { NavBar, MoviesList },
  data: () => ({
    movies: [],
  }),
  methods: {
    search(query) {
      const url = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.VUE_APP_API_KEY_3}&language=it-IT&query=${query}`;
      this.$axios
        .get(url)
        .then((res) => (this.movies = res.data.results))
        .catch((err) => console.error(err.status_message));
    },
  },
};
</script>

<style lang="scss">
@import "./assets/style/main.scss";
</style>

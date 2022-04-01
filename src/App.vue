<template>
  <div id="app" class="vw-100">
    <NavBar @search="search" />
    <div class="container-fluid px-3 main-container">
      <MoviesList :movies="movies" class="mb-3" />
      <TVShowList :TVShows="tvShows" />
    </div>
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";
import MoviesList from "./components/MoviesList.vue";
import TVShowList from "./components/TVShowList.vue";
export default {
  name: "App",
  components: { NavBar, MoviesList, TVShowList },
  data: () => ({
    movies: [],
    tvShows: [],
  }),
  methods: {
    search(query) {
      if (query === "") {
        this.movies = [];
        this.tvShows = [];
        return;
      }

      const urlMovie = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.VUE_APP_API_KEY_3}&language=it-IT&query=${query}`;
      const urlTV = `https://api.themoviedb.org/3/search/tv?api_key=${process.env.VUE_APP_API_KEY_3}&language=it-IT&query=${query}`;

      this.$axios
        .get(urlMovie)
        .then((res) => (this.movies = res.data.results))
        .catch((err) => console.error(err.status_message));

      this.$axios
        .get(urlTV)
        .then((res) => (this.tvShows = res.data.results))
        .catch((err) => console.error(err.status_message));
    },
  },
};
</script>

<style lang="scss">
@import "./assets/style/main.scss";
</style>

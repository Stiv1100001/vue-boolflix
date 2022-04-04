<template>
  <div id="app" class="vw-100">
    <NavBar @search="search" @genre="setGenre" :tvGenres="tvGenres" :movieGenres="movieGenres" />
    <div class="container-fluid px-3 main-container">
      <ItemList
        :items="movies"
        :tvGenres="tvGenres"
        :movieGenres="movieGenres"
        :selectedGenre="selectedGenre"
        type="movie"
        class="my-5"
      />
      <ItemList
        :items="tvShows"
        :tvGenres="tvGenres"
        :movieGenres="movieGenres"
        :selectedGenre="selectedGenre"
        type="show"
        class="mb-3"
      />
    </div>
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";
import ItemList from "./components/ItemList.vue";
export default {
  name: "App",
  components: { NavBar, ItemList },
  data: () => ({
    movies: [],
    tvShows: [],
    movieGenres: [],
    selectedGenre: "",
    tvGenres: [],
    currentTab: "Home",
  }),
  methods: {
    search(query) {
      let urlMovie;
      let urlTV;

      if (query === "") {
        this.movies = [];
        this.tvShows = [];
        urlMovie = `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.VUE_APP_API_KEY_3}&language=it-IT&sort_by=popularity.desc&include_video=false`;
        urlTV = `https://api.themoviedb.org/3/discover/tv?api_key=${process.env.VUE_APP_API_KEY_3}&language=it-IT&sort_by=popularity.desc&include_video=false`;
      } else {
        urlMovie = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.VUE_APP_API_KEY_3}&language=it-IT&query=${query}`;
        urlTV = `https://api.themoviedb.org/3/search/tv?api_key=${process.env.VUE_APP_API_KEY_3}&language=it-IT&query=${query}`;
      }

      this.$axios
        .get(urlMovie)
        .then((res) => (this.movies = res.data.results))
        .catch((err) => console.error(err.status_message));

      this.$axios
        .get(urlTV)
        .then((res) => (this.tvShows = res.data.results))
        .catch((err) => console.error(err.status_message));
    },

    setGenre(e) {
      this.selectedGenre = e;
    },
  },

  created() {
    const urlMovie = `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.VUE_APP_API_KEY_3}&language=it-IT&sort_by=popularity.desc&include_video=false`;
    const urlShow = `https://api.themoviedb.org/3/discover/tv?api_key=${process.env.VUE_APP_API_KEY_3}&language=it-IT&sort_by=popularity.desc&include_video=false`;

    this.$axios
      .get(urlMovie)
      .then((res) => (this.movies = res.data.results))
      .catch((err) => console.error(err.status_message));
    this.$axios
      .get(urlShow)
      .then((res) => (this.tvShows = res.data.results))
      .catch((err) => console.error(err.status_message));

    this.$axios
      .get(
        `https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.VUE_APP_API_KEY_3}&language=it-IT`
      )
      .then((res) => (this.movieGenres = res.data.genres));

    this.$axios
      .get(
        `https://api.themoviedb.org/3/genre/tv/list?api_key=${process.env.VUE_APP_API_KEY_3}&language=it-IT`
      )
      .then((res) => (this.tvGenres = res.data.genres));
  },
};
</script>

<style lang="scss">
@import "./assets/style/main.scss";
</style>

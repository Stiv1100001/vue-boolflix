<template>
  <div id="app" class="vw-100">
    <NavBar @search="search" @changeTab="changeTab" />
    <div class="container-fluid px-3 main-container">
      <ItemList
        v-if="currentTab === 'Home' || currentTab === 'Film'"
        :items="movies"
        type="movie"
        class="my-5"
      />
      <ItemList :items="tvShows" type="show" class="mb-3" />
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
    currentTab: "Home",
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

    changeTab(tab) {
      this.changeTab = tab;
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
  },
};
</script>

<style lang="scss">
@import "./assets/style/main.scss";
</style>

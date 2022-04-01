<template>
  <div class="container">
    <h1 class="text-white">Movies</h1>
    <div class="row g-1">
      <div class="col-6 col-md-4 col-lg-2" v-for="(movie, index) in movies" :key="index">
        <PosterCard :info="movie" type="movie" />
      </div>
    </div>
  </div>
</template>

<script>
import PosterCard from "./PosterCard.vue";
export default {
  name: "MoviesList",
  props: {
    movies: Array,
  },
  methods: {
    getFlag(lang) {
      let url = "https://flagcdn.com/16x12/";
      if (lang === "en") url += "gb.png";
      else if (lang === "ja") url += "jp.png";
      else url += lang + ".png";
      return url;
    },
  },
  components: { PosterCard },
};
</script>

<style lang="scss" scoped></style>

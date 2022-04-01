<template>
  <div class="container">
    <h1 class="text-white">TV Shows</h1>
    <div class="row g-3">
      <div class="col-6 col-md-4 col-lg-2" v-for="(show, index) in TVShows" :key="index">
        <PosterCard
          :poster="show.poster_path"
          :title="show.name"
          :rate="setRate(show.vote_average)"
        />
      </div>
    </div>
  </div>
</template>

<script>
import PosterCard from "./PosterCard.vue";
export default {
  name: "TVShowList",
  components: { PosterCard },
  props: {
    TVShows: Array,
  },
  methods: {
    getFlag(lang) {
      let url = "https://flagcdn.com/16x12/";
      if (lang === "en") url += "gb.png";
      else if (lang === "ja") url += "jp.png";
      else url += lang + ".png";
      return url;
    },
    setRate(rate) {
      return Math.ceil(rate / 2);
    },
  },
};
</script>

<style lang="scss" scoped></style>

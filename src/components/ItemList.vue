<template>
  <div class="container">
    <h1 class="text-white display-1 fw-bold">{{ type === "show" ? "Serie TV" : "Film" }}</h1>
    <div class="row g-1">
      <div class="col-6 col-md-4 col-lg-2" v-for="item in filteredItems" :key="item.id">
        <PosterCard :info="item" :type="type" :genres="type === 'movie' ? movieGenres : tvGenres" />
      </div>
    </div>
  </div>
</template>

<script>
import PosterCard from "./PosterCard.vue";
export default {
  name: "ItemList",
  components: { PosterCard },
  props: {
    items: Array,
    type: String,
    movieGenres: Array,
    tvGenres: Array,
    selectedGenre: Number,
  },

  data: () => ({}),
  methods: {
    getFlag(lang) {
      let url = "https://flagcdn.com/16x12/";
      if (lang === "en") url += "gb.png";
      else if (lang === "ja") url += "jp.png";
      else url += lang + ".png";
      return url;
    },
  },

  computed: {
    filteredItems() {
      if (this.selectedGenre === "-1") return this.items;
      else {
        return this.items.filter((item) => {
          if (item.genre_ids.includes(this.selectedGenre)) return true;
        });
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>

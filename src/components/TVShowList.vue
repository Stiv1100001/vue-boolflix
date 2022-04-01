<template>
  <div class="container">
    <h1 class="text-white">TV Shows</h1>
    <ul>
      <li class="text-white" v-for="(show, index) in TVShows" :key="index">
        <span>{{ show.name }} | {{ show.name }} | {{ show.vote_average }} | </span>
        <img :src="getFlag(show.original_language)" :alt="show.original_language" />
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "TVShowList",
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
  },
};
</script>

<style lang="scss" scoped></style>

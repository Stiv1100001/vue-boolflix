<template>
  <div class="position-relative">
    <img :src="getPoster(poster)" :alt="title" class="img-fluid rounded rounded-3" />
    <div class="stars position-absolute w-100 p-1">
      <ul class="d-flex justify-content-between text-white p-0 m-0">
        <li class="list-unstyled" v-for="fullStar in rate" :key="fullStar">
          <font-awesome-icon icon="fa-solid fa-star" />
        </li>
        <li class="list-unstyled" v-for="fullStar in 5 - rate" :key="fullStar">
          <font-awesome-icon icon="fa-regular fa-star" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import "@fortawesome/vue-fontawesome";
export default {
  name: "PosterCard",
  props: {
    poster: String,
    title: String,
    rate: Number,
  },

  methods: {
    getPoster(path) {
      return `https://image.tmdb.org/t/p/w342/${path}`;
    },
  },
};
</script>

<style lang="scss" scoped>
.stars {
  bottom: 0;
  left: 0;
  mix-blend-mode: difference;
}
</style>

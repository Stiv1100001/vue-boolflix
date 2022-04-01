<template>
  <div class="container">
    <ul>
      <li class="text-white" v-for="(movie, index) in movies" :key="index">
        {{ movie.title }} | {{ movie.original_title }} | {{ movie.original_language }} |
        {{ movie.vote_average }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "MoviesList",
  props: {
    movies: Array,
  },
};
</script>

<style lang="scss" scoped></style>

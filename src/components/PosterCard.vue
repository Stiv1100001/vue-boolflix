<template>
  <div id="poster" class="position-relative">
    <img
      :src="getPoster(info.poster_path)"
      :alt="info.original_name"
      class="img-fluid rounded rounded-3"
    />

    <div class="info position-absolute top-0 py-3 px-2 w-100 h-100 rounded rounded-3 text-white">
      <p class="m-0 title">{{ info.title || info.name }}</p>
      <p class="m-0 subtitle">{{ info.original_title || info.Original_name }}</p>
      <p class="m-0 actors">Cast: {{ credits }}</p>
      <p class="m-0 genre" v-if="getGenres().length > 0">Generi: {{ getGenres() }}</p>
      <p class="m-0 rates">
        <span v-for="x in getRate(info.vote_average)" :key="x">
          <font-awesome-icon icon="fa-solid fa-star" />
        </span>
        <span v-for="x in 5 - getRate(info.vote_average)" :key="x">
          <font-awesome-icon icon="fa-regular fa-star" />
        </span>
      </p>
      <p class="overview">{{ info.overview }}</p>
    </div>
  </div>
</template>

<script>
import "@fortawesome/vue-fontawesome";
export default {
  name: "PosterCard",
  props: {
    info: Object,
    type: { type: String, required: true },
    genres: Array,
  },

  data: () => ({ credits: {} }),

  methods: {
    getPoster(path) {
      return `https://image.tmdb.org/t/p/w342/${path}`;
    },

    getRate(rate) {
      return Math.ceil(rate / 2);
    },

    getGenres() {
      return this.genres
        .filter((genre) => {
          if (this.info.genre_ids.includes(genre.id)) return true;
          return false;
        })
        .map((genre) => genre.name)
        .join(", ");
    },
  },

  created() {
    if (this.type === "movie") {
      const url = `https://api.themoviedb.org/3/movie/${this.info.id}/credits?api_key=${process.env.VUE_APP_API_KEY_3}&language=it-IT`;

      this.$axios.get(url).then((res) => {
        const cast = res.data.cast.slice(0, 5).map((cast) => cast.name);
        this.credits = cast.join(", ");
      });
    } else if (this.type === "show") {
      const url = `https://api.themoviedb.org/3/tv/${this.info.id}/credits?api_key=${process.env.VUE_APP_API_KEY_3}&language=it-IT`;

      this.$axios.get(url).then((res) => {
        const cast = res.data.cast.slice(0, 5).map((cast) => cast.name);
        this.credits = cast.join(", ");
      });
    }
  },
};
</script>

<style lang="scss" scoped>
#poster {
  transition: all 0.3s;

  &:hover {
    transform: scale(1.5);
    z-index: 3;

    & .info {
      display: block;
    }
  }

  .info {
    background-color: rgba(0, 0, 0, 0.603);
    display: none;
    overflow: hidden;

    .title {
      font-size: 0.9rem;
    }

    .subtitle,
    .rates,
    .actors,
    .genre {
      font-size: 0.7rem;
    }

    .overview {
      font-size: 0.6rem;
      text-overflow: ellipsis;
    }
  }
}
</style>

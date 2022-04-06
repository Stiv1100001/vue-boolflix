<template>
  <header class="vw-100 d-flex justify-content-between align-items-center p-2">
    <div class="d-flex align-items-center">
      <h1 class="title fw-bold">Boolfix</h1>
      <nav class="d-flex ms-3">
        <a
          href="#"
          v-for="(link, i) in links"
          :key="i"
          class="me-3"
          :class="{ active: link.active }"
          @click="changeActive(i)"
          >{{ link.text }}</a
        >
      </nav>
    </div>
    <div class="d-flex align-items-center text-white">
      <select
        v-model="selectedGenre"
        class="form-select me-3"
        @change="$emit('genre', selectedGenre)"
      >
        <option selected :value="-1">Tutti</option>
        <option v-for="genre in allGenres" :key="genre.id" :value="genre.id">
          {{ genre.name }}
        </option>
      </select>
      <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
      <input
        v-model="searchQuery"
        placeholder="Cerca Film & Serie TV"
        type="text"
        class="search-input"
        @keyup="search"
      />
    </div>
  </header>
</template>

<script>
export default {
  name: "NavBar",
  props: {
    tvGenres: Array,
    movieGenres: Array,
  },
  data: () => ({
    searchQuery: "",
    selectedGenre: "",
    links: [
      {
        text: "Home",
        active: true,
      },
      {
        text: "Serie TV",
        active: false,
      },
      {
        text: "Film",
        active: false,
      },
      {
        text: "Originali",
        active: false,
      },
      {
        text: "Aggiunti di recente",
        active: false,
      },
      {
        text: "La mia lista",
        active: false,
      },
    ],
    currentTab: "Home",
    searching: false,
  }),
  methods: {
    changeActive(i) {
      this.links.forEach((link, index) => {
        if (index === i) {
          link.active = true;
          this.currentTab = link.text;
        } else link.active = false;
      });

      this.$emit("changeTab", this.currentTab);
    },

    search() {
      if (!this.searching) {
        this.searching = true;

        setTimeout(() => {
          this.$emit("search", this.searchQuery);
          this.searching = false;
        }, 1000);
      }
    },
  },
  computed: {
    allGenres() {
      let allGenres = this.movieGenres.concat(this.tvGenres);

      const uniqueIds = [];

      return allGenres.filter((genre) => {
        if (!uniqueIds.includes(genre.id)) {
          uniqueIds.push(genre.id);
          return true;
        }
      });
    },
  },
};
</script>

<style lang="scss" scoped>
header {
  background-color: black;

  .title {
    color: red;
  }

  nav {
    font-weight: bold;

    a {
      color: gray;
      text-decoration: none;

      &.active {
        color: white;
      }
    }
  }

  .form-select {
    background-color: black;
    color: white;
    border: 0;
    border-bottom: 1px solid white;
    border-radius: 0;

    &:focus {
      box-shadow: none;
    }
  }

  .search-input {
    background-color: black;
    border: 0;
    border-bottom: 1px solid white;
    margin-right: 2rem;

    color: white;

    &::placeholder {
      color: white;
    }

    &:focus {
      outline: none;
    }
  }
}
</style>

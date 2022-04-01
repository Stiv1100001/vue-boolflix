<template>
  <header class="vw-100 d-flex justify-content-between align-items-center p-2">
    <h1 class="title">Boolflix</h1>
    <div class="w-25">
      <input
        v-model="searchQuery"
        placeholder="Cerca Film & Serie TV"
        type="text"
        class="form-control"
        @keyup="$emit('search', searchQuery)"
      />
    </div>
  </header>
</template>

<script>
export default {
  name: "NavBar",
  data: () => ({
    searchQuery: "",
  }),
};
</script>

<style lang="scss" scoped>
header {
  background-color: black;

  .title {
    color: red;
  }
}
</style>

<template>
    <div>
      <h2>{{ gameName }}</h2>
      <p>{{ gameDesc }}</p>
      <button @click="toggleFavorite">{{ isFavorite ? 'Unfavorite' : 'Favorite' }}</button>
    </div>
  </template>
  
  <script>
  export default {
    props: ['gameName', 'gameDesc', 'isFavorite'],
    methods: {
      toggleFavorite() {
        this.$emit('toggle-favorite', this.gameName);
      }
    }
  };
  </script>
 
  <style scoped>
  img {
    height: 1.5em;
    float: right;
  }
  </style>
  
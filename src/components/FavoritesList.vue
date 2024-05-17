<template>
  <div class="favorites-list">
    <h2>Favorit Game</h2>
    <ul>
      <li v-for="game in favoriteGames" :key="game.name" class="favorite-game">
        {{ game.name }} - {{ game.desc }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ['favoriteGames']
};
</script>

<style scoped>
.favorites-list {
  margin-top: 20px;
  padding: 10px;
}

.favorites-list h2 {
  font-size: 1.2em;
  margin-bottom: 10px;
}

.favorites-list ul {
  list-style-type: none;
  padding: 0;
}

.favorite-game {
  color: #171a21;
  background-color: aliceblue;
  padding: 10px;
  border-radius: 5px;
  margin-bottom: 5px;
}
</style>

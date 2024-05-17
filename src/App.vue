<template>
  <div id="wrapper">
    <h1 class="title">Wishlist Pembelian Game</h1>
    <div class="wishlist-container">
      <GameWishlist
        v-for="game in gameWishlist"
        :key="game.name"
        :game-name="game.name"
        :game-desc="game.desc"
        :is-favorite="game.favorite" 
        @toggle-favorite="toggleFavorite"
        />
    </div>
    <FavoritesList :favorite-games="favoriteGames" />
  </div>
</template>

<script>
import GameWishlist from './components/GameWishlist.vue';
import FavoritesList from './components/FavoritesList.vue';

export default {
  components: {
    GameWishlist,
    FavoritesList
  },
  data() {
    return {
      gameWishlist: [
        { name: 'The Witcher 3', desc: 'An open-world RPG set in a fantasy universe', favorite: false },
        { name: 'Cyberpunk 2077', desc: 'A sci-fi RPG set in a dystopian future', favorite: false },
        { name: 'Minecraft', desc: 'A sandbox game with endless possibilities', favorite: true },
        { name: 'Team Fortress 2', desc: 'A team-based shooting game with some of the unique classes skills', favorite: true }
      ]
    };
  },
  computed: {
    favoriteGames() {
      return this.gameWishlist.filter(game => game.favorite);
    }
  },
  methods: {
    toggleFavorite(gameName) {
      const game = this.gameWishlist.find(g => g.name === gameName);
      if (game) {
        game.favorite = !game.favorite;
        if (game.favorite) {
          alert('Telah ditambahkan ke favorite!');
        } else {
          alert('Telah dihapus dari favorite!');
        }
      }
    }
  },
}
</script>

<style>
  body {
    background-color: #1b2838;
  }
  #wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: white;
    padding: 20px;
  }
  .title {
    text-align: center;
    margin: 20px 0;
  } 
  .wishlist-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  .wishlist-container > div {
    border: dashed black 1px;
    margin: 10px;
    padding: 10px;
    background-color: #2a475e;
    width: 200px;
    box-sizing: border-box;
  }
</style>

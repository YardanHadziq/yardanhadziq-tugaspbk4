import { createApp } from 'vue'
import App from './App.vue'
import GameWishlist from './components/GameWishlist.vue'

const app = createApp(App)

app.mount('#app')

app.component('GameWishlist', GameWishlist)

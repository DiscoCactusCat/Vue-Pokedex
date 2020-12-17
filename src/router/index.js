import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import PokemonList from '../views/PokemonList.vue';
import Contact from '../views/Contact.vue';
import Shop from '../views/Shop.vue';
import Error404 from '../views/Error404.vue';

const router = createRouter({
    history: createWebHistory(),
    routes:[
        {
            path: "/",
            name: "Home",
            component: Home
        },
        {
            path: "/pokemon",
            name: "Pokemon List",
            component: PokemonList,
            alias: "/pokemons"
        },

        {
            path: "/contact",
            name: "Contact",
            component: Contact
        },
        {
            path: "/shop",
            name: "Shop",
            component: Shop
        },
        
        {
            path: "/:catchAll(.*)",
            name: "404",
            component: Error404
        }
    ]
});

export default router;
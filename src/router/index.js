import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import PokemonList from '../views/PokemonList.vue';
import Contact from '../views/Contact.vue';
import Shop from '../views/Shop.vue';
import Error404 from '../views/Error404.vue';

// var domain = "/caroline/pokedex/";
var domain = "/";
const router = createRouter({
    history: createWebHistory(),
    routes:[
        {
            path: domain,
            name: "Home",
            component: Home
        },
        {
            path: domain+"pokemon",
            name: "Pokemon List",
            component: PokemonList,
            alias: "/pokemons"
        },

        {
            path: domain+"contact",
            name: "Contact",
            component: Contact
        },
        {
            path: domain+"shop",
            name: "Shop",
            component: Shop
        },
        
        {
            path: domain+":catchAll(.*)",
            name: "404",
            component: Error404
        }
    ]
});

export default router;
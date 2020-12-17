<template>     
     <nav id="poke-menu">
        <router-link  id="blue-button-left" :to="{name: 'Home'}"><i class="fas fa-home"></i></router-link>
        <router-link  id="green-button-left" :to="{name: 'Pokemon List'}"><i class="fas fa-search"></i></router-link>
        <router-link id="orange-button-left"  to="/contact"><i class="fas fa-phone-alt"></i></router-link>
        <router-link id="purple-button-left"  to="/shop"><i class="fas fa-store"></i></router-link>
     </nav>
</template>

<script>
export default {
    name: "Nav",
    data(){
        return{

        }
    }
}
</script>

<style scoped lang="scss" src="./navbar.scss">
    
</style>
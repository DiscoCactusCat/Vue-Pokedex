<template>
  <div class="container-fluid">
    <div id="pokedex">
      <div id="left">
        <div id="top-left"></div>
        <div id="top-left1">
          <div id="glass-button">
            <div id="reflect"></div>
          </div>
          <!-- lights -->
          <LightIndicators />
        </div>
        <div id="top-left2"></div>

        <div id="border-screen">
          <div id="button-top1"></div>
          <div id="button-top2"></div>
          <div id="button-bottom"></div>
          <p class="selectDisable">&equiv;&equiv;</p>
        </div>
        <!-- Rooter view -->
        <div id="screen">
          <router-view
            :pokemonSprite="this.pokemonSpriteToDisplay"
            :pokemonId="this.pokemonId"
            @pokemonInfo="receivedPokemonInfo($event)"
          />
          <img class="selectDisable" src="" alt="" />
        </div>
        <div id="triangle"></div>
        <Nav></Nav>

        <div id="square-button-left"></div>
        <!-- cross -->
        <Cross @crossPush="receivedCrossPush($event)" />
      </div>
      <div id="middle">
        <div id="hinge1"></div>
        <div id="hinge2"></div>
        <div id="hinge3"></div>
      </div>
      <div id="right">
        <div id="info-screen">
          <Header :pokemonId="this.pokemonId">
            <template v-slot:info v-if="this.$route.name === 'Pokemon List'">
              <p> #{{this.pokemonId}} <span class="name">{{this.pokemonName}}</span></p>
            </template>
          </Header>
          
        </div>
        <Keyboard @pokemonId="receivedId($event)" />

        <!-- <div id="left-cross-button">
      <div id="leftT"></div>
    </div>
    <div id="right-cross-button">
      <div id="rightT"></div>
    </div>
    <div id="cross-button">
      <div id="left-red-cross"></div>
    </div>
    <div id="square-button-right1"></div>
    <div id="square-button-right2"></div> -->
      </div>
      <div id="top-right1"></div>
      <div id="top-right2"></div>
    </div>
  </div>

  <Footer />
</template>

<script>
import Nav from "./components/nav/Nav.vue";
import Header from "./components/header/Header.vue";
import Footer from "./components/footer/Footer.vue";
import Keyboard from "./components/keyboard/Keyboard.vue";
import Cross from "./components/cross/Cross.vue";
import LightIndicators from "./components/lightindicators/LightIndicators.vue";

export default {
  name: "App",
  components: {
    Nav,
    Header,
    Footer,
    LightIndicators,
    Keyboard,
    Cross,
  },
  data() {
    return {
      pokemonId: 1,
      pokemonSpriteToDisplay: 0,
      crossPushed: "",
      pokemonName: "",
    };
  },
  methods: {
    receivedId(id) {
      console.log("App received Pokemon id : " + id);
      this.pokemonId = id;
    },
    receivedCrossPush(direction) {
      this.crossPushed = direction;
    },
    receivedPokemonInfo(infos){
      this.pokemonName = infos;
      console.log(this.pokemonName);
    }
  },
  watch: {
    crossPushed: function(direction) {
      switch (direction) {
        case "bottom":
          this.pokemonId--;
          break;
        case "top":
          this.pokemonId++;
          break;
        case "left":
          if(this.pokemonSpriteToDisplay > 0) this.pokemonSpriteToDisplay--;
          break;
        case "right":
           if(this.pokemonSpriteToDisplay < 3) this.pokemonSpriteToDisplay++;
          break;
      }
      this.crossPushed = "";
      
    },
  },
  
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Lato");

@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css");
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

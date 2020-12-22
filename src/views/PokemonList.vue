<template>
  <img :src="sprite" alt="" />
</template>
<script>
import axios from "axios";
export default {
  name: "PokemonList",
  props: {
    pokemonId: {
      type: Number,
    },
    pokemonSprite: {
      type: Number,
    },
  },
  data() {
    return {
      name: "",
      sprite: "",
    };
  },
  methods: {
    getPokemonInfo() {
      axios
        .get("https://pokeapi.co/api/v2/pokemon/" + this.pokemonId)
        .then((resp) => {
          this.name = resp.data.name;
          var sprite = this.getSpriteKey(this.pokemonSprite);

          this.sprite = resp.data.sprites[sprite];
          this.emitInfo();
        })
        .catch((error) => {
          console.log("Error retrieving pokemon data from API \n" + error);
        });
    },
    getSpriteKey(spriteId) {
      switch (spriteId) {
        case 0:
          return "front_default";
        case 1:
          return "back_default";
        case 2:
          return "front_shiny";
        case 3:
          return "back_shiny";
      }
    },
    emitInfo() {
      this.$emit("pokemonInfo", this.name);
    },
  },
  mounted() {
    this.getPokemonInfo();
  },
  watch: {
    pokemonId: function() {
      this.getPokemonInfo();
    },
    pokemonSprite: function() {
      this.getPokemonInfo();
    },
  },
};
</script>
<style lang="scss" src="./pokemonlist.scss" scoped></style>

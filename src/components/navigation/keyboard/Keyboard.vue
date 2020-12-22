<template>
   <div id="keyboard">
      <div class="key" @click="addKey(0)">0</div>
      <div class="key" @click="addKey(1)">1</div>
      <div class="key" @click="addKey(2)">2</div>
      <div class="key" @click="addKey(3)">3</div>
      <div class="key" @click="addKey(4)">4</div>
      <div class="key" @click="addKey(5)">5</div>
      <div class="key" @click="addKey(6)">6</div>
      <div class="key" @click="addKey(7)">7</div>
      <div class="key" @click="addKey(8)">8</div>
      <div class="key" @click="addKey(9)">9</div>
      
    </div>
    
      <div id="leaf-button-right"></div>
      <div id="yellow-button-right"></div>
      <div div id="green-button-right" @click="emitId()"></div>
      <div id="orange-button-right" @click="deleteId()"></div>
</template>

<script>
export default {
  name: "Keyboard",
  data() {
    return {
      pokemonId: "",
    };
  },
  methods:{
    addKey(number){
      this.pokemonId += number;
    },
    deleteId(){
      this.pokemonId = "0";
      this.emitId();
    },
    emitId(){
      this.$emit("pokemonId", parseInt(this.pokemonId));
      this.pokemonId = "";
    }
  }
 

};
</script>

<style scoped lang="scss" src="./keyboard.scss"></style>

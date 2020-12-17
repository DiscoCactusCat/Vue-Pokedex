<template>
  <header>

      <h1>{{currentRouteName}}</h1>
      
      <slot name="info"></slot>
      
    
  </header>
</template>

<script>
export default {
  name: "Header",
  props: {
    pokemonId: {
      type: Number,
    }
  },
  data() {
    return {
        
    };
  },
  computed: {
    currentRouteName() {
      return this.$route.name;
    },
  },

};
</script>

<style scoped lang="scss" src="./header.scss"></style>

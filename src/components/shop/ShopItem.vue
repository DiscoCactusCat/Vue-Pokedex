<template>
  <transition name="item">
    <li v-show="!soldOut" @click="addToCart()" :class="{ sold: soldOut }">
      <img :src="item.sprite" alt="" />
      <span>{{ item.name }}</span>
      <span v-if="!soldOut">{{ item.price }}$</span>
      <span v-else>Sold !</span>
    </li>
  </transition>
</template>

<script>
export default {
  name: "ShopItem",
  props: {
    item: {
      type: Object,
    },
  },
  data() {
    return {
      soldOut: false,
    };
  },
  methods: {
    addToCart() {
      this.$emit("addedToCart", this.item);
      this.soldOut = true;
    },
  },
};
</script>

<style scoped lang="scss" src="./shopitem.scss"></style>

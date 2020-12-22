<template>
  <p class="title">Today's offers</p>
  <ul id="shop-list">
    <ShopItem
      v-for="(item, key) in todayItems"
      :key="key"
      :item="item"
      @addedToCart="itemAddedToCart($event)"
    ></ShopItem>
    <p v-if="allSold">
      You shopped everything ! <br />
      Come back later !
    </p>
  </ul>
</template>
<script>
import axios from "axios";
import ShopItem from "../components/shop/ShopItem";
export default {
  name: "Shop",
  data() {
    return {
      itemCountInAPI: 800,
      todayItems: [],
      itemsInShop: 7,
    };
  },
  components: {
    ShopItem,
  },
  methods: {
    getItem(id) {
      axios
        .get("https://pokeapi.co/api/v2/item/" + id)
        .then((resp) => {
          let item = {
            name: resp.data.name,
            price: resp.data.cost,
            sprite: resp.data.sprites.default,
          };
          this.todayItems.push(item);
        })
        .catch((error) => {
          console.log("Error retrieving item data from API \n" + error);
        });
    },
    getItemsCountInAPI() {
      axios
        .get("https://pokeapi.co/api/v2/item/")
        .then((resp) => {
          return resp.data.count;
        })
        .catch((error) => {
          console.log("Error retrieving item count from API \n" + error);
        });
    },
    generateRandomItemID() {
      return Math.floor(Math.random() * Math.floor(this.itemCountInAPI));
    },
    generateItemsList() {
      for (let i = 0; i < 7; i++) {
        this.getItem(this.generateRandomItemID());
      }
    },
    itemAddedToCart(item) {
      this.itemsInShop--;
      console.log("Added to cart" + item);
    },
  },
  computed: {
    allSold() {
      return this.itemsInShop == 0;
    },
  },
  mounted() {
    this.getItemsCountInAPI();
    this.generateItemsList();
  },
};
</script>
<style lang="scss" scoped>
p {
  text-transform: uppercase;
  margin: 0;

  &.title {
    font-weight: 700;
  }
}
#shop-list {
  padding: 0;
}
</style>

<template>
  <div>
    <router-link to="/cart">Shopping Cart</router-link>
    <router-view
        :shoppingCart="shoppingCart"
        :products="products"
        @addToCart="addToCart"
    ></router-view>
  </div>
</template>

<script>
import products from "./pages/products";

export default {
  name: 'App',
  data() {
    return {
      shoppingCartIds: [],
      products,
    }
  },
  computed: {
    shoppingCart() {
      return this.shoppingCartIds.map(id => {
        return this.products.find(p => p.id === id);
      });
    }
  },
  methods: {
    addToCart(id) {
      this.shoppingCartIds.push(id);
      console.log(this.shoppingCartIds);
    }
  }
}
</script>

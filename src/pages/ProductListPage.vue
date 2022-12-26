<template>
  <div>
    <h2>Available Items:</h2>
    <div v-for="product in products" :key="product.id">
      <router-link :to="`/product/${product.id}`">
        <h3>{{ product.name }}</h3>
      </router-link>
      <h3>{{ product.price }}</h3>
      <button>Add to Cart</button>
    </div>
  </div>
</template>

<script>
import products from "./products";
export default {
  name: 'ProductListPage',
  data() {
    return {
      products,
    }
  },
};
</script>

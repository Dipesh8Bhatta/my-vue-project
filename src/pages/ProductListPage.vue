<template>
  <div>
    <h2>Available Items:</h2>
    <div v-for="product in products" :key="product.id">
      <router-link :to="`/product/${product.id}`">
        <h3>{{ product.name }}</h3>
      </router-link>
      <h3>{{ product.price }}</h3>
      <button @click="addToCart(product.id)">Add to Cart</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductListPage',
  props: ['products'],
  emits: ['addToCart'],
  methods: {
    addToCart(id) {
      this.$emit('addToCart', id);
    }
  }
};
</script>

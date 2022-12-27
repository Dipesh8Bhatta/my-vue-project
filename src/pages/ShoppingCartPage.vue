<template>
  <div>
    <h1>Shopping Cart Page</h1>
    <div v-for="product in shoppingCart" :key="product.id">
      <router-link :to="`/product/${product.id}`">
        <h3>{{ product.name }}</h3>
      </router-link>
      <h3>{{ product.price }}</h3>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ShoppingCartPage',
  props: ['shoppingCart'],
};
</script>

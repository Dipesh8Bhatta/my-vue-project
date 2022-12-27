<template>
  <div v-if="productFound">
    <h1>{{ product.name }}</h1>
    <h3>{{ product.price }}</h3>
    <p>{{ product.description }}</p>
    <button>Add to Cart</button>
  </div>
  <div v-else-if="!productFound">
    <p>Product not found mate!</p>
  </div>
</template>

<script>
import products from "./products";

export default {
  name: 'ProductDetailPage',
  computed: {
    product() {
      return products.find(prod => prod.id === this.$route.params.id)
    },
    productFound() {
      return !!this.product;
    }
  }
};
</script>

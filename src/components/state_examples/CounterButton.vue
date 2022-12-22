<template>
  <div>
    <p>You have clicked the button {{ numberOfClicks }} times</p>
    <button @click="increment">Click me</button>
  </div>
</template>

<script>
export default {
  name: 'CounterButton',
  data() {
    return {
      numberOfClicks: 0,
    }
  },
  methods: {
    increment() {
      this.numberOfClicks += 1;
    },
  }
}
</script>

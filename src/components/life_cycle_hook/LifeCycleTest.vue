<template>
  <div>
    <h1>This is a lifecycle test {{ numberOfDamnClicks }}</h1>
  </div>
</template>

<script>
export default {
  name: 'LifeCycleTest',
  props: ['numberOfDamnClicks'],
  beforeCreate() {
    console.log('In beforeCreate');
  },
  created() {
    console.log('In created');
  },
  beforeMount(){
    console.log('In beforeMounted');
  },
  mounted() {
    console.log('In mounted');
  },
  beforeUpdate() {
    console.log('In beforeUpdate');
  },
  updated() {
    console.log('In updated');
  },
  beforeDestroy() {
    console.log('In beforeDestroy');
  },
  destroyed() {
    console.log('In destroyed');
  }
}
</script>

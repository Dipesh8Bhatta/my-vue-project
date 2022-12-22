<template>
  <div id="app">
    <Congratulations :numberOfDamnClicks="numberOfDamnClicks"></Congratulations>
    <CounterButton> </CounterButton>
    <NoDataCounterButton @incrementGoal="incrementGoal" :numberOfDamnClicks="numberOfDamnClicks"> </NoDataCounterButton>
    <PeopleList> </PeopleList>
  </div>
</template>

<script>
import PeopleList from './components/PeopleList.vue'
import CounterButton from "./components/state_examples/CounterButton.vue";
import NoDataCounterButton from "./components/state_examples/NoDataCounterButton";
import Congratulations from "./components/state_examples/Congratulations";

export default {
  name: 'App',
  components: {
    Congratulations,
    PeopleList,
    CounterButton,
    NoDataCounterButton,
  },
  data() {
    return {
      numberOfDamnClicks: 0,
    }
  },
  methods: {
    incrementGoal() {
      this.numberOfDamnClicks += 1;
    },
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

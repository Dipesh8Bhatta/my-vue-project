<template>
  <div id="app">
    <Congratulations :numberOfDamnClicks="numberOfDamnClicks"></Congratulations>
    <CounterButton> </CounterButton>
    <NoDataCounterButton @incrementGoal="incrementGoal" :numberOfDamnClicks="numberOfDamnClicks"> </NoDataCounterButton>
    <PeopleList> </PeopleList>
    <LifeCycleTest v-if="numberOfDamnClicks < 10" :numberOfDamnClicks="numberOfDamnClicks"></LifeCycleTest>
    <Timer @tick="onTick" name="Timer 1" :delay=3000></Timer>
    <Timer @tick="onTick" name="Timer 2" :delay=10000></Timer>
  </div>
</template>

<script>
import PeopleList from './components/PeopleList.vue'
import CounterButton from "./components/state_examples/CounterButton.vue";
import NoDataCounterButton from "./components/state_examples/NoDataCounterButton";
import Congratulations from "./components/state_examples/Congratulations";
import LifeCycleTest from "./components/life_cycle_hook/LifeCycleTest";
import Timer from "./components/click_and_events/Timer";

export default {
  name: 'App',
  components: {
    Congratulations,
    PeopleList,
    CounterButton,
    NoDataCounterButton,
    LifeCycleTest,
    Timer,
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
    onTick(name) {
      console.log(name + ': Tick!')
    }
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

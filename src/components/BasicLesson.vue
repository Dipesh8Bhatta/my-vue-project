<template>
  <div>
    <Congratulations :numberOfDamnClicks="numberOfDamnClicks"></Congratulations>
    <CounterButton> </CounterButton>
    <NoDataCounterButton @incrementGoal="incrementGoal" :numberOfDamnClicks="numberOfDamnClicks"> </NoDataCounterButton>
    <PeopleList> </PeopleList>
    <LifeCycleTest v-if="numberOfDamnClicks < 10" :numberOfDamnClicks="numberOfDamnClicks"></LifeCycleTest>
    <Timer @tick="onTick" name="Timer 1" :delay=3000></Timer>
    <Timer @tick="onTick" name="Timer 2" :delay=10000></Timer>
    <FlashingMessage message="Keep on flashing" :delay=2000></FlashingMessage>
  </div>
</template>

<script>
import PeopleList from "./PeopleList";
import CounterButton from "./state_examples/CounterButton";
import NoDataCounterButton from "./state_examples/NoDataCounterButton";
import Congratulations from "./state_examples/Congratulations";
import LifeCycleTest from "./life_cycle_hook/LifeCycleTest";
import Timer from "./click_and_events/Timer";
import FlashingMessage from "./conditional_rendering/FlashingMessage";

export default {
  name: 'BasicLesson',
  components: {
    Congratulations,
    PeopleList,
    CounterButton,
    NoDataCounterButton,
    LifeCycleTest,
    Timer,
    FlashingMessage,
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

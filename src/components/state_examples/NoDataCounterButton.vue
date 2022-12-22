<template>
  <div>
    <p>You have clicked the button that aimed to throw some message {{ numberOfDamnClicks }} times</p>
    <button @click="$emit('incrementGoal')">Click Damnit</button>
  </div>
</template>

<script>
export default {
  name: 'NoDataCounterButton',
  props: ['numberOfDamnClicks'],

}
</script>

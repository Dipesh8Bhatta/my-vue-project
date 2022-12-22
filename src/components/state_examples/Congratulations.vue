<template>
  <h1 v-if="numberOfDamnClicks >= 10">Congratlations! You've reached 10 clicks.</h1>
</template>

<script>
export default {
  name: 'Congratulations',
  props: ['numberOfDamnClicks']
}
</script>

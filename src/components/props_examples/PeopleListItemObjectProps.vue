<template>
  <div>
    <h3>{{ person.name }}</h3>
    <p>Age: {{ person.age }} years</p>
    <p>Hair Color: {{ person.hairColor }}</p>
  </div>
</template>

<script>
export default {
  name: 'PeopleListItemProps',
  props: ['person'],
}
</script>

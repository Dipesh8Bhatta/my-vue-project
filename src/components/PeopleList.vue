<template>
  <div>
    <h1>People List</h1>
    <div>
      <h3>{{ name }}</h3>
      <p>Age: {{ age }} years</p>
      <p>Hair Color: {{ hairColor }}</p>
    </div>
    <PeopleListItem> </PeopleListItem>
    <PeopleListItemProps name="Roronoa Zoro" age="105" hairColor="green"> </PeopleListItemProps>
    <PeopleListItemObjectProps :person="{ name: 'Vinsomke Sanji', age: 103, hairColor: 'yellow' }"> </PeopleListItemObjectProps>
    <PeopleListItemObjectProps :person="person1"> </PeopleListItemObjectProps>
    <PeopleListItemObjectProps :person="person2"> </PeopleListItemObjectProps>
    <PeopleListItemObjectProps v-for="person in people" :key="person.name" :person="person"></PeopleListItemObjectProps>
  </div>
</template>

<script>
import PeopleListItem from "./PeopleListItem.vue";
import PeopleListItemProps from "./props_examples/PeopleListItemProps.vue";
import PeopleListItemObjectProps from "./props_examples/PeopleListItemObjectProps.vue";
export default {
  name: 'PeopleList',
  components: {
    PeopleListItem,
    PeopleListItemProps,
    PeopleListItemObjectProps,
  },
  data() {
    return {
      name: 'Monkey D Lufy',
      age: 100,
      hairColor: 'brown',
      person1: { name: "Naami Swaa", age: 95, hairColor: "orange" },
      person2: { name: "Robin Chwa", age: 104, hairColor: "black" },
      people: [
        { name: "Tony Tony Chopper", age: 89, hairColor: "brown" },
        { name: "Soul King Brook", age: 150, hairColor: "black" },
        { name: "Super Franky", age: 125, hairColor: "blue" },
      ],
    }
  }
}
</script>

<style>
h1 {
  color: green;
}
h3 {
  color: orangered;
}
</style>

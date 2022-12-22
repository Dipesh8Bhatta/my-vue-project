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
    }
  }
}
</script>

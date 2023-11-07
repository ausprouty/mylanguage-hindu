<template>
  <q-page class="bg-white" padding>
    <p>In order to make any real progress in our spiritual life we know we need a guru -- someone to show us the way, to challenge, correct, guide and help us.</p>
    <p> We would like to invite you to consider having Lord Jesus as your Guru</p>
      <p> Lord Jesus:</p>
      <ul>
        <li> Never told a lie</li>
        <li>Etc, etc.</li>
      </ul>
      <q-list bordered class ="list">
        <q-item to="/mountain" clickable v-ripple class="bg-positive">
          <q-item-section>Mountain of God</q-item-section>
          <q-item-section thumbnail>
            <img src="https://cdn.quasar.dev/img/mountains.jpg">
          </q-item-section>
      </q-item>
      <q-item to="/birth" clickable v-ripple class="bg-red-3">
          <q-item-section>Birth of the Guru</q-item-section>
          <q-item-section thumbnail>
            <img src="https://cdn.quasar.dev/img/mountains.jpg">
          </q-item-section>
      </q-item>
      <q-item to="/life" clickable v-ripple class="orange">
          <q-item-section>His Life</q-item-section>
          <q-item-section thumbnail>
            <img src="https://cdn.quasar.dev/img/mountains.jpg">
          </q-item-section>
      </q-item>
      <q-item to="/teachings" clickable v-ripple class="bg-lime-8">
          <q-item-section>His Teachings</q-item-section>
          <q-item-section thumbnail>
            <img src="https://cdn.quasar.dev/img/mountains.jpg">
          </q-item-section>
      </q-item>
      <q-item to="/book" clickable v-ripple  class="bg-blue-grey-5">
          <q-item-section>His Holy Book</q-item-section>
          <q-item-section thumbnail>
            <img src="https://cdn.quasar.dev/img/mountains.jpg">
          </q-item-section>
      </q-item>
      <q-item to="/following" clickable v-ripple class="orange">
          <q-item-section>Following Him</q-item-section>
          <q-item-section thumbnail>
            <img src="https://cdn.quasar.dev/img/mountains.jpg">
          </q-item-section>
      </q-item>
      <q-item to="/questions" clickable v-ripple class="bg-purple-3">
          <q-item-section>Ask His Followers</q-item-section>
          <q-item-section thumbnail>
            <img src="https://cdn.quasar.dev/img/mountains.jpg">
          </q-item-section>
      </q-item>

      </q-list>

  </q-page>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "IndexPage",
  data() {
    return {
      selected: null,
    };
  },
});
</script>
<style scoped>
.orange {
  background-color: orange;
}
.list{
  width:100%;
  max-width: 600px;
}
.q-item__section{
  font-size: 1.5em;
  font-weight: bold;
  color: white;
}
</style>

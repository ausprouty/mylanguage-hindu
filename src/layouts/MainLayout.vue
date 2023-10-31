<template >
  <q-layout view="lHh lpr lFf" class="max-width">
    <q-header elevated>
      <q-toolbar class="toolbar-width">
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title>
         Finding a Guru worth Following
        </q-toolbar-title>
        <q-space />
        <q-btn
          flat
          dense
          round
          icon="language"
          aria-label="Button on top right"
          @click="toggleRightDrawer"
        />
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
    >
      <q-list>
        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>
    <q-drawer
      v-model="rightDrawerOpen"
      side="right"
      show-if-above
      bordered
    >
      <p>This is my drawer</p>
    </q-drawer>

    <q-page-container class="set_size">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from 'vue'
import EssentialLink from 'components/EssentialLink.vue'

const linksList = [
  {
    title: 'Index',
    icon: 'settings',
    link: '/'
  },
  {
    title: 'The Mountain of God',
    icon: 'settings',
    link: '/mountain'
  },
  {
    title: 'Birth of the Guru',
    icon: 'school',
    link: '/birth'
  },
  {
    title: 'His Life',
    icon: 'school',
    link: '/life'
  },
  {
    title: 'His Teachings',
    icon: 'school',
    link: '/teachings'
  },
  {
    title: 'His Community',
    icon: 'school',
    link: '/community'
  },
  {
    title: 'Following Him',
    icon: 'school',
    link: '/following'
  },
  {
    title: 'Ask His followers',
    icon: 'school',
    link: '/questions'
  },

]

export default defineComponent({
  name: 'MainLayout',

  components: {
    EssentialLink
  },

  setup () {
    const leftDrawerOpen = ref(false)
    const rightDrawerOpen = ref(false)

    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      rightDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      },
      toggleRightDrawer () {
        rightDrawerOpen.value = !rightDrawerOpen.value
      }
    }
  }
})
</script>
<style>


.q-header{
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
}
.toolbar-width,
.max-width{
  width: 100%;
  max-width: 600px;
  margin: 0 auto;

}
</style>

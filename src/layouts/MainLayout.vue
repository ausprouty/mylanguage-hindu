<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
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
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
    >
      <q-list>
        <q-item-label
          header
        >
         Setup Tasks
        </q-item-label>

        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
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
    link: '/home'
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

    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
})
</script>

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
          to="/"
        />

        <q-toolbar-title>
         Finding a Guru worth Following
        </q-toolbar-title>
        <q-space />
        <ShareLink />
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
      v-model="rightDrawerOpen"
      side="right"
      show-if-above
      bordered
    >
    <HinduLanguages />
    </q-drawer>

    <q-page-container class="set_size">
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script>
import { defineComponent, ref } from 'vue'
import HinduLanguages from 'components/HinduLanguages.vue'
import ShareLink from 'components/ShareLink.vue'



export default defineComponent({
  name: 'MainLayout',

  components: {
    HinduLanguages,
    ShareLink
  },

  setup () {

    const rightDrawerOpen = ref(false)

    return {

      rightDrawerOpen,
      toggleRightDrawer () {
        rightDrawerOpen.value = !rightDrawerOpen.value
      },
    }
  }
})
</script>
<style>
h2{
  font-size: 2rem;
}
.q-toolbar__title{
  font-size: 16px;
}

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

<template>
  <q-layout view="lHh lpr lFf" class="max-width">
    <q-header elevated>
      <q-toolbar class="toolbar-width">
        <q-btn flat dense round icon="menu" aria-label="Menu" to="/index" />

        <q-toolbar-title>
          <router-link to="/index" exact class="toolbar-title">
            Finding a Guru
          </router-link>
        </q-toolbar-title>

        <ShareLink />

        <q-btn
          flat
          dense
          round
          icon="language"
          aria-label="Language selector"
          @click="toggleRightDrawer"
        />
      </q-toolbar>
    </q-header>

    <q-drawer v-model="rightDrawerOpen" side="right" show-if-above bordered>
      <HinduLanguages />
    </q-drawer>

    <q-page-container class="set_size">
      <router-view />
      <footer class="footer">Copyright 2023 Power to Change</footer>
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";
import HinduLanguages from "components/HinduLanguages.vue";
import ShareLink from "components/ShareLink.vue";
import { getBrowserLanguageHL } from "src/i18n/detectLanguage";
import { loadLocaleMessages } from "src/i18n/index";
import { i18n } from "boot/i18n";
import { onMounted } from "vue";

export default defineComponent({
  name: "MainLayout",
  components: {
    HinduLanguages,
    ShareLink,
  },
  setup() {
    const defaultLang = getBrowserLanguageHL();

    async function ensureInitialLanguage() {
      if (!i18n.global.availableLocales.includes(defaultLang)) {
        const messages = await loadLocaleMessages(defaultLang);
        i18n.global.setLocaleMessage(defaultLang, messages);
      }

      i18n.global.locale.value = defaultLang;
    }

    onMounted(() => {
      ensureInitialLanguage()
        .then(() => {
          console.log("Language set to:", i18n.global.locale.value);
        })
        .catch((error) => {
          console.error("Error setting initial language:", error);
        });
    });

    const rightDrawerOpen = ref(false);

    function toggleRightDrawer() {
      rightDrawerOpen.value = !rightDrawerOpen.value;
    }

    return {
      rightDrawerOpen,
      toggleRightDrawer,
    };
  },
  onMounted() {
    ensureInitialLanguage()
      .then(() => {
        console.log("Language set to:", i18n.global.locale.value);
      })
      .catch((error) => {
        console.error("Error setting initial language:", error);
      });
  },
});
</script>

<style>
.toolbar-title {
  color: white;
  text-decoration: none;
  font-size: 1.5em;
}

.footer {
  background-color: darkgrey;
  color: white;
  padding: 10px;
  text-align: center;
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
}

.q-toolbar__title {
  font-size: 16px;
}

.q-header {
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
}

.toolbar-width,
.max-width {
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
}
</style>

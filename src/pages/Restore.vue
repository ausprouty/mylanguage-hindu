<template>
  <q-page padding>
    <!-- content -->
  </q-page>
</template>

<script>
import { useLanguageStore } from "stores/LanguageStore";
export default {
 name: 'RestorePage',
 created(){
    var previousPage = localStorage.getItem('currentPath', '/index');
    this.$router.push(previousPage );
  },
}
</script>

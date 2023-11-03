<template>
  <div v-html = "this.questions" >
  </div>
</template>
<script>
import { api } from "boot/axios";
import { useLanguageStore } from "stores/LanguageStore";
export default {
  name: 'JVideoPlayer',

  data() {
    return {
      questions: '',
    };
  },
  setup () {
    const languageStore = useLanguageStore();
    return {
      languageStore
    }
  },
 created(){
    const firstLanguage = this.languageStore.getFirstLanguageCodeSelected
    var url = 'api/jvideo/questions/'+ firstLanguage
    console.log (url)
    api.get(url).then((response) => {
      this.questions = response.data;
    });
  }
}
</script>

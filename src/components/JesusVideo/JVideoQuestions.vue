<template>
  <div v-html = "this.questions" >
  </div>
</template>
<script>
import { api } from "boot/axios";
export default {
  name: 'JVideoPlayer',

  data() {
    return {
      questions: '',
      languageCodeHL: 'frn00'
    };
  },
 created(){
    var url = 'api/jvideo/questions/'+ this.languageCodeHL
    console.log (url)
    api.get(url).then((response) => {
      this.questions = response.data;
      console.log (this.questions)
    });
  }
}
</script>

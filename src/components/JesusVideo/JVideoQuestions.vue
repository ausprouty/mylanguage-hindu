<template>
  <div v-html = "this.questions" >
  </div>
</template>
<script>
import { api } from "boot/axios";
export default {
  name: 'JVideoQuestions',
  props:{
    languageCodeHL: String,
  },
  data() {
    return {
      questions : '',
    };
  },
 created(){
    var url = 'api/jvideo/questions/'+ this.languageCodeHL
    console.log (url)
    api.get(url).then((response) => {
      console.log (response)
      this.questions = response.data;
    });
  }
}
</script>

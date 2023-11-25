<template>
<meta property="og:title" content="MyFriends App">
<meta property="og:description" content="Bible Discovery outlines to help you and your friends discover God's story together.">
<meta property="og:image" content="https://myfriends.network/sites/myfriends/images/standard/MyFriends-App-Facebook.jpg">
<meta property="og:url" content="https://myfriends.network/content/{{ webPage }}">
<meta property="og:type" content="website">


<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:site" content="@PtCAus">
<meta name="twitter:title" content="Power to Change Australia">
<meta name="twitter:description" content="Bible Discovery outlines to help you and your friends discover God's story together.">
<meta name="twitter:image" content="https://myfriends.network/sites/myfriends/images/standard/MyFriends-App-Twitter.jpg">


<q-btn @click="shareUrl" icon="share" label="Share"></q-btn>
</template>

<script>

import { useLanguageStore } from "stores/LanguageStore";
export default {
  name: 'ShareLink',
  setup() {
    const languageStore = useLanguageStore();
    return {
      languageStore,
    };
  },
  methods:{
    shareUrl() {
      var subject = 'Here is the link'
      var message = 'Here is the link'
      let url = window.location.href
      var page = this.getLastSegment(url)
      console.log (page)
      url += this.getLessonNumber(page);
      url += this.getLanguage(page);

      // we need to reformat this because it may be a local address on an SD card
      // may return  file:///C:/xampp73/htdocs/MC2French/folder/content/M2/fra/tc/index.html
      // and you want https://app.mc2.online/content/M2/fra/tc/index.html
      if ('share' in navigator) {
        navigator.share({
          title: subject,
          text: message,
          url: url,
        })
      } else {
        var body = message + ': ' + url
        // Here we use the WhatsApp API as fallback; remember to encode your text for URI
        //location.href = 'mailto:?body=' + encodeURIComponent(text + ' - ') + location.href + ';subject=' + encodeURIComponent(title);
        location.href = getMailtoUrl('', subject, body)
      }

    },
    getLastSegment(url) {
      const parsedUrl = new URL(url);
      const pathSegments = parsedUrl.pathname.split('/').filter(segment => segment !== ''); // Remove empty segments
      return pathSegments[pathSegments.length - 1];
    },
    getLessonNumber(page){
        switch (page){
          case 'leadership':
          return '/'+ this.languageStore.getLeadershipLesson
          case 'life':
            return '/'+ this.languageStore.getJVideoSegment ;
          case 'teachings':
            return '/'+ this.languageStore.getHisTeachingLesson
          case 'book':
          return '/'+ this.languageStore.getBookLesson
          default:
            return ''
        }
    },
    getLanguage(page){
        switch (page){
          case 'leadership':
          case 'life':
          case 'teachings':
          case 'book':
            return '/' + this.languageStore.getLanguageSelected
        default:
            return ''
        }
      }
  }

}
</script>
<style scoped>
.q-item__section{
  color:black;
}
</style>

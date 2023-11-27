import { defineStore } from "pinia";

export const useLanguageStore = defineStore("languageStore", {
  state: () => ({
    languages: [],
    languageSelected: 'eng00',
    hisTeachingLesson: 1,
    leadershipLesson: 1,
    bookLesson: 1,
    jVideoSegment: '6101-0-0',
    followingHimSegment: 1,
    previousPage: '/index'
  }),
  getters: {

    getLanguageSelected: (state) => {
      var selected = localStorage.getItem("languageSelected", state.languageSelected);
      if (selected == null){
        selected = 'eng00'
        localStorage.setItem("languageSelected", selected)
      }
      return selected
    },
    getBookLesson: (state) => {
      var selected = localStorage.getItem("bookLesson", state.bookLesson);
      if (selected == null){
        selected = 1
        localStorage.setItem("bookLesson", selected)
      }
      return selected
    },
    getHisTeachingLesson: (state) => {
      var selected = localStorage.getItem("hisTeachingLesson", state.hisTeachingLesson);
      if (selected == null){
        selected = 1
        localStorage.setItem("hisTeachingLesson", selected)
      }
      return selected
    },
    getLeadershipLesson: (state) => {
      var selected = localStorage.getItem("leadershipLesson", state.leadershipLesson);
      if (selected == null){
        selected = 1
        localStorage.setItem("leadershipLesson", selected)
      }
      return selected
    },
    getJVideoSegment: (state) => {
      var selected = localStorage.getItem("jVideoSegment", state.jVideoSegment);
      if (selected == null){
        selected = '6101-0-0'
        localStorage.setItem("leadershipLesson", selected)
      }
      return selected
    },
    getFollowingHimSegment: (state) => {
      var selected = localStorage.getItem("followingHimSegment", state.followingHimSegment);
      if (selected == null || selected == 'undefined'){
        selected = '1-0-0'
        localStorage.setItem("followingHimSegment", selected)
      }
      return selected
    },
    getPreviousPage: (state) => {
      var selected = localStorage.getItem("previousPage", '/index');
      return selected
    },
  },

  actions :{
    updateLanguages(newValue) {
      var languages = JSON.stringify(newValue);
      localStorage.setItem('languages', languages);
      this.languages = languages;
    },
    updateLanguageSelected(newValue) {
      localStorage.setItem('languageSelected', newValue);
      this.languageSelected = newValue;
    },
    updateHisTeachingLesson(newValue) {
      localStorage.setItem('hisTeachingLesson', newValue);
      this.hisTeachingLesson = newValue;
    },
    updateLeadershipLesson(newValue) {
      localStorage.setItem('leadershipLesson', newValue);
      this.leadershipLesson = newValue;
    },
    updateBookLesson(newValue) {
      localStorage.setItem('bookLesson', newValue);
      this.bookLesson = newValue;
    },
    updateJVideoSegment(newValue) {
      console.log(newValue)
      localStorage.setItem('jVideoSegment', newValue);
      this.jVideoSegment = newValue;
    },
    updateFollowingHimSegment(newValue) {
      localStorage.setItem('followingHimSegment', newValue);
      this.followingHimSegment = newValue;
    },
    updatePreviousPage(newValue) {
      localStorage.set("previousPage", newValue);

    },
  }
});




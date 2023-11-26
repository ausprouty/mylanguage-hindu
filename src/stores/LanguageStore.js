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
  }),
  getters: {

    getLanguageSelected: (state) => {
      var selected = localStorage.getItem("languageSelected", state.languageSelected);
      if (typeof selected == 'undefined'){
        selected = 'eng00'
      }
      return selected
    },
    getBookLesson: (state) => {
      var selected = localStorage.getItem("bookLesson", state.bookLesson);
      if (typeof selected == 'undefined'){
        selected = 1
      }
      return selected
    },
    getHisTeachingLesson: (state) => {
      var selected = localStorage.getItem("hisTeachingLesson", state.hisTeachingLesson);
      if (typeof selected == 'undefined'){
        selected = 1
      }
      return selected
    },
    getLeadershipLesson: (state) => {
      var selected = localStorage.getItem("leadershipLesson", state.leadershipLesson);
      if (typeof selected == 'undefined'){
        selected = 1
      }
      return selected
    },
    getJVideoSegment: (state) => {
      var selected = localStorage.getItem("jVideoSegment", state.jVideoSegment);
      if (typeof selected == 'undefined'){
        selected = '6101-0-0'
      }
      return selected
    },
    getFollowingHimSegment: (state) => {
      var selected = localStorage.getItem("followingHimSegment", state.followingHimSegment);
      if (typeof selected == 'undefined'){
        selected = 1
      }
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
  }
});




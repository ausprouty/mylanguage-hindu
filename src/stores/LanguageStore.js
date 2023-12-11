import { defineStore } from "pinia";

export const useLanguageStore = defineStore("languageStore", {
  state: () => ({

    hisTeachingLesson: null,
    leadershipLesson: null,
    bookLesson: null,
    followingHimSegment: null,
    jVideoSegment: null,
    jVideoSegments:{
      languageCodeHL: null,
      languageCodeJF: null,
      segments:[]
    },
    languages: [],
    languageSelected: {
      languageCodeHL: null,
      languageCodeJF: null
    },
    previousPage: '/index'
  }),
  getters: {
    getBookLesson: (state) => {
      if (state.bookLesson == null){
        state.bookLesson = localStorage.getItem("bookLesson", 1)
      }
      return state.bookLesson
    },
    getFollowingHimSegment: (state) => {
      if (state.followingHimSegment == null){
        state.followingHimSegment = localStorage.getItem("followingHimSegment", 1)
      }
      return state.followingHimSegment
    },
    getHisTeachingLesson: (state) => {
      if (state.hisTeachingLesson == null){
        state.hisTeachingLesson = localStorage.getItem("hisTeachingLesson", 1)
      }
      return state.hisTeachingLesson
    },
    getLeadershipLesson: (state) => {
      if (state.leadershipLesson == null){
        state.leadershipLesson = localStorage.getItem("leadershipLesson", 1)
      }
      return state.leadershipLesson
    },
    getJVideoSegment: (state) => {
      if (state.jVideoSegment == null){
        state.jVideoSegment = localStorage.getItem("jVideoSegment", 1)
      }
      return state.jVideoSegment
    },
    getJVideoSegments: (state) => {
      if (state.jVideoSegments == null){
        var local = JSON.parse(localStorage.getItem("jVideoSegments"));
        if (local){
          state.jVideoSegments = JSON.parse(local)
        }
        else{
          state.jVideoSegments = null;
        }
      }
      return state.jVideoSegments
    },
    getLanguageSelected: (state) => {
      if (!state.languageSelected){
        state.languageSelected = JSON.parse(localStorage.getItem("languageSelected"));
      }
      return   state.languageSelected
    },

    getPreviousPage: (state) => {
      var selected = localStorage.getItem("previousPage", '/index');
      return selected
    },
  },

  actions :{
    updateBookLesson(newValue) {
      localStorage.setItem('bookLesson', newValue);
      this.bookLesson = newValue;
    },
    updateFollowingHimSegment(newValue) {
      localStorage.setItem('followingHimSegment', newValue);
      this.followingHimSegment = newValue;
    },
    updateHisTeachingLesson(newValue) {
      localStorage.setItem('hisTeachingLesson', newValue);
      this.hisTeachingLesson = newValue;
    },
    updateJVideoSegment(newValue) {
      console.log(newValue)
      localStorage.setItem('jVideoSegment', newValue);
      this.jVideoSegment = newValue;
    },
    updateJVideoSegments(languageCodeHL, languageCodeJF, segments){
      this.jVideoSegments.languageCodeHL = languageCodeHL;
      this.jVideoSegments.languageCodeJF = languageCodeJF;
      this.jVideoSegments.segments = segments;
      localStorage.setItem('jVideoSegments', JSON.stringify(this.jVideSegments));
    },
    updateLanguages(newValue) {
      var languages = JSON.stringify(newValue);
      localStorage.setItem('languages', languages);
      this.languages = languages;
    },
    updateLanguageSelected(newValue) {
      var languageSelected = JSON.stringify(newValue);
      localStorage.setItem('languageSelected', languageSelected);
      this.languageSelected = newValue;
    },
    updateLeadershipLesson(newValue) {
      localStorage.setItem('leadershipLesson', newValue);
      this.leadershipLesson = newValue;
    },



    updatePreviousPage(newValue) {
      localStorage.set("previousPage", newValue);

    },
  }
});




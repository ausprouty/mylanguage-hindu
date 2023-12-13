import { defineStore } from "pinia";

export const useLanguageStore = defineStore("languageStore", {
  state: () => ({

    hisTeachingLesson: null,
    leadershipLesson: null,
    bookLesson: null,
    followingHimSegment: null,
    jVideoSegmentId: null,
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

    getJVideoSegmentId: (state) => {
      if (state.jVideoSegment == null){
        state.jVideoSegment = localStorage.getItem("jVideoSegmentId", 1)
      }
      return state.jVideoSegment
    },
    getJVideoSegments: (state) => {
      if (state.jVideoSegments == null){
        var local = JSON.parse(localStorage.getItem("jVideoSegments"));
        if (local  && local != 'undefined'){
          state.jVideoSegments = JSON.parse(local)
        }
        else{
          state.jVideoSegments = null;
        }
      }
      return state.jVideoSegments
    },
    getLanguageCodeJFSelected: (state) => {
      if (!state.languageSelected){
       var local = localStorage.getItem("languageSelected");
       if (local  && local != 'undefined'){
        state.languageSelected = JSON.parse(local)
       }
       else{
        state.languageSelected = {}
       }
      }
      return state.languageSelected.languageCodeJF
    },
    getLanguageCodeHLSelected: (state) => {
      if (!state.languageSelected){
       var local = localStorage.getItem("languageSelected");
       if (local  && local != 'undefined'){
        state.languageSelected = JSON.parse(local)
       }
       else{
        state.languageSelected = {}
       }
      }
      return state.languageSelected.languageCodeHL
    },
    getLanguageSelected: (state) => {
      if (state.languageSelected.languageCodeHL == null){
        var local = localStorage.getItem("languageSelected")
        if (local && local != 'undefined'){
          state.languageSelected = JSON.parse(local);
        }
        else{
          state.languageSelected.languageCodeHL = 'eng00'
          state.languageSelected.languageCodeJF = 529
        }
      }
      return state.languageSelected
    },
    getLeadershipLesson: (state) => {
      if (state.leadershipLesson == null){
        state.leadershipLesson = localStorage.getItem("leadershipLesson", 1)
      }
      return state.leadershipLesson
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
    updateJVideoSegmentId(newValue) {
      console.log(newValue)
      localStorage.setItem('jVideoSegmentId', newValue);
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
    updateLanguageSelected(languageCodeHL, languageCodeJF){
      this.languageSelected.languageCodeHL = languageCodeHL;
      this.languageSelected.languageCodeJF = languageCodeJF;
      localStorage.setItem('languageSelected', JSON.stringify(this.languageSelected));
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




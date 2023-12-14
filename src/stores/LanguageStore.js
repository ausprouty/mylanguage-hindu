import { defineStore } from "pinia";

export const useLanguageStore = defineStore("languageStore", {
  state: () => ({

    hisTeachingLesson: null,
    leadershipLesson: null,
    bookLesson: null,
    followingHimSegment: null,
    jVideoSegmentId: 1,
    jVideoSegments:{
      languageCodeHL: 'eng00',
      languageCodeJF: '529',
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
      if (state.bookLesson ?? true){
        state.bookLesson = localStorage.getItem("bookLesson", 1)
      }
      return state.bookLesson
    },
    getFollowingHimSegment: (state) => {
      if (state.followingHimSegment ?? true){
        state.followingHimSegment = localStorage.getItem("followingHimSegment", 1)
      }
      return state.followingHimSegment
    },
    getHisTeachingLesson: (state) => {
      if (state.hisTeachingLesson ?? true){
        state.hisTeachingLesson = localStorage.getItem("hisTeachingLesson", 1)
      }
      return state.hisTeachingLesson
    },

    getJVideoSegmentId: (state) => {
      if (state.jVideoSegmentId ?? true){
        console.log ('getting jvideoSegmentId from local storage')
        state.jVideoSegmentId = localStorage.getItem("jVideoSegmentId", 1)
      }
      return state.jVideoSegmentId
    },
    getJVideoSegments: (state) => {
      if (state.jVideoSegments ?? true){
        var local = localStorage.getItem("jVideoSegments");
        if (local  && local != 'undefined'){
          state.jVideoSegments = JSON.parse(local)
        }
        else{
          state.jVideoSegments = null;
        }
      }
      return state.jVideoSegments
    },
    getLanguageCodeHLSelected: (state) => {
      if (state.languageSelected ?? true){
       var local = localStorage.getItem("languageSelected");
       if (local  && local != 'undefined'){
        state.languageSelected = JSON.parse(local)
       }
       else{
        state.languageSelected.languageCodeHL = 'eng00',
        state.languageSelected.languageCodeJF = 529
       }
      }
      return state.languageSelected.languageCodeHL
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
      if (state.leadershipLesson ?? true){
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
      if (newValue != null){
        localStorage.setItem('jVideoSegmentId', newValue);
        this.jVideoSegmentId = newValue;
      }
    },
    updateJVideoSegments(languageCodeHL, languageCodeJF, segments){
      var jVideoSegments ={ }
      jVideoSegments.languageCodeHL = languageCodeHL
      jVideoSegments.languageCodeJF = languageCodeJF
      jVideoSegments.segments = segments;
      localStorage.setItem('jVideoSegments', JSON.stringify(jVideoSegments));
      this.jVideoSegments = jVideoSegments
    },
    updateLanguages(newValue) {
      var languages = JSON.stringify(newValue);
      localStorage.setItem('languages', languages);
      this.languages = languages;
    },
    updateLanguageCodeHLSelected(languageCodeHL){
      this.languageSelected.languageCodeHL = languageCodeHL;
      localStorage.setItem('languageSelected', JSON.stringify(this.languageSelected));
    },
    updateLanguageCodeJFSelected(languageCodeJF){
      this.languageSelected.languageCodeJF = languageCodeJF;
      localStorage.setItem('languageSelected', JSON.stringify(this.languageSelected));
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




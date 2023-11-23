import { defineStore } from "pinia";



export const useLanguageStore = defineStore("languageStore", {
  state: () => ({
    languages: [],
    languageSelected: 'eng00',
    hisTeachingLesson: 1,
    leadershipLesson: 1,
    bookLesson: 1,
    jVideoSegment: 1,
    followingHimSegment: 1,
  }),
  getters: {
    getFirstLanguageCodeSelected: (state) => {
      return localStorage.getItem("languageSelected", state.languageSelected);
    },
    getLanguageSelected: (state) => {
      return localStorage.getItem("languageSelected", state.languageSelected);
    },
    getBookLesson: (state) => {
      return localStorage.getItem("bookLesson", state.bookLesson);
    },
    getHisTeachingLesson: (state) => {
      return localStorage.getItem("hisTeachingLesson", state.hisTeachingLesson);
    },
    getLeadershipLesson: (state) => {
      return localStorage.getItem("leadershipLesson", state.leadershipLesson);
    },
    getJVideoSegment: (state) => {
      return localStorage.getItem("jVideoSegment", state.jVideoSegment);
    },
    getFollowingHimSegment: (state) => {
      return localStorage.getItem("followingHimSegment", state.followingHimSegment);
    },
  },

  actions :{
    updateLanguages(newValue) {
      var languages = JSON.stringify(newValue);
      localStorage.setItem('languages', languages);
      this.llanguages = languages;
    },
    updateLanguageSelected(newValue) {
      localStorage.setItem('languageSelected' ,newValue);
      this.languageSelected = newValue;
    },
    updateHisTeachingLesson(newValue) {
      localStorage.setItem('hisTeachingLesson' ,newValue);
      this.hisTeachingLesson = newValue;
    },
    updateLeadershipLesson(newValue) {
      localStorage.setItem('leadershipLesson' ,newValue);
      this.leadershipLesson = newValue;
    },
    updateBookLesson(newValue) {
      localStorage.setItem('bookLesson' ,newValue);
      this.bookLesson = newValue;
    },
    updateJVideoSegment(newValue) {
      localStorage.setItem('jVideoSegment' ,newValue);
      this.jVideoSegment = newValue;
    },
    updateFollowingHimSegment(newValue) {
      localStorage.setItem('followingHimSegment' ,newValue);
      this.followingHimSegment = newValue;
    },
  }
});

export const updateStateAndLocalStorage = (state, key, newValue) => {
  state[key] = newValue;
  console.log ('updating '+ key + 'to ' + newValue);
  localStorage.setItem(key, newValue);
};


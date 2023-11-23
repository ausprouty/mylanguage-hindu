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
    }
  },
  actions: {
    updateLanguages(newValue) {
      this.languages = newValue;
      localStorage.setItem("languages", JSON.stringify(newValue));
    },
    updateLanguageSelected(newValue) {
      this.languageSelected = newValue;
      localStorage.setItem("languageSelected", newValue);
    },
    updateHisTeachingLesson(newValue) {
      this.hisTeachingLesson = newValue;
      localStorage.setItem("hisTeachingLesson", newValue);
    },
    updateLeadershipLesson(newValue) {
      this.leadershipLesson = newValue;
      localStorage.setItem("leadershipLesson", newValue);
    },
    updateBookLesson(newValue) {
      this.BookLesson = newValue;
      localStorage.setItem("bookLesson", newValue);
    },
    updateJVideoSegment(newValue) {
      this.jVideoSegment = newValue;
      localStorage.setItem("jVdeoSegment", newValue);
    },
    updateFollowingHimSegment(newValue) {
      this.followingHimSegmentt = newValue;
      localStorage.setItem("followingHimSegment", newValue);
    },

  },
}
);

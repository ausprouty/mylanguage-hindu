import { defineStore } from "pinia";

export const useLanguageStore = defineStore("languageStore", {
  state: () => ({
    languages: [],
    languageSelected: 'eng00',
    hisTeachingLesson: 1,
    bookLesson: 1,
    jVideoSegment: 1,
    followingHimSegment: 1,
  }),
  getters: {
    getFirstLanguageCodeSelected: (state) => {
      return state.languageSelected;
    },
    getLanguageSelected: (state) => {
      return state.languageSelected;
    },
    getBookLesson: (state) => {
      return state.bookLesson;
    },
    getHisTeachingLesson: (state) => {
      return state.hisTeachingLesson;
    },
    getJVideoSegment: (state) => {
      return state.jVideoSegment;
    },
    getFollowingHimSegment: (state) => {
      return state.followingHimSegment;
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

import { defineStore } from "pinia";

export const useLanguageStore = defineStore("LanguageStore", {
  state: () => ({
    languages: [],
    languagesSelected: JSON.parse(localStorage.getItem("languagesSelected")),
    hisTeachingLesson: null,
    communityLesson: null,
    leadershipLesson: null,
    jVideoSegment: null,
  }),
  getters: {
    getFirstLanguageCodeSelected: (state) => {
      return state.languagesSelected.length > 0
        ? state.languagesSelected[0]
        : 'eng00';
    },
    getLanguagesSelected: (state) => {
      return state.languagesSelected.length > 0
        ? state.languagesSelected
        : JSON.parse(localStorage.getItem("languagesSelected"));
    },
  },
  actions: {
    updateLanguages(newValue) {
      this.languages = newValue;
      localStorage.setItem("languages", JSON.stringify(newValue));
    },
    updateLanguagesSelected(newValue) {
      this.languagesSelected = newValue;
      localStorage.setItem("languagesSelected", JSON.stringify(newValue));
    },
    updateHisTeachingLesson(newValue){
      this.hisTeachingLesson = newValue;
      localStorage.setItem("hisTeachingLesson", newValue);
    },
    updateCommunityLesson(newValue) {
      this.communityLesson = newValue;
      localStorage.setItem("communityLesson", newValue);
    },
    updateLeadershipLesson(newValue) {
      this.leadershipLesson = newValue;
      localStorage.setItem("leadershipLesson", newValue);
    },
    updateJVideoSegment(newValue) {
      this.jVideoSegment = newValue;
      localStorage.setItem("jVdeoSegment", newValue);
    },
  },
});

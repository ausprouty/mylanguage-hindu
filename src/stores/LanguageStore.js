import { defineStore } from "pinia";

export const useLanguageStore = defineStore("LanguageStore", {
  state: () => ({
    languages: [],
    languagesSelected: [],
    principleLesson: null,
    communityLesson: null,
    leadershipLesson: null,
    jVideoSegment: null,
  }),
  getters: {
    getLanguages() {
      return this.languages;
    },
    getLanguagesSelected() {
      return this.languagesSelected;
    },

    getPrincipleLesson() {
      return this.principleLesson;
    },
    getCommunityLesson() {
      return this.communityLesson;
    },
    getLeadershipLesson() {
      return this.leadershipLesson;
    },
    getJVideoSegment() {
      return this.jVideoSegment;
    },
  },
  actions: {
    updateLanguages(newValue) {
      this.languages = newValue;
    },
    updateLanguagesSelected(newValue) {
      this.languagesSelected = newValue;
    },
    updatePrincipleLesson(newValue) {
      this.principleLesson = newValue;
    },
    updateCommunityLesson(newValue) {
      this.communityLesson = newValue;
    },
    updateLeadershipLesson(newValue) {
      this.leadershipLesson = newValue;
    },
    updateJVideoSegment(newValue) {
      this.jVideoSegment = newValue;
    },
  },
});

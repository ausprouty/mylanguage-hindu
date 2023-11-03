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

    getFirstLanguageCodeSelected: (state) => {
      return state.languagesSelected.length > 0 ? state.languagesSelected[0] : 'eng00';
    },
    
  },
  actions: {
    updateLanguages(newValue) {
      this.languages = newValue;
    },
    updateLanguagesSelected(newValue) {
      this.languagesSelected = newValue
    },
    updatePrincipleLesson(newValue) {
      this.principleLesson = newValue
    },
    updateCommunityLesson(newValue) {
      this.communityLesson = newValue
    },
    updateLeadershipLesson(newValue) {
      this.leadershipLesson = newValue
    },
    updateJVideoSegment(newValue) {
      this.jVideoSegment = newValue
    },
  },
});

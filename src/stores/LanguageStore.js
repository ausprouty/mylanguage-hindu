import { defineStore } from "pinia";

export const useLanguageStore = defineStore("LanguageStore", {
  state: () => ({
    languages: [],
    LanguageSelected: 'eng00',
    hisTeachingLesson: 1,
    communityLesson: 1,
    leadershipLesson: 1,
    jVideoSegment: 1,
  }),
  getters: {
    getFirstLanguageCodeSelected: (state) => {
      return state.LanguageSelected;
    },
    getLanguageSelected: (state) => {
      return state.LanguageSelected;
    }
  },
  actions: {
    updateLanguages(newValue) {
      this.languages = newValue;
      localStorage.setItem("languages", JSON.stringify(newValue));
    },
    updateLanguageSelected(newValue) {
      this.LanguageSelected = newValue;
      localStorage.setItem("LanguageSelected", newValue);
    },
    updateHisTeachingLesson(newValue) {
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
}
);

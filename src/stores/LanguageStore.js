import { defineStore } from "pinia";
import {
  getCommonContent,
  getLessonContent,
  getJesusVideoUrls,
} from "src/services/TranslationService";

export const useLanguageStore = defineStore("languageStore", {
  state: () => ({
    currentStudy: "dbs",
    currentUrl: null,
    commonContent: {}, // cache: language -> study
    lessonContent: {}, // cache: language -> study -> lesson
    videoUrls: {},     // cache: language -> study
    lessonNumber: {
      dbs: 1,
      lead: 1,
      life: 1,
      jvideo: 1,
    },
    maxLessonNumber: {
      dbs: 23,
      lead: 25,
      life: 23,
      jvideo: 61,
    },
    languages: [],
    languageSelected: {
      languageCodeHL: "eng00",
      languageCodeJF: 529,
      value: 3,
    },
    followingHimSegment: "1-0-0",
    jVideoSegments: {
      languageCodeHL: "eng00",
      languageCodeJF: "529",
      segments: [],
      currentId: 1,
    },
    previousPage: "/index",
  }),

  getters: {
    languageCodeHLSelected: (state) => state.languageSelected.languageCodeHL,
    languageCodeJFSelected: (state) => state.languageSelected.languageCodeJF,
    languageValue: (state) => state.languageSelected.value,
    currentLessonNumber: (state) => {
      const study = state.currentStudy;
      return state.lessonNumber[study] || 1;
    },
    maxLesson: (state) => (study) => {
      return state.maxLessonNumber[study] || 0;
    },
    isAtMaxLesson: (state) => (study) => {
      const current = state.lessonNumber[study] || 0;
      const max = state.maxLessonNumber[study] || 0;
      return current >= max;
    },
  },

  actions: {
    async loadCommonContent(language, study) {
      if (this.commonContent[language]?.[study]) {
        return this.commonContent[language][study];
      }
      const content = await getCommonContent(language, study);
      if (!this.commonContent[language]) {
        this.commonContent[language] = {};
      }
      this.commonContent[language][study] = content;
      return content;
    },

    async loadLessonContent(language, study, lesson) {
      if (!this.lessonContent[language]) {
        this.lessonContent[language] = {};
      }
      if (!this.lessonContent[language][study]) {
        this.lessonContent[language][study] = {};
      }
      if (this.lessonContent[language][study][lesson]) {
        return this.lessonContent[language][study][lesson];
      }
      try {
        const content = await getLessonContent(language, study, lesson);
        this.lessonContent[language][study][lesson] = content;
        return content;
      } catch (error) {
        console.error("Failed to fetch lesson content:", error);
        throw error;
      }
    },

    async loadVideoUrls(language, study) {
      if (this.videoUrls[language]?.[study]) {
        return this.videoUrls[language][study];
      }
      const content = await getJesusVideoUrls(language, study);
      if (!this.videoUrls[language]) {
        this.videoUrls[language] = {};
      }
      this.videoUrls[language][study] = content;
      return content;
    },

    setCurrentStudy(study) {
      this.currentStudy = study;
    },

    setCurrentUrl(url) {
      this.currentUrl = url;
    },

    setLessonNumber(study, lesson) {
      if (this.lessonNumber.hasOwnProperty(study)) {
        this.lessonNumber[study] = lesson;
      } else {
        console.warn(`Invalid study for setting lesson: ${study}`);
      }
    },

    updateFollowingHimSegment(newValue) {
      this.followingHimSegment = newValue;
    },

    updateJVideoSegments(languageCodeHL, languageCodeJF, segments, currentId = 1) {
      this.jVideoSegments = {
        languageCodeHL,
        languageCodeJF,
        segments,
        currentId,
      };
    },

    updateLanguages(newLanguages) {
      this.languages = newLanguages;
    },

    updateLanguageSelected(languageCodeHL, languageCodeJF, value = 3) {
      this.languageSelected = {
        languageCodeHL,
        languageCodeJF,
        value,
      };
    },

    updatePreviousPage(newPage) {
      this.previousPage = newPage;
    },
  },

  persist: {
    paths: [
      "currentStudy",
      "lessonNumber",
      "languageSelected",
      "followingHimSegment",
      "jVideoSegments",
      "previousPage",
      "languages",
    ],
  },
});

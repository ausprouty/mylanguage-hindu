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
    videoUrls: {}, // cache: language -> study
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
    lessonNumber: (state) => {
      const study = state.currentStudy;

      if (!state.lessonNumber.hasOwnProperty(study)) {
        console.warn(
          `lessonNumber: '${study}' not found. Initializing lesson to 1.`
        );
        state.lessonNumber[study] = 1;
      }

      let lesson = state.lessonNumber[study];

      // Auto-fix bad values
      if (
        lesson === null ||
        lesson === undefined ||
        isNaN(lesson) ||
        lesson < 1
      ) {
        console.warn(
          `lessonNumber: '${study}' had invalid lesson '${lesson}'. Resetting to 1.`
        );
        lesson = 1;
        state.lessonNumber[study] = 1;
      }

      return parseInt(lesson, 10);
    },

    maxLesson: (state) => {
      const study = state.currentStudy;

      if (!state.maxLessonNumber.hasOwnProperty(study)) {
        console.warn(
          `maxLesson: '${study}' not found. Initializing maxLesson to 1.`
        );
        state.maxLessonNumber[study] = 1;
      }

      let max = state.maxLessonNumber[study];

      // Auto-fix bad values
      if (max === null || max === undefined || isNaN(max) || max < 1) {
        console.warn(
          `maxLesson: '${study}' had invalid max '${max}'. Resetting to 1.`
        );
        max = 1;
        state.maxLessonNumber[study] = 1;
      }

      return max;
    },

    isAtMaxLesson: (state) => {
      const study = state.currentStudy;

      // Auto-initialize and fix invalid entries
      if (!state.lessonNumber.hasOwnProperty(study)) {
        console.warn(
          `isAtMaxLesson: '${study}' missing. Initializing lesson to 1.`
        );
        state.lessonNumber[study] = 1;
      }
      if (!state.maxLessonNumber.hasOwnProperty(study)) {
        console.warn(
          `isAtMaxLesson: '${study}' missing. Initializing maxLesson to 1.`
        );
        state.maxLessonNumber[study] = 1;
      }

      let current = parseInt(state.lessonNumber[study], 10);
      let max = parseInt(state.maxLessonNumber[study], 10);

      if (isNaN(current) || current < 1) {
        console.warn(
          `isAtMaxLesson: '${study}' current lesson invalid '${current}'. Resetting to 1.`
        );
        current = 1;
        state.lessonNumber[study] = 1;
      }
      if (isNaN(max) || max < 1) {
        console.warn(
          `isAtMaxLesson: '${study}' max lesson invalid '${max}'. Resetting to 1.`
        );
        max = 1;
        state.maxLessonNumber[study] = 1;
      }

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
      console.log(`setLessonNumber called with study=${study}, lesson=${lesson}`);

      // Validate study
      if (!this.lessonNumber.hasOwnProperty(study)) {
        console.warn(`setLessonNumber: Invalid study '${study}'. No changes made.`);
        return;
      }

      // Validate lesson
      const parsedLesson = parseInt(lesson, 10);
      if (isNaN(parsedLesson) || parsedLesson < 1) {
        console.warn(`setLessonNumber: Invalid lesson '${lesson}' for study '${study}'. Expected positive number. No changes made.`);
        return;
      }

      // Only now safe to set
      this.lessonNumber[study] = parsedLesson;
    },


    updateFollowingHimSegment(newValue) {
      if (typeof newValue !== 'string' || newValue.trim() === '') {
        console.warn(`updateFollowingHimSegment: Invalid newValue '${newValue}'. Expected non-empty string. No change made.`);
        return;
      }
      this.followingHimSegment = newValue;
    },

    updateJVideoSegments(
      languageCodeHL,
      languageCodeJF,
      segments,
      currentId = 1
    ) {
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

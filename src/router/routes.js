const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      
      {
        name: "RestorePage",
        path: "/restore",
        component: () => import("src/pages/RestorePage.vue"),
      },
      {
        name: "Index",
        path: "/index",
        component: () => import("pages/IndexPage.vue"),
      },
      {
        name: "MountainOfGod",
        path: "/mountain",
        component: () => import("pages/MountainOfGod.vue"),
      },
      {
        name: "Karma",
        path: "karma",
        component: () => import("src/pages/KarmaContent.vue"),
      },
      {
        name: "Deepalavi",
        path: "/deepavali",
        component: () => import("src/pages/DeepavaliContent.vue"),
      },
      {
        name: "BirthofGuru",
        path: "/birth",
        component: () => import("pages/BirthOfGuru.vue"),
      },
      {
        name: "HisLife",
        path: "/life/:lessonLink?/:languageCode?",
        component: () => import("src/pages/HisLife.vue"),
      },

      {
        name: "FollowingHim",
        path: "/following/:lessonLink?/:languageCode?",
        component: () => import("pages/FollowingHim.vue"),
      },
      {
        name: "SeriesMaster",
        path: "/series/:study?/:lesson?/:languageCodeHL?",
        component: () => import("src/pages/SeriesMaster.vue"),
      },
      {
        name: "AskHisFollowers",
        path: "/questions",
        component: () => import("src/pages/RestorePage.vue"),
      },
    ],
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;

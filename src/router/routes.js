
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        name: 'Index',
        path: '/',
        component: () => import('pages/IndexPage.vue')
      },
      {
        name: 'MountainOfGod',
        path: '/mountain',
        component: () => import('pages/MountainOfGod.vue')
      },
      {
        name: 'BirthofGuru',
        path: '/birth',
        component: () => import('pages/BirthOfGuru.vue')
      },
      {
        name: 'HisLife',
        path: '/life/:lessonLink?',
        component: () => import('src/pages/HisLife.vue')
      },
      {
        name: 'HisTeachings',
        path: '/teachings/:lessonLink?',
        component: () => import('pages/HisTeachings.vue')
      },
      {
        name: 'HisBook',
        path: '/book/:lessonLink?',
        component: () => import('pages/HisBook.vue')
      },

    {
      name: 'FollowingHim',
      path: '/following',
      component: () => import('pages/FollowingHim.vue')
    },
    {
      name: 'LeadershipTeachings',
      path: '/leadership/:lessonLink?',
      component: () => import('pages/LeadershipTeachings.vue')
    },
    {
      name: 'AskHisFollowers',
      path: '/questions',
      component: () => import('src/pages/AskHisFollowers.vue')
    },
    ]
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes

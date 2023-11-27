// src/boot/localStorage.js

export default ({ app, router }) => {
  // Use the router's navigation guard to update local storage on route change
  router.beforeEach((to, from, next) => {
    // Store the current route path in local storage
    localStorage.setItem('currentPath', to.path);
    next();
  });
};

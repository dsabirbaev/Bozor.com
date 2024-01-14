

import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@pg/Layout.vue'),
      children: [
        {
          path: '/',
          name: 'home',
          component: () => import('@pg/Home/Home.vue')
        },
        {
          path: '/catalog',
          name: 'catalog',
          component: () => import('@pg/Catalog/Catalog.vue')
        },
        {
          path: '/favorites',
          name: 'favorites',
          component: () => import('@pg/Favorites/Favorites.vue')
        },
        {
          path: '/basket',
          name: 'basket',
          component: () => import('@pg/Basket/Basket.vue')
        },
      ]
    },
   
    {
      path: "/:pathMatch(.*)*",
      name: "error",
      component: () => import("@pg/Error/Error.vue")
    },
  ]
})

export default router

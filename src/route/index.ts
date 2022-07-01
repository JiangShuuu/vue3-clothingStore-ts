import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('../views/Home.vue')
    },
    {
      path: '/products',
      name: 'Products',
      component: () => import('../views/Products.vue'),
      redirect: '/products/all',
      children: [
        {
          path: '/products/all',
          name: 'all',
          component: () => import('../views/Products.vue')
        },
        {
          path: '/products/hot-product',
          name: 'hot-product',
          component: () => import('../views/Products.vue')
        }
      ]
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: () => import('../views/NotFound.vue')
    }
  ]
})

export default router

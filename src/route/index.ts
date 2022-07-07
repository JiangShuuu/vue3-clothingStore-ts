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
        },
        {
          path: '/products/new-product',
          name: 'new-product',
          component: () => import('../views/Products.vue')
        },
        {
          path: '/products/clothes',
          name: 'clothes',
          component: () => import('../views/Products.vue')
        },
        {
          path: '/products/coat',
          name: 'coat',
          component: () => import('../views/Products.vue')
        },
        {
          path: '/products/pants',
          name: 'pants',
          component: () => import('../views/Products.vue')
        },
        {
          path: '/products/specials',
          name: 'specials',
          component: () => import('../views/Products.vue')
        }
      ]
    },
    {
      path: '/product/:id',
      name: 'Product',
      component: () => import('../views/Product.vue'),
      children: [
        {
          path: '/product/:id/description',
          name: 'description',
          component: () => import('../components/Product/Description.vue')
        },
        {
          path: '/product/:id/more',
          name: 'more',
          component: () => import('../components/Product/More.vue')
        },
        {
          path: '/product/:id/payment',
          name: 'payment',
          component: () => import('../components/Product/Payment.vue')
        },
        {
          path: '/product/:id/comment',
          name: 'comment',
          component: () => import('../components/Product/Comment.vue')
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

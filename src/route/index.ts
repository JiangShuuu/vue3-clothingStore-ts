import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/home.vue')
    },
    {
      path: '/signIn',
      name: 'signIn',
      component: () => import('../views/signIn.vue')
    },
    {
      path: '/products',
      name: 'Products',
      component: () => import('../views/products.vue'),
      meta: { title: '產品目錄' }
    },
    {
      path: '/product/:id',
      name: 'Product',
      component: () => import('../views/product.vue'),
      meta: { title: '產品資訊' },
      children: [
        {
          path: '/product/:id/description',
          name: 'description',
          component: () => import('../components/product/Description.vue'),
          meta: { title: '商品描述' }
        },
        {
          path: '/product/:id/more',
          name: 'more',
          component: () => import('../components/product/More.vue'),
          meta: { title: '了解更多' }
        },
        {
          path: '/product/:id/payment',
          name: 'payment',
          component: () => import('../components/product/Payment.vue'),
          meta: { title: '運送方式' }
        },
        {
          path: '/product/:id/comment',
          name: 'comment',
          component: () => import('../components/product/Comment.vue'),
          meta: { title: '顧客評價' }
        }
      ]
    },
    {
      path: '/cart',
      name: 'Cart',
      component: () => import('../views/cart.vue'),
      redirect: '/cart/order',
      children: [
        {
          path: '/cart/order',
          name: 'order',
          component: () => import('../components/carts/Cart01.vue')
        },
        {
          path: '/cart/info',
          name: 'info',
          component: () => import('../components/carts/Cart02.vue')
        },
        {
          path: '/cart/confirm',
          name: 'confirm',
          component: () => import('../components/carts/Cart03.vue')
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

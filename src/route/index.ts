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
      meta: { title: '產品' },
      children: [
        {
          path: '/products/all',
          name: 'all',
          component: () => import('../views/Products.vue'),
          meta: { title: '全部產品' }
        },
        {
          path: '/products/hot-product',
          name: 'hot-product',
          component: () => import('../views/Products.vue'),
          meta: { title: '熱門產品' }
        },
        {
          path: '/products/new-product',
          name: 'new-product',
          component: () => import('../views/Products.vue'),
          meta: { title: '新上市' }
        },
        {
          path: '/products/clothes',
          name: 'clothes',
          component: () => import('../views/Products.vue'),
          meta: { title: '熱銷上衣' }
        },
        {
          path: '/products/coat',
          name: 'coat',
          component: () => import('../views/Products.vue'),
          meta: { title: '精選外套' }
        },
        {
          path: '/products/pants',
          name: 'pants',
          component: () => import('../views/Products.vue'),
          meta: { title: '經典褲款' }
        },
        {
          path: '/products/specials',
          name: 'specials',
          component: () => import('../views/Products.vue'),
          meta: { title: '特價商品' }
        }
      ]
    },
    {
      path: '/product/:id',
      name: 'Product',
      component: () => import('../views/Product.vue'),
      meta: { title: '產品資訊' },
      children: [
        {
          path: '/product/:id/description',
          name: 'description',
          component: () => import('../components/Product/Description.vue'),
          meta: { title: '商品描述' }
        },
        {
          path: '/product/:id/more',
          name: 'more',
          component: () => import('../components/Product/More.vue'),
          meta: { title: '了解更多' }
        },
        {
          path: '/product/:id/payment',
          name: 'payment',
          component: () => import('../components/Product/Payment.vue'),
          meta: { title: '運送方式' }
        },
        {
          path: '/product/:id/comment',
          name: 'comment',
          component: () => import('../components/Product/Comment.vue'),
          meta: { title: '顧客評價' }
        }
      ]
    },
    {
      path: '/cart',
      name: 'Cart',
      component: () => import('../views/Cart.vue'),
      redirect: '/cart/order',
      children: [
        {
          path: '/cart/order',
          name: 'order',
          component: () => import('../components/Carts/Cart01.vue')
        },
        {
          path: '/cart/info',
          name: 'info',
          component: () => import('../components/Carts/Cart02.vue')
        },
        {
          path: '/cart/confirm',
          name: 'confirm',
          component: () => import('../components/Carts/Cart03.vue')
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

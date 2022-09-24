import { createRouter, createWebHistory } from 'vue-router'
import SignIn from '~/views/signIn.vue'
import SignUp from '~/views/signUp.vue'
import { useUserStore } from '~/stores/user'
import { useToast } from 'vue-toastification'

const toast = useToast()

const authorizeIsUser = async (to:any, from:any, next:any) => {
  // console.log(to.path)
  // store
  const userStore = useUserStore()

  // 從locoalStorage 取出 token
  const token = localStorage.getItem('token')
  const tokenInStore = userStore.token

  let isAuthenticated = userStore.isAuthenticated

  // 有 token 並且不等於 storeToken，向後端驗證
  if (token && token !== tokenInStore) {
    isAuthenticated = await userStore.fetchCurrentUser()
  }

  if (to.path === ('/cart/info')) {
    userStore.fetchCurrentUser()
  }

  // 如果 token 有效，則無法進入signUp 跟 signIn
  const pathsWithoutAuthentication = ['sign-in', 'sign-up']
  const pathWithoutCartPage = ['cart']

  // 如果 驗證 無效，並且路由不是在登入、註冊頁，則轉址到登入頁
  if (!isAuthenticated && !pathsWithoutAuthentication.includes(to.name)) {
    toast.warning('請先登入', {
      timeout: 1000
    })
    next('/signin')
    return
  }

  // 如果 驗證 有效，並且路由是從登入頁，則轉址到會員頁
  if (isAuthenticated && pathsWithoutAuthentication.includes(to.name)) {
    next('/member')
    return
  } else if (isAuthenticated && pathWithoutCartPage.includes(to.name)) {
    next('cart')
    return
  }

  next()
}

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
      name: 'sign-in',
      component: SignIn,
      beforeEnter: authorizeIsUser
    },
    {
      path: '/signUp',
      name: 'sign-up',
      component: SignUp,
      beforeEnter: authorizeIsUser
    },
    {
      path: '/search',
      name: 'search',
      component: () => import('../views/search.vue')
    },
    {
      path: '/products',
      name: 'products',
      component: () => import('../views/products.vue'),
      meta: { title: '產品目錄' }
    },
    {
      path: '/product/:id',
      name: 'product',
      component: () => import('../views/product.vue'),
      meta: { title: '產品資訊' },
      redirect: { name: 'description' },
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
      name: 'cart',
      component: () => import('../views/cart.vue'),
      redirect: '/cart/order',
      beforeEnter: authorizeIsUser,
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
      path: '/member',
      name: 'member',
      component: () => import('../views/member.vue'),
      redirect: '/member/info',
      beforeEnter: authorizeIsUser,
      children: [
        {
          path: '/member/info',
          name: 'memberInfo',
          component: () => import('../components/member/Info.vue')
        },
        {
          path: '/member/order',
          name: 'memberOrder',
          component: () => import('../components/member/Order.vue')
        }
      ]
    },
    {
      path: '/pending',
      name: 'pending',
      component: () => import('../views/pending.vue')
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'notFound',
      component: () => import('../views/notFound.vue')
    }
  ]
})

router.beforeEach(async (to:any, from:any, next:any) => {
  const pathsWithoutAuthentication = ['sign-in', 'sign-up', 'cart']

  if (pathsWithoutAuthentication.includes(to.name)) {
    next()
    return
  }

  // store
  const userStore = useUserStore()

  // 從locoalStorage 取出 token
  const token = localStorage.getItem('token')
  const tokenInStore = userStore.token

  let isAuthenticated = userStore.isAuthenticated

  // 有 token 並且不等於 storeToken，向後端驗證
  if (token && token !== tokenInStore) {
    isAuthenticated = await userStore.fetchCurrentUser()
  }

  next()
})

export default router

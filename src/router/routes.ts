export const constantRoute = [
  {
    path: '/login',
    name: 'login',
    component: ()=>import('@/views/login/index.vue'),
    meta: {
      title: '登入',
      hidden: true,
    }
  },
  {
    path: '/',
    name: 'home',
    component: ()=>import('@/layout/index.vue')
  },
  {
    path: '/404',
    name: '404',
    component: ()=> import('@/views/404/index.vue'),
    meta: {
      title: '404',
      hidden: true,
    }
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/404',
    name: 'Any',
    meta: {
      title: '陌生的网站404',
      hidden: true,
      icon:'Close'
    }
  }
]
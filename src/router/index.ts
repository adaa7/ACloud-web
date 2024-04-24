import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/UserLogin/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/UserRegister/index.vue')
    },
    {
      path: '/index',
      name: 'index',
      redirect:'index/MyFiles',
      component: () => import('../views/Layout/index.vue'),
      children: [{
        path: 'MyFiles',
        name: 'MyFiles',
        component: () => import('../views/Layout/MyFiles.vue')
      },
      {
        path: 'Image',
        name: 'Image',
        component: () => import('../views/Layout/Image.vue')
      },
      {
        path: 'Video',
        name: 'Video',
        component: () => import('../views/Layout/Video.vue')
      },
      {
        path: 'Audio',
        name: 'Audio',
        component: () => import('../views/Layout/Audio.vue')
      }
    ]

    }
  ]
})

export default router

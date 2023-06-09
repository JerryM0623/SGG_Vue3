import { RouteRecordRaw } from 'vue-router'

export const constantRoutes: RouteRecordRaw[] = [
  {
    path: '/login',
    name: 'Login',
    meta: {
      title: '登录',
      hidden: true,
    },
    component: () => import('@/views/login/index.vue'),
  },
  {
    path: '/',
    name: 'layout',
    meta: {
      title: '管理',
      hidden: false,
    },
    component: () => import('@/layout/index.vue'),
    children: [
      {
        path: '/home',
        name: 'home',
        meta: {
          title: '首页',
          hidden: false,
        },
        component: () => import('@/views/home/index.vue'),
      },
      {
        path: '/screen',
        name: 'screen',
        meta: {
          title: '数据大屏',
          hidden: false,
        },
        component: () => import('@/views/home/index.vue'),
      },
    ],
  },
  {
    path: '/404',
    name: '404',
    meta: {
      title: '404',
      hidden: true,
    },
    component: () => import('@/views/404/index.vue'),
  },
  {
    // 将所有未匹配的路由捕获之后重定向至 /404
    path: '/:pathMatch(.*)*',
    name: 'Any',
    redirect: '/404',
    meta: {
      name: 'any',
      hidden: true,
    },
  },
]

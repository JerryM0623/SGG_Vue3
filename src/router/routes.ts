export const constantRoutes = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/login/index.vue'),
  },
  {
    path: '/',
    name: 'Home',
    // 路由别名，访问 /home 等同于访问 /
    alias: '/home',
    component: () => import('@/views/home/index.vue'),
  },
  {
    path: '/404',
    name: '404',
    component: () => import('@/views/404/index.vue'),
  },
  {
    // 将所有未匹配的路由捕获之后重定向至 /404
    path: '/:pathMatch(.*)*',
    name: 'Any',
    redirect: '/404',
  },
]

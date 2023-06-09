import { RouteRecordRaw } from 'vue-router'

export const constantRoutes: RouteRecordRaw[] = [
  {
    path: '/login',
    name: 'Login',
    meta: {
      title: '登录',
      hidden: true,
      icon: 'Promotion',
    },
    component: () => import('@/views/login/index.vue'),
  },
  {
    path: '/',
    name: 'layout',
    meta: {
      title: 'layout',
      hidden: false,
      icon: 'Menu',
    },
    redirect: '/home',
    component: () => import('@/layout/index.vue'),
    children: [
      {
        path: '/home',
        name: 'home',
        meta: {
          title: '首页',
          hidden: false,
          icon: 'HomeFilled',
        },
        component: () => import('@/views/home/index.vue'),
      },
    ],
  },
  {
    path: '/screen',
    name: 'screen',
    meta: {
      title: '数据大屏',
      hidden: false,
      icon: 'TrendCharts',
    },
    component: () => import('@/views/screen/index.vue'),
  },
  {
    path: '/acl',
    name: 'Acl',
    meta: {
      title: '权限管理',
      hidden: false,
      icon: 'WarningFilled',
    },
    component: () => import('@/layout/index.vue'),
    children: [
      {
        path: '/acl/user',
        name: 'Acl',
        meta: {
          title: '账户管理',
          hidden: false,
          icon: 'UserFilled',
        },
        component: () => import('@/views/acl/user/index.vue'),
      },
      {
        path: '/acl/role',
        name: 'Role',
        meta: {
          title: '角色管理',
          hidden: false,
          icon: 'Avatar',
        },
        component: () => import('@/views/acl/role/index.vue'),
      },
      {
        path: '/acl/permission',
        name: 'Permission',
        meta: {
          title: '菜单管理',
          hidden: false,
          icon: 'Grid',
        },
        component: () => import('@/views/acl/permission/index.vue'),
      },
    ],
  },
  {
    path: '/product',
    name: 'Product',
    meta: {
      title: '商品管理',
      hidden: false,
      icon: 'GoodsFilled',
    },
    component: () => import('@/layout/index.vue'),
    children: [
      {
        path: '/product/trademark',
        name: 'Trademark',
        meta: {
          title: '品牌管理',
          hidden: false,
          icon: 'Shop',
        },
        component: () => import('@/views/product/trademark/index.vue'),
      },
      {
        path: '/product/attr',
        name: 'Attr',
        meta: {
          title: '属性管理',
          hidden: false,
          icon: 'Opportunity',
        },
        component: () => import('@/views/product/attr/index.vue'),
      },
      {
        path: '/product/sku',
        name: 'Sku',
        meta: {
          title: 'SKU管理',
          hidden: false,
          icon: 'List',
        },
        component: () => import('@/views/product/sku/index.vue'),
      },
      {
        path: '/product/spu',
        name: 'Spu',
        meta: {
          title: 'SPU管理',
          hidden: false,
          icon: 'List',
        },
        component: () => import('@/views/product/spu/index.vue'),
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

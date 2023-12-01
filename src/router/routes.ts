import { RouteRecordRaw } from 'vue-router'

export const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'layout',
    component: () => import('@/layout/index.vue'),
    redirect: '/home',
    meta: {
      title: '',
      hidden: true,
      icon: '',
    },
    children: [
      {
        path: '/home',
        component: () => import('@/views/home/index.vue'),
        name: 'Home',
        meta: {
          title: '首页',
          hidden: false,
          icon: 'HomeFilled',
        },
      },
    ],
  },
  {
    path: '/login',
    name: 'Login',
    meta: {
      title: '登录',
      hidden: true,
      icon: '',
    },
    component: () => import('@/views/login/index.vue'),
  },

  {
    path: '/404',
    name: '404',
    meta: {
      title: '写博客',
      hidden: false,
      icon: 'EditPen',
    },
    component: () => import('../views/404/index.vue'),
  },
  {
    path: '/blog',
    name: '/layout',
    meta: {
      title: '博客管理',
      hidden: false,
      icon: 'Reading',
    },
    redirect: '/blog/tag',
    component: () => import('@/layout/index.vue'),
    children: [
      {
        path: '/blog/tag',
        name: 'tag',
        meta: {
          title: '标签管理',
          hidden: false,
          icon: 'HomeFilled',
        },
        component: () => import('@/views/sys/blog/tag/index.vue'),
      },
      {
        path: '/blog/link',
        name: 'link',
        meta: {
          title: '友链管理',
          hidden: false,
          icon: 'HomeFilled',
        },
        component: () => import('@/views/sys/blog/link/index.vue'),
      },
      {
        path: '/blog/artilce',
        name: 'article',
        meta: {
          title: '文章管理',
          hidden: false,
          icon: 'HomeFilled',
        },
        component: () => import('@/views/sys/blog/article/index.vue'),
      },
      {
        path: '/blog/category',
        name: 'category',
        meta: {
          title: '分类管理',
          hidden: false,
          icon: 'HomeFilled',
        },
        component: () => import('@/views/sys/blog/category/index.vue'),
      },
    ],
  },
  {
    path: '/404',
    name: '404',
    meta: {
      title: '权限管理',
      hidden: false,
      icon: 'UserFilled',
    },
    component: () => import('../views/404/index.vue'),
  },
  {
    path: '/404',
    name: '404',
    meta: {
      title: '系统管理',
      hidden: false,
      icon: 'Tools',
    },
    component: () => import('../views/404/index.vue'),
  },
]

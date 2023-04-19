// vue-router中提供3种的路由模式
import { createWebHashHistory, createRouter } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/views/Home.vue'),
  },
  {
    path: '/test',
    component: () => import('@/views/test.vue'),
  }
]

const router = createRouter({
  // 路由的模式
  history: createWebHashHistory(),
  // 路由规则
  routes
})

export default router

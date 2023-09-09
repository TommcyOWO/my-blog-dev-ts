import { createRouter, createWebHistory } from 'vue-router'
import Index from '@/views/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'index',
      meta:{title:"Tomycat's Blog"},
      component: Index
    },
    {
      path: '/about',
      name: 'about',
      meta:{title:'About Tomycat =w='},
      component: () => import('../views/about_me.vue')
    },
    {
      path: '/development_introduction',
      name: 'development_introduction',
      meta:{title:'開發介紹 ~~'},
      component: () => import('../views/development_introduction.vue')
    }
  ]
})
router.beforeEach((to, from, next) => {
    if ((to.meta as { title: string }).title) {
      document.title = (to.meta as { title: string }).title;
    };
    next();
})

export default router

 import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),

  scrollBehavior: () => ({ top: 0 }),

  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../view/home/homeView.vue'),
    },
    {
      path: '/aula/1',
      name: 'aula1',
      component: () => import('../view/aula1/Aula1View.vue'),
    },
    {
      path: '/aula/2',
      name: 'aula2',
      component: () => import('../view/aula2/Aula2View.vue'),
    },
    {
      path: '/atividades',
      name: 'atividades',
      component: () => import('../view/pratica/AtividadesView.vue'),
    },
    {
      path: '/desafios',
      name: 'desafios',
      component: () => import('../view/desafio/DesafiosView.vue'),
    },
    {
      path: '/playground',
      name: 'playground',
      component: () => import('../view/playground/PlaygroundView.vue'),
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: '/',
    },
  ],
})

export default router

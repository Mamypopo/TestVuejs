import { createRouter, createWebHistory } from 'vue-router'

import UserListView from '../views/UserListView.vue'
import UserUpdateView from '../views/UserUpdateView.vue'
import UserAddView from '../views/UserAddView.vue';
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'user-list-view',
      component: UserListView
    },
    {
      path: '/user/add',
      name: 'user-add-view',
      component: UserAddView
    },
    {
      path: '/user/update/:id',
      name: 'user-update-view',
      component: UserUpdateView
    },
   
  ]
})

export default router
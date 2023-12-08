import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Restaurents from '../views/Restaurent/Restaurents.vue'
import AddFood from '../views/Restaurent/AddFood.vue'
import EditFood from '../views/Restaurent/EditFood.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Restaurents
  },
  {
    path: '/add',
    name: 'add-food',
    component: AddFood
  },
  {
    path: '/edit/:id',
    name: 'edit-food',
    component: EditFood
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

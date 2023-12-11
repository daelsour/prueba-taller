import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import InventarioTaller from '../views/InventarioTaller.vue'
import ServiciosTaller from '../views/ServiciosTaller.vue'
import CitasTaller from '../views/CitasTaller.vue'
import CrearTaller from "../components/CrearTaller.vue"
import EditarTaller from "../components/EditarTaller.vue"
import ListarTaller from "../components/ListarTaller.vue"

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/inv',
    name: 'inv',
    component: InventarioTaller
  },
  {
    path: '/serv',
    name: 'serv',
    component: ServiciosTaller
  },
  {
    path: '/citas',
    name: '/citas',
    component: CitasTaller
  },
  {
    path: '/crear',
    name: '/crear',
    component: CrearTaller
  },
  {
    path: '/editar',
    name: '/editar',
    component: EditarTaller
  },
  {
    path: '/listar',
    name: '/listar',
    component: ListarTaller
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router


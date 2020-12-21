import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import City from '@/pages/city/City'
import Detail from '@/pages/detail/Detail'
import Detail2 from '@/pages/detail/Detail2'
import Detail3 from '@/pages/detail/Detail3'

// import Detail from '@/pages/detail/Detail'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'Home',
    component: Home
  }, {
    path: '/city',
    name: 'City',
    component: City
  }, {
    path: '/detail/0001',
    name: 'Detail',
    component: Detail
  }, {
    path: '/detail/0002',
    name: 'Detail2',
    component: Detail2
  }, {
    path: '/detail/0003',
    name: 'Detail3',
    component: Detail3
  }],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})

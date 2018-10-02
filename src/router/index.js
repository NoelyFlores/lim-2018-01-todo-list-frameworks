import Vue from 'vue'
import Router from 'vue-router'
import fatherMain from '@/components/fatherMain'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'fatherMain',
      component: fatherMain
    }
  ]
})

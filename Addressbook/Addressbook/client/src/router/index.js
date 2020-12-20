import Vue from 'vue'
import Router from 'vue-router'
import AddContact from '@/components/AddContact'
import AddressBook from '@/components/AddressBook'
import EditContact from '@/components/EditContact'

import vueCountryRegionSelect from 'vue-country-region-select'
Vue.use(vueCountryRegionSelect)

new Vue({}).$mount('#app')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'AddressBook',
      component: AddressBook
    },
    {
      path: '/addContact',
      name: 'AddContact',
      component: AddContact
    },
    {
      path: '/editContact',
      name: 'Edit',
      component: EditContact
    }
  ]
})

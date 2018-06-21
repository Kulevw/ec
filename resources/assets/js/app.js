require('./bootstrap');

import Vue from 'vue'
import VueRouter from 'vue-router'

import Layout from './components/Layout'
import Login from './components/auth/Login'
import Reg from './components/auth/Reg'

import 'bootstrap/dist/css/bootstrap.css'

Vue.use(VueRouter)

window.Vue = Vue

const app = new Vue({
    el: '#app',
    components: {
        'Layout': Layout
    },
    router: new VueRouter({
        routes: [
            { path: '/login', component: Login },
            { path: '/reg', component: Reg },

        ]
    })
});
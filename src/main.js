import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueRouter from 'vue-router'

import App from './components/App.vue'
import Login from './components/Login.vue'
import LocationWeather from './components/LocationWeather.vue'
import SearchWeather from './components/SearchWeather.vue'

const routes = [
    { path: "/", component: LocationWeather },
    { path: "/search-weather/:city", component: SearchWeather, props: true },
]

const router = new VueRouter({
    routes
})

Vue.use(VueRouter)

Vue.component('login', Login)
Vue.component('localW', LocationWeather)

new Vue({
    
    el: '#app',
    render: h => h(App),
    router
});
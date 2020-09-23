import Vue from 'vue';
import VueRouter from 'vue-router';

import About from '../components/About'
import Index from '../components/Index'

Vue.use(VueRouter);

const Routes = [
    {
        path: '/testo',
        component: About
    },
    {
        path: '/Index',
        component: Index
    }
]

export default new VueRouter({
    Routes
});

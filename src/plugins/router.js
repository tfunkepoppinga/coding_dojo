import Vue from 'vue';
import VueRouter from 'vue-router';
import Index from '../components/Index';
import About from '../components/About';

export const routes = [
    { path: '/', component: Index, name: 'index' },
    { path: '/about', component: About, name: 'about' },
];

export const router = new VueRouter({
    routes
});

Vue.use(VueRouter);

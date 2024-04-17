import { createRouter, createWebHistory } from "vue-router";

import Dashboard from '../views/Dashboard.vue';
import Login from '../views/Login.vue';
import Register from '../views/Register.vue';
import DefaultLayout from '../components/DefaultLayout.vue';
import Survey from '../views/Survey.vue';

const routes = [
    {
        path:'/',
        redirect: '/dashboard',
        name:'DefaultLayout',
        component: DefaultLayout,
        children:[
            { path:'/dashboard',name:'Dashboard',component: Dashboard},
            { path:'/survey',name:'Survey',component: Survey}
        ]
    },
    {
        path:'/login',
        name:'Login',
        component: Login
    },
    {
        path:'/register',
        name:'Register',
        component: Register
    }
];

const router = createRouter({
    history:createWebHistory(),
    routes
});

export default router;
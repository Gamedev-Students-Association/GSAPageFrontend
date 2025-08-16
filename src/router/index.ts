import { createRouter, createWebHistory } from 'vue-router'

import Home from '@/views/Home.vue';
import Sekcje from '@/views/Sekcje.vue';

const routes = [
    {path: '/', name: 'Home', component: Home},
    {path: '/Sekcje', name: 'Sekcje', component: Sekcje}
];

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;
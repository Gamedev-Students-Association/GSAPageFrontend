import { createRouter, createWebHistory } from 'vue-router'

import 'iconify-icon'

import Home from '@/views/Home.vue';
import Sekcje from '@/views/Sekcje.vue';
import Wydarzenia from '@/views/Wydarzenia.vue';
import Projekty from '@/views/Projekty.vue';
import Historia from '@/views/Historia.vue';
import Kontakt from '@/views/Kontakt.vue';

const routes = [
    {path: '/', name: 'Home', component: Home},
    {path: '/Sekcje', name: 'Sekcje', component: Sekcje},
    {path: '/Wydarzenia', name: 'Wydarzenia', component: Wydarzenia},
    {path: '/Projekty', name: 'Projekty', component: Projekty},
    {path: '/Historia', name: 'Historia', component: Historia},
    {path: '/Kontakt', name: 'Kontakt', component: Kontakt}
];

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;
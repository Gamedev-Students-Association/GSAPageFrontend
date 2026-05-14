import { createApp } from 'vue'
import Background from './components/Background.vue'
import Topnav from './components/Topnav.vue'
import Buttomnav from './components/Buttomnav.vue'

createApp(Background)
    .mount('#background')

createApp(Topnav)
    .mount('#topnav')

createApp(Buttomnav)
    .mount('#bottomnav')
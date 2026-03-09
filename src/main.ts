import { createApp } from 'vue'
import Background from './components/Background.vue'
import Topnav from './components/Topnav.vue'
import Buttomnav from './components/Buttomnav.vue'
import Sekcje from './components/Sekcje.vue'
import Map from './components/Map.vue'
import MailForm from './components/MailForm.vue'

import Vueform from '@vueform/vueform'
import vueformConfig from './../vueform.config'

createApp(Background)
    .mount('#background')

createApp(Topnav)
    .mount('#topnav')

createApp(Buttomnav)
    .mount('#bottomnav')

createApp(Sekcje)
    .mount('#sectionsList')

createApp(Map)
    .mount('#interactiveMap')

createApp(MailForm)
    .use(Vueform, vueformConfig)
    .mount('#write-mail')
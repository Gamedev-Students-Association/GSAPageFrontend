import { createApp } from "vue"
import Vueform from '@vueform/vueform'
import vueformConfig from './../vueform.config'

import Map from "./components/Map.vue"
import MailForm from "./components/MailForm.vue"

createApp(Map)
    .mount('#interactiveMap')

createApp(MailForm)
    .use(Vueform, vueformConfig)
    .mount('#write-mail')
// You might place these anywhere else in your project
import '@vueform/vueform/dist/vueform.css';
import en from '@vueform/vueform/locales/en'
import vueform from '@vueform/vueform/dist/vueform'
import axios from 'axios';

import { defineConfig} from '@vueform/vueform'

axios.defaults.headers.post = {
  'Content-Type': 'application/json'
}

export default defineConfig({
  axios,
  theme: vueform,
  locale: 'en',
  locales: [en]
})


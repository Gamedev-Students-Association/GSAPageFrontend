import { createApp } from "vue";
import ArticleList from './components/ArticleList.vue'
import ActiveEvents from "./components/ActiveEvents.vue";

createApp(ArticleList)
    .mount('#list-articles')

createApp(ActiveEvents)
    .mount('#active-events')
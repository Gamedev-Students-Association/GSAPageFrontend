<script setup lang="ts">
import { onMounted, ref, type Ref } from 'vue';
import SpecialArticle from './SpecialArticle.vue';

const location: String[] = window.location.pathname.split('/')
const server = "http://127.0.0.1:8080/get/json"
let dataSource: string = "";

type article = {
    title: string
    imageURL: string
    paragraph: string
    hasLink: boolean
    link?: string
}

type contentList = {
    title: string
    articles: article[]
}

if (location.length == 1) {
    dataSource = server.concat("/index")
} else {
    switch (location[1]) {
        case "index.html":
            dataSource = server.concat("/index.json")
            break;
        case "wydarzenia.html":
            dataSource = server.concat("/wydarzenia.json")
            break;
        default:
            dataSource = server.concat("/empty.json")
            break;
    }
}

let data: Ref<contentList> = ref(
    {
        title: "Loading...",
        articles: []
    }
)

onMounted(async () => {
    const response = await fetch(dataSource);
response.json().then((contents) =>
    data.value = contents
)
})

</script>

<template>
    <h2>{{data.title }}</h2>
    <section>
        <SpecialArticle v-for="(articleItem, index) in data.articles" :key="articleItem.title" :title="articleItem.title" :paragraph="articleItem.paragraph" :link="articleItem.link" :has-link="articleItem.hasLink" :imageURL="articleItem.imageURL" :position="index"></SpecialArticle>
    </section>
</template>

<style lang="css" scoped>
section{
    width: 100%;
}

h2{
    padding: 135px 0;
    text-align: center;
    font-size: 32px;
}
</style>
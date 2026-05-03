<script setup lang="ts">
import { onMounted, ref, type Ref } from 'vue';
import Event from './Event.vue';

type event = {
    title: string
    date: string
    image: string
    link: string
    alt: string
    main: boolean
}

const data: Ref<event[] | undefined> = ref();

onMounted(async () => {
    const response = await fetch("/get/json/events.json");
response.json().then((contents) =>
    data.value = contents
)
})
</script>

<template>
    <nav class="event-grid">
        <Event v-for="(event, index) in data" :key="event.title" :alt="event.alt" :date="event.date" :index="index" :image="event.image" :link="event.link" :title="event.title"></Event>
    </nav>
</template>

<style lang="css" scoped>
.event-grid{
    max-width: 1280px;
    display: grid;
    margin: auto;
    grid-template-columns: 609px 609px;
    grid-auto-rows: 546px;
    grid-template-areas: 
        "hd hd"
    ;
    place-items: center;
    gap: 127px 91px;
    align-items: center;
    justify-items: center;
    justify-content: center;
}

@media screen and (max-width: 1280px){
    .event-grid{
    display: grid;
    margin: auto;
    grid-template-columns: 609px;
    grid-auto-rows: 546px;
    grid-template-areas: 
        "hd"
    ;
    place-items: center;
    gap: 127px 91px;
    align-items: center;
    justify-items: center;
    justify-content: center;
}
}
</style>
<script setup lang="ts">
const props = defineProps<{
    title: string
    date: string
    image: string
    index: number
    link: string
    alt: string
}>()

const classes = {
    child: true,
    'main-event': props.index == 0
};

</script>

<template>
    <a :href="props.link" :class="classes">
        <img :src="`http://127.0.0.1:8080${props.image}`" :alt="props.alt" class="event-image" />
        <section>
            <h3 class="event-name">{{ props.title }}</h3>
            <p>{{ date }}</p>
        </section>
    </a>
</template>

<style lang="css" scoped>
.child {
    height: 100%;
    width: 100%;
    text-align: center;
    vertical-align: center;
    display: flex;
    flex-direction: column;
    align-items: stretch;
}

.main-event {
    grid-area: 1 / 1 / 2 / 3;
}

.event-image {
    height: 426px;
    border-radius: 16px;
}

.event-name {
    font-weight: bold;
    font-size: 24px;
}

.event-date{
    font-size: 17px;
}

section{
    text-align: left;
}
</style>
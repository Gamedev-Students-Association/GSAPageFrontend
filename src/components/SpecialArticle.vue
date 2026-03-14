<script setup lang="ts">
import { computed } from 'vue';


const info = defineProps<{
    title: string
    imageURL: string
    paragraph: string
    hasLink: boolean
    link?: string
    position: number
}>()

const articleClass = computed(() => ({
    normal: (info.position%2 == 0),
    reverse: (info.position%2 == 1)
}))

</script>

<template>
    <article :class="articleClass">
        <section>
            <h3>{{ info.title }}</h3>
            <p>{{ paragraph }}</p>
            <a v-if="info.hasLink" :href="info.link">Dowiedz się więcej</a>
        </section>
        <img :src="info.imageURL" :alt="info.title">
    </article>
</template>

<style lang="css" scoped>
    article{
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: space-between;
        margin-top: 78px;
        margin-bottom: 78px;
    }

    h3{
        font-family: 'Space Grotesk', 'Arial', 'sans-serif';
        font-weight: bold;
        font-size: 32px;
    }

    .normal{
        flex-direction: row;
    }

    .reverse{
        flex-direction: row-reverse;
    }

    section{
        width: 430px;
        padding-left: 148px;
        padding-right: 148px;
    }

    img{
        width: 678px;
    }
</style>
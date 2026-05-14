<script setup lang="ts">
import { computed, onMounted, reactive, ref } from 'vue';

const props = defineProps<{
    title: string
    opis: string
    prowadzacy: string
    status: boolean
    backgroundColour?: string
    backgroundImage?: string
    foregroundImage?: string
    foregroundImageAlt?: string
    light: boolean
}>()


const serverURL = "http://127.0.0.1:8080"

const textColour = ref(!props.light ? "opis-sekcji black-text" : "opis-sekcji");
const stateClass = ref(props.status ? "statusActive" : "statusSuspended")
const stateText = ref(props.status ? "Aktywna" : "Nieaktywna")
const hasForegroundImage = ref((props.foregroundImage != null) && (props.foregroundImageAlt != null))

const foregroundImageURL = ref(serverURL.concat(props.foregroundImage!))

const background_style = computed(() => {
    const imageURL = (props.backgroundImage != null) && (props.backgroundImage != undefined) ? serverURL.concat(props.backgroundImage!) : ""

    return {
        'background-image': `url('${imageURL}')`,
        backgroundColor: props.backgroundColour!
    }
})

</script>

<template>
    <article :style="background_style">
        <section id="opis-sekcji" :class="textColour">
            <h2>{{ props.title }}</h2>
            <p>{{ props.opis }}</p>
            <br>
            <p class="bold">{{`Prowadzacy: ${props.prowadzacy}`}}</p>
            <p :class="stateClass">{{ stateText }}</p>
        </section>
        <img v-if="hasForegroundImage" :alt="props.foregroundImageAlt" :src="foregroundImageURL" class="image_sekcji"/>
    </article>
    
</template>

<style lang="css" scoped>
    article{
        box-sizing: border-box;
        width: 90%;
        height: 506px;
        margin: 16px 0;
        border-radius: 16px;
        position: relative;
        background-repeat: no-repeat;
        background-attachment: scroll;
        background-size: cover;
        font-family: "Space Grotesk", "Arial", sans-serif;
        font-weight: bold;
        font-size: 32px;
    }

    .opis-sekcji{
        position: absolute;
        top: 0;
        left: 106px;
        height: 100%;
        max-width: 476px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: start;
        overflow: auto;
        font-family: "Inter", "Arial", sans-serif;
        font-size: 17px;
    }

    .statusActive{
        color: rebeccapurple;
    }

    .statusSuspended{
        color: red;
    }

    .bold{
        font-weight: bold;
    }

    .black-text{
        color:black;
    }

    .image_sekcji{
        position: absolute;
        height: 95%;
        width: auto;
        right: 16px;
        vertical-align: middle;
    }
</style>

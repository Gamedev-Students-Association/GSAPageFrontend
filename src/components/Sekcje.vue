<script setup lang="ts">
import { onMounted, ref } from 'vue'
import Sekcja from './Sekcja.vue';

let sekcje = ref()

onMounted(async () => {
    const response = await fetch("http://127.0.0.1:8080/get/json/sekcje.json");
response.json().then((data) =>
    sekcje.value = data
)

    console.log(sekcje)
})
</script>

<template>
        <section id="lista-sekcji">
            <Sekcja v-for="value in sekcje" :key="value.id" :title="value.nazwa" :opis="value.opis" :prowadzacy="value.prowadzący"
                :status="value.status" :background-colour="value.backgroundColor"
                :background-image="value.backgroundImage" :foreground-image="value.sekcjaImage"
                :foreground-image-alt="value.sekcjaImageAlt" :light="value.light"/>
        </section>

</template>

<style lang="css" scoped>
#lista-sekcji {
    display: flex;
    flex-direction: column;
    justify-content: left;
    align-items: center;
    width: 100%;
}
</style>
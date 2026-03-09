<script setup lang="ts">
import L from "leaflet"
import { onMounted } from "vue"

const lating = L.latLng(50.029413, 19.905741)

onMounted(() => {
    const map = L.map('map').setView(lating, 17);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

L.marker(lating, {alt: 'Wydział Fizyki, Astronomii i Informatyki Stosowanej'})
    .addTo(map)
    .bindPopup("Wydział Fizyki, Astronomii i Informatyki Stosowanej Uniwersytetu Jagiellońskigo")

})
</script>

<template>
    <div id="map">
    </div>
</template>

<style lang="css" scoped>
    #map{
        height: 400px;
        width: 500px;
    }
</style>
<script setup lang="ts">
import { onMounted } from 'vue';

    onMounted(() => {
        switch(window.location.pathname.split("/")[1]) {
        case "wydarzenia.html":
        case "wydarzenia":
            document.getElementById("wydarzenia")?.classList.add("current-top-subpage")
            break;
        case "sekcje.html":
            document.getElementById("sekcje")?.classList.add("current-top-subpage")
            break;
        case "projekty.html":
            document.getElementById("projekty")?.classList.add("current-top-subpage")
            break;
        case "historia.html":
            document.getElementById("historia")?.classList.add("current-top-subpage")
            break;
        case "kontakt.html":
            document.getElementById("kontakt")?.classList.add("current-top-subpage")
            break;
    }
    })
</script>

<template>
<header>
    <nav aria-label="navigate subpages">
        <a href="/"><img role="img" src="/src/images/Logo.svg"></img></a>
        <ul>
            <li><a id="wydarzenia" href="./wydarzenia.html">Wydarzenia</a></li>
            <li><a id="sekcje" href="./sekcje.html">Sekcje</a></li>
            <li><a id="projekty" href="./projekty.html">Projekty</a></li>
            <li><a id="historia" href="./historia.html">Historia</a></li>
            <li><a id="kontakt" href="./kontakt.html">Kontakt</a></li>
        </ul>
        <a id='join-button' target="_blank" href="https://forms.gle/bF7fYinzHXs6Gaud8">Dołącz do nas</a>
    </nav>
</header>    
    
</template>

<style scoped>
    nav {
        width: 100%;
        min-height: 85px;
        backdrop-filter: blur(507px);
        background-color: rgba(23, 21, 47, 0.2);
        margin: 0;
        position: fixed;
        top: 0;
        left: 0;
        display: flex;
        justify-content: space-around;
        align-items: center;
        font-family: "Roboto", "Arial", sans-serif;
        z-index: 999;
    }

    img {
        height: 48px;
        width: auto;
    }

    ul {
        list-style-type: none;
        display: flex;
        flex-direction: row;
        margin: 0;
        padding: 0;
    }
    
    #join-button {
        text-decoration: none;
        color: white;
        border-color: #7721EF;
        background-color: #7721EF;
        border-style: solid;
        border-radius: 20px;
        padding: 5px 25px;
    }

    li {
        padding: 0 20px;
    }

    .current-top-subpage{
        color: #7721EF;
        font-weight: bold;
    }

    @media screen and (max-width: 780px){
        nav {
            flex-direction: column;
            position: sticky;
        }

        li {
            padding-top: 1em;
            padding-bottom: 1em;
            padding-left: 0;
            padding-right: 0;
            text-align: center;
        }

        ul {
            flex-direction: column;
            height: auto;
            justify-items: center;
            align-items: center;
            justify-content: center;
            align-content: center;;
        }
    }
</style>
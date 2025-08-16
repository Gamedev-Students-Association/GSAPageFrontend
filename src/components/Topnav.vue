<script setup lang="ts">

</script>

<template>
<header>
    <nav aria-label="navigate subpages">
        <router-link to="/"><img role="img" src="/src/images/Logo.svg"></img></router-link>
        <ul>
            <li><router-link to="/Sekcje">Sekcje</router-link></li>
            <li>Projekty</li>
        </ul>
        <a id='join-button' target="_blank" href="https://forms.gle/bF7fYinzHXs6Gaud8">Dołącz do nas</a>
    </nav>
</header>    
    
</template>

<style scoped>
    nav {
        width: 100%;
        height: 85px;
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
    }
    
    #join-button {
        text-decoration: none;
        color: white;
        border-color: rebeccapurple;
        background-color: rebeccapurple;
        border-style: solid;
        border-radius: 20px;
        padding: 5px 25px;
    }

    li {
        padding: 0 20px;
    }
</style>
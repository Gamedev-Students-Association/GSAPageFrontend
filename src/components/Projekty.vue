<script setup lang="ts">
import { ref, type Ref, computed } from 'vue';

const current: Ref<string> = ref('')

function steam() {
    current.value = 'steam'
}

function web() {
    current.value = 'web'
}

function uj() {
    current.value = 'uj'
}

const steamClasses = computed(() => ({
    'bigButton': current.value === 'steam',
    'smallButton': current.value !== 'steam'
}))

const ujClasses = computed(() => ({
    'bigButton': current.value === 'uj',
    'smallButton': current.value !== 'uj'
}))

const webClasses = computed(() => ({
    'bigButton': current.value === 'web',
    'smallButton': current.value !== 'web'
}))
</script>

<template>
    <section>
        <h2 class="project-heading">Gry na steamie:</h2>
        <button @click="steam" class="buttonTransition" :class="steamClasses" :disabled="current === 'steam'">
            <nav class="project-container">
                <a :tabindex="current !== 'steam' ? -1 : 0" class="item project-item" target="_blank" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"><img
                        class="project-image" src="/src/project.jpg" alt="Rick Astley" />
                    <div class="project-text">Never gonna give you up</div>
                </a>
                <a :tabindex="current !== 'steam' ? -1 : 0" class="item project-item" target="_blank" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"><img
                        class="project-image" src="/src/project.jpg" alt="Rick Astley" />
                    <div class="project-text">Never gonna give you up</div>
                </a>
                <a :tabindex="current !== 'steam' ? -1 : 0" class="item project-item" target="_blank" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"><img
                        class="project-image" src="/src/project.jpg" alt="Rick Astley" />
                    <div class="project-text">Never gonna give you up</div>
                </a>
                <a :tabindex="current !== 'steam' ? -1 : 0" class="item project-item" target="_blank" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"><img
                        class="project-image" src="/src/project.jpg" alt="Rick Astley" />
                    <div class="project-text">Never gonna give you up</div>
                </a>
                <a :tabindex="current !== 'steam' ? -1 : 0" class="item project-item" target="_blank" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"><img
                        class="project-image" src="/src/project.jpg" alt="Rick Astley" />
                    <div class="project-text">Never gonna give you up</div>
                </a>
                <a :tabindex="current !== 'steam' ? -1 : 0" class="item project-item" target="_blank" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"><img
                        class="project-image" src="/src/project.jpg" alt="Rick Astley" />
                    <div class="project-text">Never gonna give you up</div>
                </a>
            </nav>
        </button>
        <h2 class="project-heading">Gry do zagrania w przeglądarce:</h2>
        <button @click="web" class="buttonTransition" :class="webClasses" :disabled="current === 'web'">
            <nav class="project-container">
                <a :tabindex="current !== 'web' ? -1 : 0" class="item project-item" target="_blank" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"><img
                        class="project-image" src="/src/images/design.png" alt="Master Graphic" />
                    <div class="project-text">Najlepszy design</div>
                </a>
                <a :tabindex="current !== 'web' ? -1 : 0" class="item project-item" target="_blank" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"><img
                        class="project-image" src="/src/images/design.png" alt="Master Graphic" />
                    <div class="project-text">Najlepszy design</div>
                </a>
                <a :tabindex="current !== 'web' ? -1 : 0" class="item project-item" target="_blank" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"><img
                        class="project-image" src="/src/images/design.png" alt="Master Graphic" />
                    <div class="project-text">Najlepszy design</div>
                </a>
                <a :tabindex="current !== 'web' ? -1 : 0" class="item project-item" target="_blank" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"><img
                        class="project-image" src="/src/images/design.png" alt="Master Graphic" />
                    <div class="project-text">Najlepszy design</div>
                </a>
                <a :tabindex="current !== 'web' ? -1 : 0" class="item project-item" target="_blank" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"><img
                        class="project-image" src="/src/images/design.png" alt="Master Graphic" />
                    <div class="project-text">Najlepszy design</div>
                </a>
                <a :tabindex="current !== 'web' ? -1 : 0" class="item project-item" target="_blank" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"><img
                        class="project-image" src="/src/images/design.png" alt="Master Graphic" />
                    <div class="project-text">Najlepszy design</div>
                </a>
                <a :tabindex="current !== 'web' ? -1 : 0" class="item project-item" target="_blank" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"><img
                        class="project-image" src="/src/images/design.png" alt="Master Graphic" />
                    <div class="project-text">Najlepszy design</div>
                </a>
            </nav>
            <span>Bottom text</span>
        </button>

        <h2 class="project-heading">Projekty z Uniwersytetem Jagiellońskim</h2>
        <button @click="uj" class="buttonTransition" :class="ujClasses" :disabled="current === 'uj'">Test button
            3: Return of the Button</button>
    </section>

</template>

<style lang="css" scoped>
.buttonTransition {
    transition-property: width, height, background-color;
    transition-duration: 1s;
}

.buttonBehaviour {
    background: none;
    border: none;
    color: white;
}

.smallButton:hover {
    background-color: rgba(128, 128, 128, 0.5);
}

.smallButton {
    width: 50%;
    height: 231px;
    overflow: hidden;
    background: #040C30;
}

.smallButton:hover{
    background-color:#7721EF;
}

.smallButton>nav>a {
    width: 306px;
    pointer-events: none;
}

.item {
    height: 80%;
    background-color: aqua;
    flex: none;
    transition-property: width, height;
    transition-duration: 1s;
    overflow: hidden;
}

.project-heading {
    text-align: left;
    width: 90%;
}

/* .smallItem {
    width: 80px;
} */

/* .bigItem {
    width: 160px;
} */

.bigButton {
    width: 100%;
    height: 462px;
    overflow: auto;
    scrollbar-color: white #7721EF;
    scrollbar-width: thin;
    background-color: transparent;
}

.bigButton>nav>a {
    width: 612px;
    pointer-events: all;
}

section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 1636px;
}

.project-container {
    display: flex;
    height: 100%;
    column-gap: 10%;
    flex-direction: row;
    flex-wrap: nowrap;
}

.project-item {
    display: grid;
    place-items: end;
    border-radius: 1em;
}

.project-text {
    grid-area: 1 / 1 / 2 /2;
    background-color: rgb(119, 33, 239);
    width: 100%;
    transition-property: font-size, height;
    transition-duration: 1s;
}

.smallButton>nav>a>div.project-text {
    font-size: 0;
    height: 0;
}

.bigButton>nav>a>div.project-text {
    font-size: 16px;
    height: 20%;
}

.project-image {
    grid-area: 1 / 1 / 2 / 2;
    object-fit: cover;
    object-position: center;
    width: 100%;
    height: 100%;
}

.smallButton>span {
    position: relative;
    top: 50%;
    display: block;
    z-index: 4;
}

.bigButton>span {
    display: none;
}
</style>
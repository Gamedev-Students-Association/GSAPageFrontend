<script setup lang="ts">
import { ref, type Ref, computed, onMounted } from 'vue';

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

const webClasses = computed(() => ({
    'bigButton': current.value === 'web',
    'smallButton': current.value !== 'web',
}))

const ujClasses = computed(() => ({
    'bigButton': current.value === 'uj',
    'smallButton': current.value !== 'uj',
}))

//using transform: scale to change sizes of elements results in the page layout not changing when size of box changes.
//as a result of that all elements must be moved manually
const moveWeb = computed(() => ({
    'moveDownBelowActiveButton': current.value === 'steam'
}))

const moveUJ = computed(() => ({
    'moveDownBelowActiveButton': current.value === 'steam' || current.value === 'web'
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
        <h2 class="project-heading" :class="moveWeb">Gry do zagrania w przeglądarce:</h2>
        <button @click="web" class="buttonTransition" :class="[webClasses, moveWeb]" :disabled="current === 'web'">
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
        </button>

        <h2 class="project-heading" :class="moveUJ">Projekty z Uniwersytetem Jagiellońskim</h2>
        <button @click="uj" class="buttonTransition" :class="[ujClasses, moveUJ]" :disabled="current === 'uj'">Test button
            3: Return of the Button</button>
    </section>

</template>

<style lang="css" scoped>
.buttonTransition {
    transition-property: transform, background-color, border-color, border-width, border-radius;
    transition-duration: 1s;
    transform-origin: top center;
    width: 50%;
    height: 231px;
}

.buttonBehaviour {
    background: none;
    border: none;
    color: white;
}

.smallButton {
    transform: scale(1);
    overflow: hidden;
    background: #040C30;
    border-radius: 1em;
}

.smallButton:hover{
    background-color:#7721EF;
    border-color: white;
}

.smallButton>nav>a {
    pointer-events: none;
}

.item {
    height: 80%;
    background-color: aqua;
    flex: none;
    transition-property: transform;
    transition-duration: 1s;
    overflow: hidden;
    width: 306px;
}

.project-heading {
    text-align: left;
    width: 90%;
    transition: transform 1s;
}

.bigButton {
    transform: scale(2);
    overflow: auto;
    scrollbar-color: white #7721EF;
    scrollbar-width: thin;
    background-color: transparent;
    border-radius: 0;
    border-width: 0;
    border-color: #040C30;
}

.bigButton>nav>a {
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
    transition-property: transform;
    transform-origin: bottom center;
    height: 20%;
    transition-duration: 1s;
    font-size: 0.7em;
}

.smallButton>nav>a>div.project-text {
    transform: scaleY(0);
}

.bigButton>nav>a>div.project-text {
    transform: scaleY(1);
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

.moveDownBelowActiveButton{
    transform: translateY(231px);
}
</style>
<script setup lang="ts">
import { defineEmits } from "vue";

const emit = defineEmits<{
        (e: 'loadBackground', fragmentShaderCode?: string): void
    }>()

    emit('loadBackground','#ifdef GL_ES\n\
precision mediump float;\n\
#endif\n\
\n\
uniform float u_time;\n\
\n\
void main() {\n\
	gl_FragColor = vec4(0.0,0.0,0.0,1.0);\n\
}')
</script>

<template>
    <div>
        <h1>Projekty</h1>
        <iframe src="https://store.steampowered.com/widget/2352130/?t=Gra%20autorstwa%20jednego%20z%20cz%C5%82onk%C3%B3w%20ko%C5%82a" frameborder="0" width="646" height="190"></iframe>
        <h2>Mod autorstwa członka koła</h2><br/>
        <img src="/public/image.png" alt="Corona regni polognae - plakat" width="60%"></img><br/>
        <a href="https://www.moddb.com/mods/corona-regni-poloniae-fragmented-realm" title="View Corona Regni Poloniae - Fragmented Realm - ModDB" class=""><img src="https://media.moddb.com/images/global/moddb.png" alt="Corona Regni Poloniae - Fragmented Realm"></a>
        <iframe src="https://store.steampowered.com/widget/3509950/?t=Gra%20autorstwa%20cz%C5%82onka%20ko%C5%82a%20w%20trakcie%20tworzenia" frameborder="0" width="646" height="190"></iframe>

    </div>

</template>

<style scoped>
    div {
        font-size: xx-large;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        position: relative;
        z-index: 1;
    }
</style>
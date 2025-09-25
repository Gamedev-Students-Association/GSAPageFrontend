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
	gl_FragColor = vec4(0.8,0.8,0.8,1.0);\n\
}')
</script>

<template>
    <div>
        <h1><img src="https://a.allegroimg.com/original/11abaf/2d67d46c4de38b3d4985ef329951/GNIAZDKO-ELEKTRYCZNE-kontakt-PODWOJNY-twin-SZKLANE" alt="Kontakt"></img></h1>
    </div>

</template>

<style scoped>
    h1, img{
        padding:0;
        margin: 0;
        box-sizing: content-box;
    }

    img{
        width: 100%;
        height: 100%;
    }

    div{
        font-size: xx-large;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        position: relative;
        z-index: 1;
        margin: 0;
        padding: 0;
        top: 0;
        left: 0;
    }
</style>
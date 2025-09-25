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
	gl_FragColor = vec4(1.0,0.0,1.0,1.0);\n\
}')
</script>

<template>
    <div>
        <h1>Sekcje</h1>
        <p>Na razie nic</p>
    </div>

</template>

<style scoped>
    div {
        height: 100vh;
        width: 100vw;
        font-size: xx-large;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }
</style>
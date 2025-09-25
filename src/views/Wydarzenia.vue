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
	gl_FragColor = vec4(0.75,0.33,0.6,1.0);\n\
}')
</script>

<template>
    <div>
        <h1>Wydarzenia</h1>
        <p>Nic się nie dzieje</p>
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
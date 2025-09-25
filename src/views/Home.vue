<script setup lang="ts">
    import { defineEmits } from "vue";

const emit = defineEmits<{
        (e: 'loadBackground', fragmentShaderCode?: string): void
    }>()

    emit('loadBackground', '#ifdef GL_ES \n\
precision mediump float;\n\
#endif\n\
\n\
uniform vec2 u_resolution;\n\
uniform vec2 u_mouse;\n\
uniform float u_time;\n\
\n\
void main() {\n\
    vec2 st = gl_FragCoord.xy/u_resolution.xy;\n\
    st.x *= u_resolution.x/u_resolution.y;\n\
\n\
    vec3 color = vec3(0.);\n\
    color = vec3(st.x,st.y,abs(sin(u_time)));\n\
\n\
    gl_FragColor = vec4(color,1.0);\n\
}')
</script>

<template>
    <div>
        <h1>Gamedev Student Association</h1>
    </div>

</template>

<style scoped>
    div {
        height: 100vh;
        width: 100vw;
        font-size: xx-large;
        z-index: 1;
        box-sizing: border-box;
        vertical-align: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        top: 0;
        left: 0;
    }

    h1 {
        text-align: center;
    }
</style>
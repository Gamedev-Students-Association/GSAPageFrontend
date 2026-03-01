<script setup lang="ts">
    import {ref, computed, useTemplateRef, onMounted, watchEffect, type TemplateRef, type Ref, type Reactive, reactive} from 'vue';
    import {Canvas} from '../../node_modules/glsl-canvas-js/dist/esm/glsl';

    const backgroundCanvas: TemplateRef<HTMLCanvasElement> = useTemplateRef("background");
    let hasBeenMounted: Ref<boolean> = ref(false);
    let backgroundFragmentShaderCode: Ref<string> = ref("");

    const serverUrl: String = "http://127.0.0.1:8080/shaders"
    fetch(serverUrl.concat(window.location.pathname))
        .then((response) => response.text())
        .then((shaderCode) => backgroundFragmentShaderCode.value = shaderCode)

    let BackgroundWebGL: Reactive<Canvas>;

    watchEffect(() => {
        if(backgroundCanvas.value && hasBeenMounted.value){
            BackgroundWebGL = reactive(new Canvas(backgroundCanvas.value, {
                fragmentString: backgroundFragmentShaderCode.value
            }))
        }

        
    })

     onMounted( () => {
//         if(backgroundCanvas.value){
            
//             fragmentShader.value = '#ifdef GL_ES \n\
// precision mediump float;\n\
// #endif\n\
// \n\
// uniform vec2 u_resolution;\n\
// uniform vec2 u_mouse;\n\
// uniform float u_time;\n\
// \n\
// void main() {\n\
//     vec2 st = gl_FragCoord.xy/u_resolution.xy;\n\
//     st.x *= u_resolution.x/u_resolution.y;\n\
// \n\
//     vec3 color = vec3(0.);\n\
//     color = vec3(st.x,st.y,abs(sin(u_time)));\n\
// \n\
//     gl_FragColor = vec4(color,1.0);\n\
// }';

//             // BackgroundWebGL = reactive(new Canvas(backgroundCanvas.value, {
//             //     fragmentString: fragmentShader.value
//             // }))
//         }
        hasBeenMounted.value = true;
     })
</script>

<template>
    <canvas ref="background"></canvas>
</template>

<style lang="css" scoped>
    canvas {
        height: 100%;
        width: 100%;
        position: absolute;
        top: 0;
        left: 0;
        z-index: -99;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    
</style>
<script setup lang="ts">
  import { ref, type Ref, computed } from 'vue';
  import Topnav from './components/Topnav.vue';
  import Background from './components/Background.vue';
  import Buttomnav from './components/Buttomnav.vue';

  const v: Ref<number> = ref(0);
  const backgroundShaderCode: Ref<string | undefined> = ref("");

  const mainHeaderColour = computed(() => {
    return {special: !(v.value%10)};
  })

  function changeBackground(newBackgroundCode?: string){
    backgroundShaderCode.value = newBackgroundCode;
  }
</script>

<template>
  <Background :backgroundFragmentShaderCode="backgroundShaderCode"/>
  <Topnav/>
  
  <main>
    <RouterView @load-background="changeBackground"></RouterView>
  </main>
  <Buttomnav/>
</template>

<style scoped>
  h1 {
    font-size: xx-large;
    font-family: Arial, Helvetica, sans-serif;
    text-align: center;
    color: aqua;
  }

  .special{
    color: rebeccapurple;
  }

  main{
    position: relative;
    padding: 0;
    box-sizing: border-box;
    top: 0;
    left: 0;
  }
</style>

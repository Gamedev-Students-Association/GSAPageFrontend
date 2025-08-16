<script setup lang="ts">
  import { ref, type Ref, computed } from 'vue';
  import Topnav from './components/Topnav.vue';
  import Background from './components/Background.vue';

  const v: Ref<number> = ref(0);

  const mainHeaderColour = computed(() => {
    return {special: !(v.value%10)};
  })
</script>

<template>
  <Background/>
  <Topnav/>
  <main>
    <RouterView></RouterView>
  </main>
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
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
  }
</style>

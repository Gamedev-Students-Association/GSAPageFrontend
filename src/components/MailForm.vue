<script setup lang="ts">

</script>

<template class="form-container">
    <Vueform class="simple_form">
      <h2>Wyślij maila</h2>
      <TextElement name="email" label="Adres maila" :rules="['required','email']"/>
      <TextElement name="title" label="Tytuł wiadomości"/>
      <TextareaElement name="message" label="Treść wiadomości"/>
      <ButtonElement name="Wyślij">Wyślij</ButtonElement>
    </Vueform>
</template>

<style lang="css" scoped>
    h2{
        text-align: center;
    }

    .simple_form{
        max-width: 400px;
    }
</style>
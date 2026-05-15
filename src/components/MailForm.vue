<script setup lang="ts">
</script>

<template>
    <div class="form-size-definer">
        <form>
            <label for="email">Email</label>
            <input type="email" id="email"/>
        </form>
        <Vueform endpoint="http://127.0.0.1:8080/mail" :add-class="{container: 'full-width'}" :display-errors="false" method="post" class="simple_form" :messages="{
            required: ':attribute nie może być pusty'
        }">
            <StaticElement
      name="register_title"
      content="Napisz do nas"
      tag="h3"
    />
            <TextElement name="email" label="Adres maila" :rules="['required', 'email']" :messages="{
                email: ':attribute nie jest poprawnym adresem',
            }" />
            <TextElement name="title" label="Tytuł wiadomości" :rules="['required']" />
            <TextareaElement name="content" label="Treść wiadomości" :rules="['required']" :messages="{
                required: ':attribute nie może być pusta',
            }"/>
            <ButtonElement name="Wyślij" submits>Wyślij</ButtonElement>
        </Vueform>
    </div>

</template>

<style lang="css" scoped>
h3 {
    text-align: center;
}

.full-width{
    width:100%;
}

.form-size-definer {
    max-width: 400px;
    margin: auto;
}
</style>
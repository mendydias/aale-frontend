<template>
  <div class="q-pa-md">
    <q-layout view="hhh lpr fff" class="flex flex-center">
      <q-card class="custom-card">
        <q-card-section>
          <div class="text-h6 text-primary">Admin Console Login</div>
        </q-card-section>
        <q-separator inset/>
        <q-card-section>
          <div class="row q-py-md">
            <p class="text-body1 col-12">Welcome back!</p>
            <p class="text-body1 col-12">Please use your admin credentials to login.</p>
            <q-form class="q-gutter-md custom-form"
                    autocomplete="Off"
                    autocapitalize="Off"
                    autocorrect="Off"
                    spellcheck="false"
            >
              <q-input
                v-model="username"
                label="Username"
                hint="username or email"
                lazy-rules
                :rules="[ val => val && val.length > 0 || 'Please type a username.']"
                outlined
              />
              <q-input
                v-model="password"
                label="Password"
                lazy-rules
                :rules="[val => val && val.length > 0 || 'Please type a password.']"
                outlined
                type="password"
              />
            </q-form>
          </div>
        </q-card-section>
        <q-card-actions align="center">
          <q-btn color="primary" label="Login" size="lg" padding="sm lg"/>
        </q-card-actions>
      </q-card>
    </q-layout>
  </div>
</template>

<script setup lang="ts">
import {Ref, ref} from 'vue';

const username: Ref<string | null> = ref(null)
const password: Ref<string | null> = ref(null)
</script>

<style scoped>
.custom-card {
  width: 100%;
  max-width: 600px;
}

.custom-form {
  width: 100%;
}
</style>

<script setup lang="ts">
import { useQuasar } from 'quasar';
import { ref } from 'vue';
import { BaseButton, baseButtonProps } from '@BaseUi';

const $q = useQuasar();

const name = ref(null);
const age = ref(null);
const accept = ref(false);

function onSubmit() {
  if (accept.value !== true) {
    $q.notify({
      color: 'red-5',
      textColor: 'white',
      icon: 'warning',
      message: 'You need to accept the license and terms first',
    });
  } else {
    $q.notify({
      color: 'green-4',
      textColor: 'white',
      icon: 'cloud_done',
      message: 'Submitted',
    });
  }
}

function onReset() {
  name.value = null;
  age.value = null;
  accept.value = false;
}
</script>

<template>
  <section class="h-full px-14 py-8 sm:w-[70%]">
    <div class="mb-6 flex flex-col items-start justify-start gap-1">
      <h2 class="text-2xl font-bold text-blue-dark">Pesonal info</h2>

      <p class="text-gray">Please provide your name, emal address, and phone number.</p>
    </div>

    <div class="text-blue-dark">
      <div
        class="q-pa-md"
        style="max-width: 400px"
      >
        <q-form
          @submit="onSubmit"
          @reset="onReset"
          class="q-gutter-md"
        >
          <q-input
            filled
            v-model="name"
            label="Your name *"
            hint="Name and surname"
            lazy-rules
            :rules="[(val) => (val && val.length > 0) || 'Please type something']"
          />

          <q-input
            filled
            type="number"
            v-model="age"
            label="Your age *"
            lazy-rules
            :rules="[
              (val) => (val !== null && val !== '') || 'Please type your age',
              (val) => (val > 0 && val < 100) || 'Please type a real age',
            ]"
          />

          <div>
            <BaseButton />
            <BaseButton :variation="baseButtonProps.variation.ACTION" />
            <BaseButton :variation="baseButtonProps.variation.SUBTLE" />
          </div>
        </q-form>
      </div>
    </div>
  </section>
</template>

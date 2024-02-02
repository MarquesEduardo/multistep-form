<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { BaseButton } from '@BaseUi';
import { useOnboardingStore } from '../stores/onboarding';

const emit = defineEmits<{
  onNextStep: [];
}>();

const { name, email, phone } = storeToRefs(useOnboardingStore());
</script>

<template>
  <section class="h-full px-4 py-6 sm:w-[70%] lg:px-14 lg:py-8">
    <div class="mb-6 flex flex-col items-start justify-start gap-1">
      <h2 class="text-2xl font-bold text-blue-dark">Pesonal info</h2>

      <p class="text-gray">Please provide your name, emal address, and phone number.</p>
    </div>

    <div class="text-blue-dark">
      <q-form
        class="q-gutter-md flex flex-col gap-2"
        @submit="emit('onNextStep')"
      >
        <fieldset class="my-0">
          <label class="text-xs"> Name </label>

          <q-input
            v-model="name"
            dense
            lazy-rules
            outlined
            :rules="[(val) => (val && val.length > 0) || 'This field is required']"
          />
        </fieldset>

        <fieldset class="my-0">
          <label class="text-xs">Email</label>

          <q-input
            v-model="email"
            dense
            type="email"
            outlined
            :rules="[(val) => (val && val.length > 0) || 'This field is required']"
          />
        </fieldset>

        <fieldset class="my-0">
          <label class="text-xs">Phone Number</label>

          <q-input
            v-model="phone"
            dense
            type="tel"
            outlined
            :rules="[(val) => (val && val.length > 0) || 'This field is required']"
            mask="+# ### ### ###"
          />
        </fieldset>

        <div
          class="fixed bottom-0 left-0 ml-0 flex w-screen justify-end bg-white px-10 py-5 lg:relative lg:bottom-auto lg:left-auto lg:w-auto lg:p-0"
        >
          <BaseButton />
        </div>
      </q-form>
    </div>
  </section>
</template>

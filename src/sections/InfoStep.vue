<script setup lang="ts">
import { ref } from 'vue';
import { BaseButton } from '@BaseUi';

const emit = defineEmits<{
  onNextStep: [];
}>();

const name = ref(null);
const email = ref(null);
const phone = ref(null);

function onSubmit() {
  // TODO :: persist on Store

  emit('onNextStep');
}
</script>

<template>
  <section class="h-full px-14 py-8 sm:w-[70%]">
    <div class="mb-6 flex flex-col items-start justify-start gap-1">
      <h2 class="text-2xl font-bold text-blue-dark">Pesonal info</h2>

      <p class="text-gray">Please provide your name, emal address, and phone number.</p>
    </div>

    <div class="text-blue-dark">
      <q-form
        class="q-gutter-md flex flex-col gap-2"
        @submit="onSubmit"
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

        <div class="flex justify-end">
          <BaseButton />
        </div>
      </q-form>
    </div>
  </section>
</template>

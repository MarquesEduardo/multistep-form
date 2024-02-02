<script setup>
import { ref } from 'vue';
// import { BaseButton } from '../components/BaseButton';

const text = ref('');
const email = ref('');
const phone = ref('');
const loading = ref(false);
</script>

<template>
  <section class="h-full px-14 py-8 sm:w-[70%]">
    <div class="mb-6 flex flex-col items-start justify-start gap-1">
      <h2 class="text-blue-title text-2xl font-bold">Pesonal info</h2>

      <p class="text-gray-text">Please provide your name, emal address, and phone number.</p>
    </div>

    <div class="text-blue-title">
      <form
        action=""
        class="flex flex-col gap-4"
      >
        <div class="flex flex-col gap-1">
          <label class="text-xs">Name</label>
          <input
            class="focus:border-blue-title h-10 rounded-md border border-gray-light px-3 focus:outline-none"
            type="text"
            id="fname"
            name="fname"
            :value="text"
          />
        </div>

        <div class="flex flex-col gap-1">
          <label class="text-xs">Email Address</label>
          <input
            class="focus:border-blue-title h-10 rounded-md border border-gray-light px-3 focus:outline-none"
            type="text"
            id="fname"
            name="fname"
            :value="email"
          />
        </div>

        <div class="flex flex-col gap-1">
          <label class="text-xs">Phone Number</label>
          <input
            class="focus:border-blue-title h-10 rounded-md border border-gray-light px-3 focus:outline-none"
            type="text"
            id="fname"
            name="fname"
            :value="phone"
          />
        </div>

        <div class="mt-8 flex justify-between">
          <!-- <BaseButton
            :loading="loading"
            label="Go Back"
            role="button"
          />
          <BaseButton
            :loading="loading"
            label="Next Step"
            role="button"
          /> -->
        </div>
      </form>
    </div>
  </section>
</template>

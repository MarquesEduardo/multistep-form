<script setup>
import { ref } from 'vue';
import { BaseButton } from '../components/BaseButton';

const text = ref('');
const email = ref('');
const phone = ref('');
const loading = ref(false);
</script>

<template>
  <section class="h-full sm:w-[70%] px-14 py-8">
    <div class="flex flex-col gap-1 justify-start items-start mb-6">
      <h2 class="font-bold text-blue-title text-2xl">Pesonal info</h2>

      <p class="text-gray-text">
        Please provide your name, emal address, and phone number.
      </p>
    </div>

    <div class="text-blue-title">
      <form action="" class="flex flex-col gap-4">
        <div class="flex flex-col gap-1">
          <label class="text-xs">Name</label>
          <input
            class="border px-3 border-gray-light rounded-md h-10 focus:border-blue-title focus:outline-none"
            type="text"
            id="fname"
            name="fname"
            :value="text"
          />
        </div>

        <div class="flex flex-col gap-1">
          <label class="text-xs">Email Address</label>
          <input
            class="border px-3 border-gray-light rounded-md h-10 focus:border-blue-title focus:outline-none"
            type="text"
            id="fname"
            name="fname"
            :value="email"
          />
        </div>

        <div class="flex flex-col gap-1">
          <label class="text-xs">Phone Number</label>
          <input
            class="border px-3 border-gray-light rounded-md h-10 focus:border-blue-title focus:outline-none"
            type="text"
            id="fname"
            name="fname"
            :value="phone"
          />
        </div>

        <div class="flex justify-between mt-8">
          <BaseButton :loading="loading" label="Go Back" role="button" />
          <BaseButton :loading="loading" label="Next Step" role="button" />
        </div>
      </form>
    </div>
  </section>
</template>

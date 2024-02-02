<script setup>
import { ref } from 'vue';
// import { BaseButton } from '../components/BaseButton';

const loading = ref(false);
</script>

<template>
  <section class="h-full px-14 py-8 sm:w-[70%]">
    <div class="mb-6 flex flex-col items-start justify-start gap-1">
      <h2 class="text-blue-title text-2xl font-bold">Select you plan</h2>

      <p class="text-gray-text">You have the option of monthly or yearly billing.</p>
    </div>

    <div></div>

    <!-- <BaseButton :loading="loading" label="Next Step" role="button" /> -->
  </section>
</template>

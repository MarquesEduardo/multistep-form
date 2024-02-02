<script setup>
import { ref } from 'vue';
// import { BaseButton } from '../components/BaseButton';

const loading = ref(false);
</script>

<template>
  <section class="h-full px-14 py-8 sm:w-[70%]">
    <div class="mb-6 flex flex-col items-start justify-start gap-1">
      <h2 class="text-blue-title text-2xl font-bold">Finishing up</h2>

      <p class="text-gray-text">Double-check everything looks OK before confirming.</p>
    </div>

    <!-- <BaseButton :loading="loading" label="Confirm" role="button" /> -->
  </section>
</template>

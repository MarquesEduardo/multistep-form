<script setup>
import { ref } from 'vue';
// import { BaseButton } from '../components/BaseButton';

const loading = ref(false);
</script>

<template>
  <section class="h-full px-14 py-8 sm:w-[70%]">
    <div class="mb-6 flex flex-col items-start justify-start gap-1">
      <h2 class="text-blue-title text-2xl font-bold">Pick add-ons</h2>

      <p class="text-gray-text">Add-ons help enhance your gaming experience.</p>
    </div>

    <!-- <BaseButton :loading="loading" label="Next Step" role="button" /> -->
  </section>
</template>

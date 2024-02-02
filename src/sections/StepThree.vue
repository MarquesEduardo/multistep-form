<script setup>
import { ref } from 'vue';
import { BaseButton } from '../components/BaseButton';

const loading = ref(false);
</script>

<template>
  <section class="h-full sm:w-[70%] px-14 py-8">
    <div class="flex flex-col gap-1 justify-start items-start mb-6">
      <h2 class="font-bold text-blue-title text-2xl">Pick add-ons</h2>

      <p class="text-gray-text">Add-ons help enhance your gaming experience.</p>
    </div>

    <BaseButton :loading="loading" label="Next Step" role="button" />
  </section>
</template>

<script setup lang="ts">
import { baseButtonProps, BaseButton } from '@BaseUi';
import { SummaryCard } from './components';

const emit = defineEmits<{
  onBackToPlanSelection: [];
  onPreviousStep: [];
  onNextStep: [];
}>();
</script>

<template>
  <section class="flex h-full flex-col px-4 py-6 sm:w-[70%] lg:px-14 lg:py-8">
    <main class="content">
      <div class="mb-6 flex flex-col items-start justify-start gap-1">
        <h2 class="text-2xl font-bold text-blue-dark">Finishing up</h2>

        <p class="text-gray">Double-check everything looks OK before confirming.</p>
      </div>

      <SummaryCard @click="emit('onBackToPlanSelection')" />
    </main>

    <footer
      class="fixed bottom-0 left-0 flex w-screen shrink justify-between bg-white px-10 py-5 text-blue-dark lg:relative lg:bottom-auto lg:left-auto lg:w-full lg:p-0"
    >
      <q-form class="q-gutter-md flex w-full flex-col gap-2">
        <div class="flex justify-between">
          <BaseButton
            label="Go Back"
            :variation="baseButtonProps.variation.SUBTLE"
            @click="emit('onPreviousStep')"
          />

          <BaseButton
            label="Confirm"
            :variation="baseButtonProps.variation.ACTION"
            @click="emit('onNextStep')"
          />
        </div>
      </q-form>
    </footer>
  </section>
</template>

<style scoped>
.content {
  flex: 1 0 auto;
}
</style>

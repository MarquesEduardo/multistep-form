<script setup lang="ts">
import { baseButtonProps, BaseButton } from '@BaseUi';
import { SummaryCard } from './components';
import { PLANS } from './components/types';

const emit = defineEmits<{
  onBackToPlanSelection: [];
  onPreviousStep: [];
  onNextStep: [];
}>();

const DETAILS = {
  name: 'Arcade',
  price: 9,
  type: PLANS.MONTHLY,
};
</script>

<template>
  <section class="flex h-full flex-col px-14 py-8 sm:w-[70%]">
    <main class="content">
      <div class="mb-6 flex flex-col items-start justify-start gap-1">
        <h2 class="text-2xl font-bold text-blue-dark">Finishing up</h2>

        <p class="text-gray">Double-check everything looks OK before confirming.</p>
      </div>

      <SummaryCard
        v-bind="DETAILS"
        @click="emit('onBackToPlanSelection')"
      />
    </main>

    <footer class="shrink text-blue-dark">
      <q-form class="q-gutter-md flex flex-col gap-2">
        <div class="flex justify-between">
          <BaseButton
            label="Go Back"
            :variation="baseButtonProps.variation.SUBTLE"
            @click="emit('onPreviousStep')"
          />

          <BaseButton @click="emit('onNextStep')" />
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

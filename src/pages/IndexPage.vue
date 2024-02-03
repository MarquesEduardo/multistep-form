<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useOnboardingStore } from '../stores/onboarding';
import StepsSidebar from '../components/StepsSidebar.vue';
import { InfoStep, PlanStep, AddonsStep, FinishingStep, ThankYou } from '../sections';

const { step } = storeToRefs(useOnboardingStore());

function nextStep(id: number) {
  step.value = id;
}
</script>

<template>
  <div class="flex h-auto w-full items-center justify-center p-5 lg:h-full">
    <StepsSidebar
      mobile
      :step="step"
    />

    <div
      class="z-20 mb-32 mt-24 flex h-max w-[740px] flex-nowrap items-center justify-center rounded-lg bg-white p-3 shadow-lg shadow-slate-200 sm:mt-0 lg:mb-0 lg:h-[450px] lg:justify-between"
    >
      <StepsSidebar :step="step" />

      <Transition mode="out-in">
        <InfoStep
          v-if="step === 1"
          @onNextStep="nextStep(2)"
        />

        <PlanStep
          v-else-if="step === 2"
          @onNextStep="nextStep(3)"
          @onPreviousStep="nextStep(1)"
        />

        <AddonsStep
          v-else-if="step === 3"
          @onNextStep="nextStep(4)"
          @onPreviousStep="nextStep(2)"
        />

        <FinishingStep
          v-else-if="step === 4"
          @onBackToPlanSelection="step = 2"
          @onNextStep="nextStep(5)"
          @onPreviousStep="nextStep(3)"
        />

        <ThankYou v-else-if="step === 5" />
      </Transition>
    </div>
  </div>
</template>

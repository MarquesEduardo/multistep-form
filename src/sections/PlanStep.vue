<script setup lang="ts">
import { ref, watch } from 'vue';
import { storeToRefs } from 'pinia';
import { baseButtonProps, BaseButton } from '@BaseUi';
import { ACTIVE_PLANS } from '@Constants';
import { PLANS } from '@Types';
import { useOnboardingStore } from '../stores/onboarding';
import { PlanCard } from './components';

const emit = defineEmits<{
  onPreviousStep: [];
  onNextStep: [];
}>();

const { selectedPlanId, planType } = storeToRefs(useOnboardingStore());
const isYearly = ref(planType.value === PLANS.YEARLY);

watch(isYearly, (type) =>
  type ? (planType.value = PLANS.YEARLY) : (planType.value = PLANS.MONTHLY)
);
</script>

<template>
  <section class="flex h-full flex-col px-4 py-6 sm:w-[70%] lg:px-14 lg:py-8">
    <main class="content">
      <div class="mb-6 flex flex-col items-start justify-start gap-1">
        <h2 class="text-2xl font-bold text-blue-dark">Select your plan</h2>

        <p class="text-gray">You have the option of monthly or yearly billing.</p>
      </div>

      <div class="flex gap-3">
        <PlanCard
          v-for="plan in ACTIVE_PLANS"
          v-bind="plan"
          :class="[plan.id === selectedPlanId ? 'bg-purple-light border-purple-dark' : '']"
          :key="plan.id"
          :showDiscounts="isYearly"
          :planType="planType"
          @click="selectedPlanId = plan.id"
        />
      </div>

      <div class="my-5 flex w-full justify-center rounded bg-gray-light">
        <div class="flex max-w-[200px] items-center justify-evenly">
          <label :class="[isYearly ? 'text-gray' : ' text-blue-dark']"> Montly </label>

          <q-toggle
            v-model="isYearly"
            dark
            keep-color
            color="blue"
          />

          <label :class="[!isYearly ? 'text-gray' : ' text-blue-dark']">Yearly</label>
        </div>
      </div>
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
            :disable="!selectedPlanId"
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

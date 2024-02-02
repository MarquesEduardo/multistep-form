<script setup lang="ts">
import { ref, watch } from 'vue';
import { storeToRefs } from 'pinia';
import { baseButtonProps, BaseButton } from '@BaseUi';
import { useOnboardingStore } from '../stores/onboarding';
import { PlanCard } from './components';
import { PLANS, type Plan } from './components/types';

const emit = defineEmits<{
  onPreviousStep: [];
  onNextStep: [];
}>();

const { selectedPlan, planType } = storeToRefs(useOnboardingStore());
const isYearly = ref(false);

const ACTIVE_PLANS = ref<Plan[]>([
  {
    id: 1,
    name: 'Arcade',
    icon: 'icon-arcade.svg',
    price: '$90/yr',
    type: PLANS.MONTHLY,
    discount: '2 months free',
  },
  {
    id: 2,
    name: 'Advanced',
    icon: 'icon-advanced.svg',
    price: '$120/yr',
    type: PLANS.MONTHLY,
    discount: '2 months free',
  },
  {
    id: 3,
    name: 'Pro',
    icon: 'icon-pro.svg',
    price: '$150/yr',
    type: PLANS.MONTHLY,
    discount: '2 months free',
  },
]);

watch(isYearly, (type) =>
  type ? (planType.value = PLANS.YEARLY) : (planType.value = PLANS.MONTHLY)
);
</script>

<template>
  <section class="flex h-full flex-col px-14 py-8 sm:w-[70%]">
    <main class="content">
      <div class="mb-6 flex flex-col items-start justify-start gap-1">
        <h2 class="text-2xl font-bold text-blue-dark">Select your plan</h2>

        <p class="text-gray">You have the option of monthly or yearly billing.</p>
      </div>

      <div class="flex gap-3">
        <PlanCard
          v-for="plan in ACTIVE_PLANS"
          v-bind="plan"
          :class="[plan.id === selectedPlan ? 'bg-purple-light border-purple-dark' : '']"
          :key="plan.id"
          :showDiscounts="isYearly"
          @click="selectedPlan = plan.id"
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

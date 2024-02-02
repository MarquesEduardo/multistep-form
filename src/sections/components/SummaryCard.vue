<script setup lang="ts">
import { computed } from 'vue';
import { storeToRefs } from 'pinia';
import { PLANS } from '@Types';
import { useOnboardingStore } from '../../stores/onboarding';

const emit = defineEmits<{
  onBackToPlanSelection: [];
}>();

const ONBOARDING_STORE = useOnboardingStore();
const { planType } = storeToRefs(ONBOARDING_STORE);
const { getSelectedPlan, getSelectedAddons } = ONBOARDING_STORE;

const isMontly = computed(() => planType.value === PLANS.MONTHLY);

const details = computed(() =>
  isMontly.value
    ? {
        abbr: 'mo',
        price: getSelectedPlan.montlyPrice,
      }
    : {
        abbr: 'yr',
        price: getSelectedPlan.yearlyPrice,
      }
);

const planTotal = computed(() => {
  let addonsTotal = 0;

  getSelectedAddons.forEach(({ montlyPrice, yearlyPrice }) => {
    isMontly.value ? (addonsTotal += montlyPrice) : (addonsTotal += yearlyPrice);
  });
  return details.value.price + addonsTotal;
});
</script>

<template>
  <section>
    <div
      class="active:bg-purple-light flex flex-col justify-between rounded-md bg-gray-light p-3 transition-colors"
    >
      <div
        class="border-gray-lighter flex justify-between rounded-md rounded-b-none border-b border-solid p-2"
      >
        <div>
          <h3 class="font-medium leading-none text-blue-dark">
            {{ getSelectedPlan.name }} ({{ planType }})
          </h3>

          <p
            class="mt-1 cursor-pointer text-sm text-gray underline"
            @click="emit('onBackToPlanSelection')"
          >
            Change
          </p>
        </div>

        <p class="text-xs font-bold text-blue-dark">${{ details.price }}/{{ details.abbr }}</p>
      </div>

      <div
        v-for="{ id, name, montlyPrice, yearlyPrice } in getSelectedAddons"
        :key="`${id}-${name}`"
        class="flex justify-between rounded-md p-2"
      >
        <p class="text-xs font-medium text-gray">{{ name }}</p>

        <p
          v-if="isMontly"
          class="text-xs text-blue-dark"
        >
          +${{ montlyPrice }}/{{ details.abbr }}
        </p>

        <p
          v-else
          class="text-xs text-blue-dark"
        >
          +${{ yearlyPrice }}/{{ details.abbr }}
        </p>
      </div>
    </div>

    <div class="flex justify-between rounded-md p-2">
      <p class="text-xs text-gray">Total (per {{ isMontly ? 'month' : 'year' }})</p>

      <p class="text-sm font-bold text-purple-dark">+${{ planTotal }}/{{ details.abbr }}</p>
    </div>
  </section>
</template>

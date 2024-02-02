<script setup lang="ts">
import { computed } from 'vue';
import { PLANS } from '@Types';

interface Plan {
  name: string;
  icon: string;
  montlyPrice: number;
  yearlyPrice: number;
  planType: PLANS;
  discount: string;
  showDiscounts: boolean;
}

const props = defineProps<Plan>();

const iconSrc = computed(() => {
  return new URL(`../../assets/images/${props.icon}`, import.meta.url).href;
});
</script>

<template>
  <div
    class="border-gray-lighter flex h-[50] w-full cursor-pointer flex-row items-center justify-start gap-3 rounded-md border border-solid p-3 transition-colors hover:border-purple-dark lg:h-[150px] lg:w-[120px] lg:flex-col lg:items-start lg:justify-between lg:gap-0"
  >
    <img
      class="w-fit"
      :src="iconSrc"
    />

    <div class="flex flex-col gap-1">
      <h3 class="font-medium leading-none text-blue-dark">{{ name }}</h3>

      <p
        v-if="planType === PLANS.MONTHLY"
        class="text-xs font-medium text-gray"
      >
        ${{ montlyPrice }}/mo
      </p>

      <p
        v-else
        class="text-xs font-medium text-gray"
      >
        ${{ yearlyPrice }}/yr
      </p>

      <Transition>
        <p
          v-show="showDiscounts"
          class="text-xs text-blue-dark"
        >
          {{ discount }}
        </p>
      </Transition>
    </div>
  </div>
</template>

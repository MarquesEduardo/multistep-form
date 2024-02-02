<script setup lang="ts">
import { computed } from 'vue';
import { PLANS } from './types';

interface Details {
  name: string;
  price: number;
  type: PLANS;
}

const emit = defineEmits<{
  onBackToPlanSelection: [];
}>();

const props = defineProps<Details>();

const planVariations = computed(() =>
  props.type === PLANS.MONTHLY
    ? {
        abbr: 'mo',
        onlineService: 1,
        largerStore: 2,
      }
    : {
        abbr: 'mo',
        onlineService: 10,
        largerStore: 20,
      }
);

const planTotal = computed(() => {
  const { onlineService, largerStore } = planVariations.value;

  return props.price + onlineService + largerStore;
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
          <h3 class="font-medium leading-none text-blue-dark">{{ name }} ({{ type }})</h3>

          <p
            class="mt-1 cursor-pointer text-sm text-gray underline"
            @click="emit('onBackToPlanSelection')"
          >
            Change
          </p>
        </div>

        <p class="text-xs font-bold text-blue-dark">${{ price }}/{{ planVariations.abbr }}</p>
      </div>

      <div class="flex justify-between rounded-md p-2">
        <p class="text-xs font-medium text-gray">Online service</p>

        <p class="text-xs text-blue-dark">
          +${{ planVariations.onlineService }}/{{ planVariations.abbr }}
        </p>
      </div>

      <div class="flex justify-between rounded-md p-2">
        <p class="text-xs font-medium text-gray">Larger store</p>

        <p class="text-xs text-blue-dark">
          +${{ planVariations.largerStore }}/{{ planVariations.abbr }}
        </p>
      </div>
    </div>

    <div class="flex justify-between rounded-md p-2">
      <p class="text-xs text-gray">Total ({{ type }})</p>

      <p class="text-sm font-bold text-purple-dark">+${{ planTotal }}/{{ planVariations.abbr }}</p>
    </div>
  </section>
</template>

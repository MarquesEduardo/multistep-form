<script setup lang="ts">
import { computed } from 'vue';

interface Plan {
  name: string;
  icon: string;
  price: string;
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
    class="border-gray-lighter flex h-[150px] w-[120px] cursor-pointer flex-col justify-between rounded-md border border-solid p-3 transition-colors hover:border-purple-dark"
  >
    <img
      class="w-fit"
      :src="iconSrc"
    />

    <div class="flex flex-col gap-1">
      <h3 class="font-medium leading-none text-blue-dark">{{ name }}</h3>

      <p class="text-xs font-medium text-gray">{{ price }}</p>

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

<script setup lang="ts">
import { ref } from 'vue';
import { baseButtonProps, BaseButton } from '@BaseUi';
import { PLANS } from './components/types';

const emit = defineEmits<{
  onPreviousStep: [];
  onNextStep: [];
}>();

interface Addon {
  id: number;
  name: string;
  description: string;
  montlyPrice: number;
  yearlyPrice: number;
}

const selectedAddons = ref<number[]>([]);
const planType = ref(PLANS.MONTHLY);

const ADDONS = ref<Addon[]>([
  {
    id: 1,
    name: 'Online service',
    description: 'Access to multiplayer games',
    montlyPrice: 1,
    yearlyPrice: 10,
  },
  {
    id: 2,
    name: 'Larger storages',
    description: 'Extra 1TB of cloud save',
    montlyPrice: 2,
    yearlyPrice: 20,
  },
  {
    id: 3,
    name: 'Customizable profile',
    description: 'Custom theme on your profile',
    montlyPrice: 2,
    yearlyPrice: 20,
  },
]);
</script>

<template>
  <section class="flex h-full flex-col px-14 py-8 sm:w-[70%]">
    <main class="content">
      <div class="mb-6 flex flex-col items-start justify-start gap-1">
        <h2 class="text-2xl font-bold text-blue-dark">Pick add-ons</h2>

        <p class="text-gray">Add-ons help enhance your gaming experience.</p>
      </div>

      <div class="flex flex-col gap-3">
        <label
          v-for="{ id, name, description, montlyPrice, yearlyPrice } in ADDONS"
          :key="id"
          :for="`${id}-${name}`"
          :class="[
            ' flex cursor-pointer items-center justify-between rounded-md border p-3 px-5',
            selectedAddons.includes(id) ? 'bg-purple-light border-purple' : 'border-gray-lighter',
          ]"
        >
          <div class="flex items-center justify-start gap-5">
            <label
              :for="`${id}-${name}`"
              :class="[
                'p1-border-gray-lighter flex size-[15px] items-center justify-center rounded border',
                selectedAddons.includes(id)
                  ? 'border-purple bg-purple-dark text-white'
                  : 'bg-white',
              ]"
            >
              <Transition>
                <q-icon
                  v-show="selectedAddons.includes(id)"
                  name="done"
                />
              </Transition>
            </label>

            <input
              v-model="selectedAddons"
              class="hidden"
              name="plan_addons"
              type="checkbox"
              :value="id"
              :id="`${id}-${name}`"
            />

            <section class="m-0 flex flex-col gap-0.5">
              <p class="text-xs font-bold text-blue-dark">{{ name }}</p>

              <p class="text-xs text-gray">{{ description }}</p>
            </section>
          </div>

          <p
            v-if="planType === PLANS.MONTHLY"
            class="text-xs text-purple-dark"
          >
            +${{ montlyPrice }}/mo
          </p>

          <p
            v-else
            class="text-sm text-purple"
          >
            +${{ yearlyPrice }}/yr
          </p>
        </label>
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

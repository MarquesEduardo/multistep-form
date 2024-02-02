<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { baseButtonProps, BaseButton } from '@BaseUi';
import { ADDONS } from '@Constants';
import { PLANS } from '@Types';
import { useOnboardingStore } from '../stores/onboarding';

const emit = defineEmits<{
  onPreviousStep: [];
  onNextStep: [];
}>();

const { planAddons, planType } = storeToRefs(useOnboardingStore());
</script>

<template>
  <section class="flex h-full flex-col px-0 py-6 sm:w-[70%] lg:px-14 lg:py-8">
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
            ' flex cursor-pointer items-center justify-between rounded-md border p-3 px-2 lg:px-5',
            planAddons.includes(id) ? 'bg-purple-light border-purple-dark' : 'border-gray-lighter',
          ]"
        >
          <div class="flex items-center justify-start gap-5">
            <label
              :for="`${id}-${name}`"
              :class="[
                'p1-border-gray-lighter flex size-[15px] items-center justify-center rounded border',
                planAddons.includes(id) ? 'border-purple bg-purple-dark text-white' : 'bg-white',
              ]"
            >
              <Transition>
                <q-icon
                  v-show="planAddons.includes(id)"
                  name="done"
                />
              </Transition>
            </label>

            <input
              v-model="planAddons"
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
            class="text-xs text-purple-dark"
          >
            +${{ yearlyPrice }}/yr
          </p>
        </label>
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

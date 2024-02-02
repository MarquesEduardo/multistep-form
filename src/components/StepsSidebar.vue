<script setup lang="ts">
defineProps<{
  step: number;
  mobile?: boolean;
}>();

interface Step {
  id: number;
  title: string;
}

const STEPS: Step[] = [
  {
    id: 1,
    title: 'Your Info',
  },
  {
    id: 2,
    title: 'Select Plan',
  },
  {
    id: 3,
    title: 'Add-Ons',
  },
  {
    id: 4,
    title: 'Summary',
  },
];
</script>

<template>
  <Transition mode="out-in">
    <div
      v-if="mobile"
      class="absolute top-[49px] z-10 flex h-64 w-full items-start justify-center gap-4 rounded-none bg-mobile bg-cover bg-bottom pt-10 lg:hidden"
    >
      <div
        v-for="{ id } in STEPS"
        :key="id"
        class="flex items-center gap-4"
      >
        <p
          :class="[
            'w-9 cursor-pointer rounded-full border border-solid p-1 text-center text-lg text-white',
            { 'is-active': id === step },
          ]"
        >
          {{ id }}
        </p>
      </div>
    </div>

    <div
      v-else
      class="hidden h-full w-[205px] flex-col gap-6 rounded-lg bg-desktop bg-cover px-6 py-8 lg:!flex"
      id="steps-sidebar-desktop"
    >
      <div
        v-for="{ id, title } in STEPS"
        :key="`${id}-${title}`"
        class="flex items-center gap-4"
      >
        <p
          :class="[
            'w-8 cursor-default rounded-full border border-solid p-1 text-center text-white',
            { 'is-active': id === step },
          ]"
        >
          {{ id }}
        </p>

        <div class="uppercase">
          <p class="text-gray-lighter mb-0.5 cursor-default font-ubuntu text-xs opacity-90">
            Step {{ id }}
          </p>
          <p class="cursor-default font-ubuntu text-xs font-bold text-white">{{ title }}</p>
        </div>
      </div>
    </div>
  </Transition>
</template>

<style scoped>
.is-active {
  @apply border-white bg-green font-medium !text-black;
}
</style>

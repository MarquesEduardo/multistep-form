<script setup lang="ts">
defineProps({
  mobile: Boolean,
});
</script>

<template>
  <div
    v-if="mobile"
    class="absolute top-[49px] z-10 flex h-64 w-full items-start justify-center gap-4 rounded-none bg-mobile bg-cover bg-bottom pt-10 sm:hidden"
    id="steps-sidebar-mobile"
  >
    <div
      class="flex items-center gap-4"
      id="step-1"
    >
      <p
        class="w-9 cursor-pointer rounded-full border border-solid p-1 text-center text-lg text-white"
      >
        1
      </p>
    </div>

    <div
      class="flex items-center gap-4"
      id="step-2"
    >
      <p
        class="w-9 cursor-pointer rounded-full border border-solid p-1 text-center text-lg text-white"
      >
        2
      </p>
    </div>

    <div
      class="flex items-center gap-4"
      id="step-3"
    >
      <p
        class="w-9 cursor-pointer rounded-full border border-solid p-1 text-center text-lg text-white"
      >
        3
      </p>
    </div>

    <div
      class="flex items-center gap-4"
      id="step-4"
    >
      <p
        class="w-9 cursor-pointer rounded-full border border-solid p-1 text-center text-lg text-white"
      >
        4
      </p>
    </div>
  </div>

  <div
    v-else
    class="hidden h-full w-[205px] flex-col gap-6 rounded-lg bg-desktop bg-cover px-6 py-8 sm:!flex"
    id="steps-sidebar-desktop"
  >
    <div
      class="flex items-center gap-4"
      id="step-1"
    >
      <p
        class="is-active w-8 cursor-default rounded-full border border-solid p-1 text-center text-white"
      >
        1
      </p>

      <div class="uppercase">
        <p class="text-gray mb-0.5 cursor-default font-ubuntu text-xs">Step 1</p>
        <p class="cursor-default font-ubuntu text-xs font-bold text-white">Your info</p>
      </div>
    </div>

    <div
      class="flex items-center gap-4"
      id="step-2"
    >
      <p class="w-8 cursor-default rounded-full border border-solid p-1 text-center text-white">
        2
      </p>

      <div class="uppercase">
        <p class="text-gray mb-0.5 cursor-default font-ubuntu text-xs">Step 2</p>
        <p class="cursor-default font-ubuntu text-xs font-bold text-white">select plan</p>
      </div>
    </div>

    <div
      class="flex items-center gap-4"
      id="step-3"
    >
      <p class="w-8 cursor-default rounded-full border border-solid p-1 text-center text-white">
        3
      </p>

      <div class="uppercase">
        <p class="text-gray mb-0.5 cursor-default font-ubuntu text-xs">Step 3</p>
        <p class="cursor-default font-ubuntu text-xs font-bold text-white">add-ons</p>
      </div>
    </div>

    <div
      class="flex items-center gap-4"
      id="step-4"
    >
      <p class="w-8 cursor-default rounded-full border border-solid p-1 text-center text-white">
        4
      </p>

      <div class="uppercase">
        <p class="text-gray mb-0.5 cursor-default font-ubuntu text-xs">Step 4</p>
        <p class="cursor-default font-ubuntu text-xs font-bold text-white">summary</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.is-active {
  @apply bg-green font-medium !text-black;
}
</style>

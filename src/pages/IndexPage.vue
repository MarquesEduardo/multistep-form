<script setup lang="ts"></script>

<template>
  <div class="w-full h-full p-5 flex items-center justify-center">
    <div
      class="absolute sm:hidden top-[49px] flex gap-4 items-start pt-10 justify-center z-10 bg-mobile rounded-none bg-bottom bg-cover w-full h-64"
      id="steps-sidebar-mobile"
    >
      <div class="flex gap-4 items-center" id="step-1">
        <p
          class="text-white border border-solid text-lg rounded-full p-1 text-center w-9"
        >
          1
        </p>
      </div>

      <div class="flex gap-4 items-center" id="step-2">
        <p
          class="text-white border border-solid text-lg rounded-full p-1 text-center w-9"
        >
          2
        </p>
      </div>

      <div class="flex gap-4 items-center" id="step-3">
        <p
          class="text-white border border-solid text-lg rounded-full p-1 text-center w-9"
        >
          3
        </p>
      </div>

      <div class="flex gap-4 items-center" id="step-4">
        <p
          class="text-white border border-solid text-lg rounded-full p-1 text-center w-9"
        >
          4
        </p>
      </div>
    </div>

    <div
      class="flex p-3 items-center z-20 mt-10 sm:mt-0 justify-between bg-white rounded-lg shadow-lg shadow-slate-200 w-[700px] h-[450px]"
      id="form-card"
    >
      <div
        class="sm:!flex flex-col gap-6 hidden px-6 py-8 bg-desktop rounded-lg bg-cover w-[205px] h-full"
        id="steps-sidebar-desktop"
      >
        <div class="flex gap-4 items-center" id="step-1">
          <p
            class="text-white border border-solid rounded-full p-1 text-center w-8"
          >
            1
          </p>

          <div class="uppercase">
            <p class="font-ubuntu text-xs text-gray-text mb-0.5">Step 1</p>
            <p class="font-ubuntu text-xs font-bold text-white">Your info</p>
          </div>
        </div>

        <div class="flex gap-4 items-center" id="step-2">
          <p
            class="text-white border border-solid rounded-full p-1 text-center w-8"
          >
            2
          </p>

          <div class="uppercase">
            <p class="font-ubuntu text-xs text-gray-text mb-0.5">Step 2</p>
            <p class="font-ubuntu text-xs font-bold text-white">select plan</p>
          </div>
        </div>

        <div class="flex gap-4 items-center" id="step-3">
          <p
            class="text-white border border-solid rounded-full p-1 text-center w-8"
          >
            3
          </p>

          <div class="uppercase">
            <p class="font-ubuntu text-xs text-gray-text mb-0.5">Step 3</p>
            <p class="font-ubuntu text-xs font-bold text-white">add-ons</p>
          </div>
        </div>

        <div class="flex gap-4 items-center" id="step-4">
          <p
            class="text-white border border-solid rounded-full p-1 text-center w-8"
          >
            4
          </p>

          <div class="uppercase">
            <p class="font-ubuntu text-xs text-gray-text mb-0.5">Step 4</p>
            <p class="font-ubuntu text-xs font-bold text-white">summary</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

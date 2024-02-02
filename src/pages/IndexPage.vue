<script setup lang="ts">
import StepsSidebar from '../components/StepsSidebar.vue';
import { StepOne, StepTwo, StepThree, StepFour } from '../sections';
</script>

<template>
  <div class="w-full h-full p-5 flex items-center justify-center">
    <StepsSidebar mobile />

    <div
      class="flex flex-nowrap p-3 items-center z-20 mt-10 sm:mt-0 justify-between bg-white rounded-lg shadow-lg shadow-slate-200 w-[740px] h-[450px]"
      id="form-card"
    >
      <StepsSidebar />
      <StepOne />
    </div>
  </div>
</template>

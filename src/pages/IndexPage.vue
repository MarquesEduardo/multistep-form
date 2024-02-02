<script setup lang="ts">
import StepsSidebar from '../components/StepsSidebar.vue';
import { StepOne, StepTwo, StepThree, StepFour, PersonalInfoStep } from '../sections';
</script>

<template>
  <div class="flex h-full w-full items-center justify-center p-5">
    <StepsSidebar mobile />

    <div
      class="z-20 mt-10 flex h-[450px] w-[740px] flex-nowrap items-center justify-between rounded-lg bg-white p-3 shadow-lg shadow-slate-200 sm:mt-0"
      id="form-card"
    >
      <StepsSidebar />
      <!-- <StepOne /> -->
      <PersonalInfoStep />
    </div>
  </div>
</template>

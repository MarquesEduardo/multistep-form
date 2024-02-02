<script setup lang="ts">
import ThankYou from '../assets/images/icon-thank-you.svg';
</script>

<template>
  <section class="flex h-full px-14 py-8 sm:w-[70%]">
    <main>
      <div class="mb-6 flex h-full flex-col items-center justify-center gap-4 text-center">
        <img
          class="w-fit"
          :src="ThankYou"
        />
        <h2 class="text-2xl font-bold text-blue-dark">Thank you!</h2>

        <p class="text-gray">
          Thanks for confirming your subscription! We hope ypu have fun using our platform. If you
          ever need support, please feel free to email us at support@loremgaming.com.
        </p>
      </div>
    </main>
  </section>
</template>

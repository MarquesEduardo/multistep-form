<script setup lang="ts">
import { ref } from 'vue';
import { storeToRefs } from 'pinia';
import { useOnboardingStore } from '../stores/onboarding';
import EssentialLink from 'components/EssentialLink.vue';
import { type EssentialLinkProps } from '../components/EssentialLink.vue';

const essentialLinks: EssentialLinkProps[] = [
  {
    title: 'Documentação',
    caption: 'Readme',
    icon: 'school',
    link: 'https://github.com/MarquesEduardo/multistep-form?tab=readme-ov-file#frontend-mentor---multi-step-form',
  },
  {
    title: 'Github',
    caption: 'multistep-form',
    icon: 'code',
    link: 'https://github.com/MarquesEduardo/multistep-form',
  },
  {
    title: 'LinkedIn',
    caption: 'eduardopereiramarques',
    icon: 'public',
    link: 'https://www.linkedin.com/in/eduardopereiramarques/',
  },
];

const ONBOARDING_STORE = useOnboardingStore();
const { step } = storeToRefs(ONBOARDING_STORE);

const leftDrawerOpen = ref(false);

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value;
}

function onResetApp() {
  ONBOARDING_STORE.$reset();
}
</script>

<template>
  <q-layout
    class="h-screen w-full"
    view="lHh Lpr lFf"
  >
    <q-header
      class="bg-[#473EFF]"
      elevated
    >
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title> Multi Step Form </q-toolbar-title>

        <q-button
          v-if="step === 5"
          class="cursor-pointer"
          @click="onResetApp"
        >
          Reset App
        </q-button>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
    >
      <q-list>
        <q-item-label header> Links importantes </q-item-label>

        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container class="h-full w-full">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

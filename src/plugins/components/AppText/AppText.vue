<script setup>
import { computed } from 'vue';
import { TAGS, VARIATIONS } from './types';

const props = defineProps({
  tag: {
    type: String,
    default: 'p',
    validator: (value) => Object.values(TAGS).includes(value),
  },
  variation: {
    type: String,
    default: '500',
    validator: (value) => Object.values(VARIATIONS).includes(value),
  },
});

const classes = computed(() => {
  return ['app-text', `text-${props.variation}`];
});
</script>

<template>
  <component :is="tag" :class="classes">
    <slot />
  </component>
</template>

<style scoped>
.is-section-title {
  @apply uppercase;
}
</style>

<style>
.app-text {
  @apply text-strong text-base;
}
</style>

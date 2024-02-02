<script setup lang="ts">
import { COLORS } from '@Types';
import { ROLES, VARIATIONS } from './types';

withDefaults(
  defineProps<{
    color?: COLORS | string;
    disable?: boolean;
    label?: string;
    loading?: boolean;
    type?: ROLES;
    variation?: VARIATIONS;
  }>(),
  {
    color: 'default',
    label: 'Next Step',
    type: ROLES.SUBMIT,
    variation: VARIATIONS.PRIMARY,
  }
);
</script>

<template>
  <q-btn
    :color="color"
    :class="['base-button', color, variation]"
    :disable="disable"
    :label="label"
    :loading="loading"
    :type="type"
  />
</template>

<style scoped>
.base-button {
  @apply rounded-md py-2 text-xs capitalize text-white transition-colors before:shadow-none;
}

.base-button.primary {
  @apply bg-blue-dark hover:bg-blue;
}

.base-button.action {
  @apply bg-purple-dark hover:bg-purple;
}

.base-button.subtle {
  @apply bg-white !text-gray hover:!bg-white hover:!text-blue-dark;
}
</style>

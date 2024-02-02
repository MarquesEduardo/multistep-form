<script setup lang="ts">
import { ROLES_ENUM, TYPES_ENUM } from './types';

defineProps({
  disabled: Boolean,
  label: String,
  loading: Boolean,

  role: {
    default: ROLES_ENUM.BUTTON,
    type: String,
    validator: (value) => Object.values(ROLES_ENUM).includes(value),
  },

  type: {
    default: TYPES_ENUM.BG,
    type: String,
    validator: (value) => Object.values(TYPES_ENUM).includes(value),
  },
});

const emit = defineEmits(['click']);
</script>

<template>
  <button
    class="bg-blue-button active:scale-95 hover:bg-blue-950 transition-all text-white rounded-md flex items-center justify-center h-10 w-[96px] px-4 py-2"
    :disabled="disabled"
    :title="label"
    :type="role"
    @click="emit('click')"
  >
    {{ label }}

    <div v-if="loading">
      <div
        class="loader border border-solid border-transparent border-t-2 border-t-gray-200 border-l-2 border-l-gray-200 border-r-2 border-r-gray-200 h-6 rounded-full w-6"
      ></div>
    </div>
  </button>
</template>

<style scoped>
.loader {
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>

import BaseButton from './BaseButton.vue';
import { baseButtonProps } from './types';

// This export is necessary to not overwrite @vue/runtime-core
export {};

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    BaseButton: typeof BaseButton;
  }

  export interface ComponentCustomProperties {
    $baseButtonProps: typeof baseButtonProps;
  }
}

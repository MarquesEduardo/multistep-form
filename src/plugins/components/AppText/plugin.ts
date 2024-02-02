import Component from './AppText.vue';
import { AppTextProps } from './types';

export default {
  install: (app) => {
    app.component('AppText', Component);
    app.config.globalProperties.$AppTextProps = AppTextProps;
  },
};

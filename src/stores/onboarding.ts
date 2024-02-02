import { defineStore } from 'pinia';
import { PLANS } from '@Types';

interface State {
  name?: string;
  email?: string;
  phone?: string;
  selectedPlan?: number;
  planType: PLANS;
}

export const useOnboardingStore = defineStore('onboarding', {
  state: (): State => ({
    name: undefined,
    email: undefined,
    phone: undefined,
    selectedPlan: 1,
    planType: PLANS.MONTHLY,
  }),
  getters: {},
  actions: {},
});

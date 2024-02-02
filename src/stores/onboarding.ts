import { defineStore } from 'pinia';
import { ACTIVE_PLANS, ADDONS } from '@Constants';
import { PLANS } from '@Types';

interface State {
  step: number;
  name?: string;
  email?: string;
  phone?: string;
  selectedPlanId?: number;
  planType: PLANS;
  planAddons: number[];
}

export const useOnboardingStore = defineStore('onboarding', {
  state: (): State => ({
    step: 1,
    name: undefined,
    email: undefined,
    phone: undefined,
    selectedPlanId: undefined,
    planType: PLANS.MONTHLY,
    planAddons: [],
  }),

  getters: {
    getSelectedPlan(state) {
      return state.selectedPlanId ? ACTIVE_PLANS[state.selectedPlanId - 1] : [];
    },

    getSelectedAddons(state) {
      return ADDONS.filter(({ id }) => state.planAddons.includes(id));
    },
  },
  persist: {
    enabled: true,
  },
});

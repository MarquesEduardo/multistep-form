enum PLANS {
  MONTHLY = 'monthly',
  YEARLY = 'yearly',
}

interface Plan {
  id: number;
  name: string;
  icon: string;
  montlyPrice: number;
  yearlyPrice: number;
  type: PLANS;
  discount: string;
}

interface Addon {
  id: number;
  name: string;
  description: string;
  montlyPrice: number;
  yearlyPrice: number;
}

export { PLANS, type Plan, type Addon };

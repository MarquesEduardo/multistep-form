import { PLANS } from '@Types';

interface Plan {
  id: number;
  name: string;
  icon: string;
  price: string;
  type: PLANS;
  discount: string;
}

export { PLANS, type Plan };

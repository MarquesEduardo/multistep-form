import { PLANS, type Plan, type Addon } from '@Types';

const ACTIVE_PLANS: Plan[] = [
  {
    id: 1,
    name: 'Arcade',
    icon: 'icon-arcade.svg',
    montlyPrice: 9,
    yearlyPrice: 90,
    type: PLANS.MONTHLY,
    discount: '2 months free',
  },
  {
    id: 2,
    name: 'Advanced',
    icon: 'icon-advanced.svg',
    montlyPrice: 12,
    yearlyPrice: 120,
    type: PLANS.MONTHLY,
    discount: '2 months free',
  },
  {
    id: 3,
    name: 'Pro',
    icon: 'icon-pro.svg',
    montlyPrice: 15,
    yearlyPrice: 150,
    type: PLANS.MONTHLY,
    discount: '2 months free',
  },
];

const ADDONS: Addon[] = [
  {
    id: 1,
    name: 'Online service',
    description: 'Access to multiplayer games',
    montlyPrice: 1,
    yearlyPrice: 10,
  },
  {
    id: 2,
    name: 'Larger storages',
    description: 'Extra 1TB of cloud save',
    montlyPrice: 2,
    yearlyPrice: 20,
  },
  {
    id: 3,
    name: 'Customizable profile',
    description: 'Custom theme on your profile',
    montlyPrice: 2,
    yearlyPrice: 20,
  },
];

export { ACTIVE_PLANS, ADDONS };

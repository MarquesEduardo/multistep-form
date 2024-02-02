import { COLORS } from '@Types';

enum ROLES {
  BUTTON = 'button',
  SUBMIT = 'submit',
}

enum VARIATIONS {
  ACTION = 'action',
  PRIMARY = 'primary',
  SUBTLE = 'subtle',
}

const baseButtonProps = {
  color: COLORS,
  type: ROLES,
  variation: VARIATIONS,
};

export { baseButtonProps, ROLES, VARIATIONS };

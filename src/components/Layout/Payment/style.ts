import { styled } from '@styles/theme';

export const PaymentData = styled('div', {
  marginBottom: '$md',

  '@lg': {
    marginBottom: '0'
  }
});
export const PaymentType = styled('div', {
  borderRadius: '$small',
  background: '$smoother',
  border: '1px solid',
  borderColor: '$smoother',
  marginBottom: '$md',

  '@md': {
    marginBottom: '0'
  }
});

export const PaymentTypeContainer = styled('div', {
  padding: '$tiny',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: '$micro',
  cursor: 'pointer',

  '&:first-child': {
    borderRadius: '$small $small 0 0'
  },

  '&:last-child': {
    borderRadius: '0 0 $small $small'
  },

  '&:hover': {
    opacity: 0.8
  },

  variants: {
    active: {
      true: {
        background: '$smoothest',

        '&:hover': {
          opacity: '1'
        }
      }
    }
  }
});

export const PaymentTypeTitle = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '$micro',

  div: {
    height: 40,
    width: 40,
    backgroundColor: '$secondary_band'
  }
});

export const BackButton = styled('div', {
  display: 'flex',
  alignItems: 'end',
  justifyContent: 'end',
  height: 100,

  '@md': {
    height: 200
  }
});

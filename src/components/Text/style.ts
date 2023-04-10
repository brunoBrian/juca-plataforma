import { styled } from '@styles/theme';

export const Text = styled('p', {
  color: '$strong',
  fontSize: '$medium',
  fontWeight: '$regular',

  variants: {
    color: {
      true: {
        color: '$$color'
      }
    },
    weight: {
      light: {
        fontWeight: '$light'
      },
      bold: {
        fontWeight: '$bold'
      }
    },
    variant: {
      large: {
        fontWeight: '$light',
        fontSize: '$large'
      },
      large_semibold: {
        fontSize: '$large'
      },
      large_bold: {
        fontWeight: 'bold',
        fontSize: '$large'
      },
      base: {
        fontWeight: '$light',
        fontSize: '$base'
      },
      base_semibold: {
        fontSize: '$base'
      },
      base_bold: {
        fontWeight: 'bold',
        fontSize: '$base'
      },
      small: {
        fontWeight: '$light',
        fontSize: '$small'
      },
      small_semibold: {
        fontSize: '$small'
      },
      small_bold: {
        fontWeight: 'bold',
        fontSize: '$small'
      },
      xsmall: {
        fontWeight: '$light',
        fontSize: '$xsmall'
      },
      xsmall_semibold: {
        fontSize: '$xsmall'
      },
      xsmall_bold: {
        fontWeight: 'bold',
        fontSize: '$xsmall'
      }
    }
  }
});

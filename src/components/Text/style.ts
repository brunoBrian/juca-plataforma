import { styled } from '@styles/theme';

export const Text = styled('h1', {
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
      regular: {
        fontWeight: '$regular'
      },
      bold: {
        fontWeight: '$bold'
      }
    },
    variant: {
      h1: {
        fontSize: '$heading_1'
      },
      h2: {
        fontSize: '$heading_2'
      },
      h3: {
        fontSize: '$heading_3'
      },
      h4: {
        fontSize: '$heading_4'
      },
      h4_bold: {
        fontWeight: 'bold',
        fontSize: '$heading_4'
      },
      h5: {
        fontSize: '$heading_5'
      },
      h5_bold: {
        fontWeight: 'bold',
        fontSize: '$heading_5'
      },
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

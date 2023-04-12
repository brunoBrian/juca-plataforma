import { styled } from '@styles/theme';

export const Heading = styled('h1', {
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
      }
    },
    align: {
      center: {
        textAlign: 'center'
      },
      left: {
        textAlign: 'left'
      },
      right: {
        textAlign: 'right'
      }
    }
  }
});

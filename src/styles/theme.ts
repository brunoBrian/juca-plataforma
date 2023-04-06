import { createStitches } from '@stitches/react';

export const {
  config,
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme
} = createStitches({
  theme: {
    colors: {
      primary: '#fff',

      primary_band: '#FF6D44',
      secondary_band: '#4A57FF',

      feedback_success: '#0FEF83',
      feedback_warning: '#F0960F',
      feedback_error: '#D30D48',

      strongest: '#13141B',
      strong: '#353546',
      medium: '#8F8F9A',
      smooth: '#CACED4',
      smoother: '#E7EAEE',
      smoothest: '#FFFFFF'
    },
    space: {
      nano: '0.25rem', //4px
      micro: '0.5rem', //8px
      tiny: '1rem', //16px
      small: '1.25rem', //20px
      sm: '1.5rem', //24px
      md: '2rem', //32px
      lg: '2.5rem', //40px
      xl: '4rem' //64px
    },
    fontSizes: {
      xsmall: '0.688rem', //11px
      small: '0.75rem', //12px
      base: '0.875rem', //14px
      large: '1rem', //16px
      heading_5: '1.125rem', //18px
      heading_4: '1.25rem', //20px
      heading_3: '1.375rem', //22px
      heading_2: '1.563rem', //25px
      heading_1: '1.75rem', //28px
      heading: '2rem' //28px
    },
    fontWeights: {
      light: 300,
      medium: 500,
      bold: 700
    },
    lineHeights: {
      small: '1',
      medium: '1.5',
      large: '2'
    },
    borderWidths: {
      none: 0,
      hairline: '0.125rem',
      thin: '1px',
      medium: '2px',
      thick: '4px'
    },
    radii: {
      none: 0,
      micro: '0.25rem', //4px
      small: '0.5rem', //8px
      medium: '1rem', //16px
      circular: '50%'
    },
    media: {
      sm: '(min-width: 576px)',
      md: '(min-width: 768px)',
      lg: '(min-width: 992px)',
      xl: '(min-width: 1200px)',
      xxl: '(min-width: 1600px)',
      xxxl: '(min-width: 1920px)'
    }
  }
});

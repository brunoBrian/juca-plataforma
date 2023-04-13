import { styled } from '@styles/theme';

export const DropDown = styled('div', {
  margin: '$micro 0',
  position: 'relative'
});

export const DropDownContainer = styled('div', {
  width: '100%',
  border: '1px solid',
  borderColor: '$strong',
  borderRadius: '$small',
  padding: '$tiny',
  color: '$strong_medium',
  fontSize: '$large'
});

export const DropDownListContainer = styled('div', {
  width: '100%',
  border: '1px solid',
  borderColor: '$smooth',
  borderRadius: '$small',
  background: '$smoother',
  position: 'absolute',
  maxHeight: 400,
  overflow: 'auto',

  '&::-webkit-scrollbar': {
    width: 5,
    background: '$smoother',
    borderRadius: '$small'
  },

  '&::-webkit-scrollbar-thumb': {
    backgroundColor: '$smooth',
    borderRadius: '$small'
  }
});

export const ListItem = styled('div', {
  padding: '$tiny',
  borderRadius: '$small',

  '&:hover': {
    background: '$smooth',
    cursor: 'pointer'
  }
});

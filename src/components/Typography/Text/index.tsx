import { theme } from '@styles/theme';
import * as S from './style';

type Tag = 'p' | 'span' | 'strong';
type Variant =
  | 'large'
  | 'large_bold'
  | 'large_semibold'
  | 'base'
  | 'base_bold'
  | 'base_semibold'
  | 'small'
  | 'small_bold'
  | 'small_semibold'
  | 'xsmall'
  | 'xsmall_bold'
  | 'xsmall_semibold';

type TextProps = {
  children: React.ReactNode;
  tag?: Tag;
  weight?: 'light' | 'bold';
  variant?: Variant;
  color?: keyof typeof theme.colors;
};

export function Text({
  children,
  tag = 'p',
  weight = 'light',
  variant,
  color
}: TextProps) {
  return (
    <S.Text
      as={tag}
      weight={weight}
      variant={variant}
      css={{ color: '$' + color }}
    >
      {children}
    </S.Text>
  );
}

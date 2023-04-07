import { theme } from '@styles/theme';
import * as S from './style';

type Tag = 'p' | 'span' | 'strong' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5';
type Variant =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h4_bold'
  | 'h5'
  | 'h5_bold'
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
  weight?: 'light' | 'regular' | 'bold';
  variant?: Variant;
  color?: keyof typeof theme.colors;
};

export function Text({
  children,
  tag = 'h3',
  weight = 'light',
  variant,
  color
}: TextProps) {
  console.log(color);
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

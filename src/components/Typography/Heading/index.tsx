import { theme } from '@styles/theme';
import * as S from './style';

type Tag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5';
type Variant = 'h1' | 'h2' | 'h3' | 'h4' | 'h4_bold' | 'h5' | 'h5_bold';

type HeadingProps = {
  tag?: Tag;
  variant?: Variant;
  children: React.ReactNode;
  weight?: 'light' | 'bold';
  color?: keyof typeof theme.colors;
  align?: 'center' | 'left' | 'right';
};

export function Heading({
  color,
  variant,
  children,
  tag = 'h3',
  align = 'left',
  weight = 'light'
}: HeadingProps) {
  return (
    <S.Heading
      as={tag}
      align={align}
      weight={weight}
      variant={variant}
      css={{ color: '$' + color }}
    >
      {children}
    </S.Heading>
  );
}

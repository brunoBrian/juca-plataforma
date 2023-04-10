import { theme } from '@styles/theme';
import * as S from './style';

type Tag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5';
type Variant = 'h1' | 'h2' | 'h3' | 'h4' | 'h4_bold' | 'h5' | 'h5_bold';

type HeadingProps = {
  children: React.ReactNode;
  tag?: Tag;
  weight?: 'light' | 'bold';
  variant?: Variant;
  color?: keyof typeof theme.colors;
};

export function Heading({
  children,
  tag = 'h3',
  weight = 'light',
  variant,
  color
}: HeadingProps) {
  return (
    <S.Heading
      as={tag}
      weight={weight}
      variant={variant}
      css={{ color: '$' + color }}
    >
      {children}
    </S.Heading>
  );
}

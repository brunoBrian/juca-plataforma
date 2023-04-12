import { ReactNode } from 'react';

import * as S from './style';

type BoxBackgroundProps = {
  children: ReactNode;
  bordered?: boolean;
};

export function BoxBackground({ children, bordered }: BoxBackgroundProps) {
  return <S.Wrapper bordered={bordered}>{children}</S.Wrapper>;
}

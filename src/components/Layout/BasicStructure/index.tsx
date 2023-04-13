import { ReactNode } from 'react';

import { Heading } from '@components/Typography';
import * as S from './style';

type BasicStructureProps = {
  children: ReactNode;
  title: string;
  align?: 'center' | 'left' | 'right';
  isForm?: boolean;
};

export function BasicStructure({
  children,
  title,
  align = 'left',
  isForm
}: BasicStructureProps) {
  return (
    <S.Content small={isForm}>
      <S.Header>
        <Heading tag="h1" variant="h1" align={align}>
          {title}
        </Heading>
      </S.Header>
      {children}
    </S.Content>
  );
}

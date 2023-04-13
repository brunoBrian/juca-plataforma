import { useCallback, useState } from 'react';

import * as S from './style';

export type OptionsType = {
  name: string | number;
  value: string | number;
};

type DropdownOptionsType = {
  options: OptionsType[];
};

export function Dropdown({ options }: DropdownOptionsType) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<OptionsType>(options[0]);

  const toggling = useCallback(() => setIsOpen(open => !open), []);

  const onOptionClicked = useCallback(
    (value: OptionsType) => () => {
      setSelectedOption(value);
      setIsOpen(false);
    },
    []
  );

  return (
    <S.DropDown>
      <S.DropDownContainer onClick={toggling}>
        {selectedOption.name || 'Mangoes'}
      </S.DropDownContainer>
      {isOpen && (
        <S.DropDownListContainer>
          {options.map(option => (
            <S.ListItem onClick={onOptionClicked(option)} key={Math.random()}>
              {option.name}
            </S.ListItem>
          ))}
        </S.DropDownListContainer>
      )}
    </S.DropDown>
  );
}

import React from 'react';

// Libraries
import styled from 'styled-components';

const Label = styled.label``;

const SelectContainer = styled.div`
  width: 100%;
  min-width: 15ch;
  max-width: 30ch;
  border: 1px solid var(--select-border);
  border-radius: 0.25em;
  padding: 0.25em 0.5em;
  font-size: 1.25rem;
  cursor: pointer;
  line-height: 1.1;
  background-color: #fff;
  background-image: linear-gradient(to top, #f9f9f9, #fff 33%);

  display: grid;
  grid-template-areas: 'select';
  align-items: center;
  position: relative;

  &:after {
    grid-area: select;
    justify-self: end;
  }

  &::after {
    content: '';
    width: 0.8em;
    height: 0.5em;
    background-color: var(--select-arrow);
    clip-path: polygon(100% 0%, 0 0%, 50% 100%);
  }

  &--disabled {
    cursor: not-allowed;
    background-color: #eee;
    background-image: linear-gradient(to top, #ddd, #eee 33%);
  }
`;

const Span = styled.span``;

const Select = styled.select`
  /* A reset of styles, including removing the default dropdown arrow */
  appearance: none;
  /* Additional resets for further consistency */
  background-color: transparent;
  border: none;
  padding: 0 1em 0 0;
  margin: 0;
  width: 100%;
  font-family: inherit;
  font-size: inherit;
  cursor: inherit;
  line-height: inherit;
  outline: none;

  grid-area: select;

  &::-ms-expand {
    display: none;
  }

  &:focus + ${Span} {
    position: absolute;
    top: -1px;
    left: -1px;
    right: -1px;
    bottom: -1px;
    border: 2px solid var(--select-focus);
    border-radius: inherit;
  }
`;

const Option = styled.option``;

type optionObject = {
  label: string;
  value: string;
};

interface SelectProps {
  options?: optionObject[];
  label?: string;
}

const defaultOption = [
  {
    label: 'Option1',
    value: 'option1',
  },
  {
    label: 'Option2',
    value: 'option2',
  },
  {
    label: 'Option3',
    value: 'option3',
  },
  {
    label: 'Option4',
    value: 'option4',
  },
];

const SelectInput: React.FC<SelectProps> = ({
  options = defaultOption,
  label = 'Default Label',
}) => (
  <>
    <Label htmlFor={`select-${label.toLowerCase()}`}>{label}</Label>
    <SelectContainer>
      <Span></Span>
      <Select id={`select-${label.toLowerCase()}`}>
        {options.map(({ label, value }) => (
          <Option value={value}>{label}</Option>
        ))}
      </Select>
    </SelectContainer>
  </>
);

export default SelectInput;

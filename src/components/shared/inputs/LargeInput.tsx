import React from 'react';

// Libraries
import styled from 'styled-components';

const Input = styled.input`
  width: 100%;
  border: none;
  -webkit-appearance: none;
  -ms-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background: transparent;
  padding: 0.5rem 0.75rem;

  font-family: 'Poppins', sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 2.25rem;
  line-height: 3.375rem;
  color: var(--color-primary);

  &:focus {
    border: none;
    outline: none;
  }

  &::placeholder {
    color: var(--color-primary);
  }
`;

export default Input;

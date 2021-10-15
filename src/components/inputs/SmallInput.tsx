import React, { RefObject, useEffect, TextareaHTMLAttributes, ChangeEvent } from 'react';

// Libraries
import styled from 'styled-components';

const TextArea = styled.textarea`
  width: 100%;
  border: none;
  -webkit-appearance: none;
  -ms-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background: transparent;
  padding: 0.5rem 0.75rem;

  resize: none;
  text-rendering: auto;
  -webkit-rtl-ordering: logical;
  white-space: pre-wrap;
  overflow-wrap: break-word;
  column-count: initial !important;

  font-family: 'Poppins', sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 1.25rem;
  line-height: 1.625rem;
  color: var(--color-secondary);

  &:focus {
    border: none;
    outline: none;
  }
`;

const SmallInput: React.FC<TextareaHTMLAttributes<HTMLTextAreaElement>> = (props) => {
  const changeTextArea = (e: ChangeEvent<HTMLTextAreaElement>) => {
    // Reset field height
    e.target.style.height = 'inherit';

    // Get the computed styles for the element
    const computed = window.getComputedStyle(e.target);

    // Calculate the height
    const height =
      parseInt(computed.getPropertyValue('border-top-width'), 10) +
      parseInt(computed.getPropertyValue('padding-top'), 10) +
      e.target.scrollHeight +
      parseInt(computed.getPropertyValue('padding-bottom'), 10) +
      parseInt(computed.getPropertyValue('border-bottom-width'), 10);

    e.target.style.height = `${height}px`;
  };

  return (
    <TextArea
      {...props}
      onChange={(e) => {
        props.onChange ? props.onChange(e) : null;
        changeTextArea(e);
      }}
      style={{ height: 'auto' }}
    />
  );
};

export default SmallInput;

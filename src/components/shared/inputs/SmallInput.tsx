import React, { RefObject, useEffect, TextareaHTMLAttributes } from 'react';

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
  height: auto;
  max-height: 40vh;

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

interface SmallInputProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  ref: any;
}

const SmallInput: React.FC<SmallInputProps> = (props) => {
  useEffect(() => {
    if (props.ref) {
      props.ref.current.style.height = 'auto';
    }
  }, []);

  const changeTextArea = () => {
    if (props.ref) {
      props.ref.current.style.height = 'auto';
      props.ref.current.style.height = props.ref.current.scrollHeight + 'px';
    }
  };

  return (
    <TextArea
      {...props}
      onChange={(e) => {
        props.onChange ? props.onChange(e) : null;
        changeTextArea();
      }}
      style={{ height: 'auto' }}
    />
  );
};

export default SmallInput;

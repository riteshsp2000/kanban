import React, { HTMLAttributes, ChangeEvent } from 'react';

// Libraries
import styled from 'styled-components';

// Components
import { LargeInput, SmallInput } from '.';

interface ModalProps extends HTMLAttributes<HTMLDivElement> {
  show: boolean;
}

const ModalBackground = styled.div<ModalProps>`
  display: ${({ show }) => (show ? 'block' : 'none')};
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100vw;
  height: auto;
  min-height: 100vh;
  overflow: auto;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);
`;

const ModalContent = styled.div`
  background: var(--color-background-secondary);
  width: 90%;
  height: auto;
  max-width: 890px;
  min-height: 600px;

  border-radius: 12px;
  padding: 1.5rem 1rem;
  margin: auto auto;

  position: absolute;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
`;

interface ModalProps {
  titleValue: string | undefined;
  titleOnChange: (e: ChangeEvent<HTMLInputElement>, id: string) => void;
  textValue: string | undefined;
  textOnChange: (e: ChangeEvent<HTMLTextAreaElement>, id: string) => void;
  show: boolean;
  setShow: () => void;
  id: string;
}

const Modal: React.FC<ModalProps> = ({
  titleValue,
  titleOnChange,
  textValue,
  textOnChange,
  show,
  setShow,
  id,
}) => (
  // @ts-ignore
  <ModalBackground onClick={setShow} show={show}>
    <ModalContent>
      <LargeInput
        value={titleValue}
        onChange={(e) => titleOnChange(e, id)}
        type='text'
        placeholder='Title of this page'
      />
      <SmallInput
        value={textValue}
        onChange={(e) => textOnChange(e, id)}
        spellCheck={false}
        placeholder='Description of this page'
      />
    </ModalContent>
  </ModalBackground>
);

export default Modal;

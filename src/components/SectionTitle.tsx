import React, { ChangeEvent } from 'react';

// Libraries
import styled from 'styled-components';

// Components
import Heading2 from './typography/Heading2';
import { LargeInput } from '.';

// State Handlers
import { usePageDetails } from '../store/contexts/PageDetailsProvider';
import { PAGE_DETAILS } from '../store/types/pageDetails.action';

const Input = styled(LargeInput)`
  color: ${({ color }) => color};
  width: auto;
  height: auto;
  margin: 0px;
  padding: 0px;
  background: transparent;

  font-family: 'Poppins', sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 0.875rem;
  line-height: 1.375rem;
`;

const Wrapper = styled.div`
  width: 100%;
  height: 2.1rem;
  border-radius: 4px;
  padding: 0.7rem;

  display: flex;
  align-items: center;
  justify-content: flex-start;
  overflow: hidden;
  background: ${({ color }) => color};
`;

interface SectionTitleProps {
  title: string;
  columnId: string;
  color1: string;
  color2: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title, color1, color2, columnId }) => {
  const [, dispatch] = usePageDetails();

  const onChange = (e: ChangeEvent<HTMLInputElement>) =>
    dispatch({
      type: PAGE_DETAILS.UPDATE_COLUMN_TITLE,
      payload: {
        id: columnId,
        value: e.target.value,
      },
    });

  return (
    <Wrapper color={color1}>
      <Input value={title} placeholder='Section Title' onChange={onChange} color={color2} />
    </Wrapper>
  );
};

export default SectionTitle;

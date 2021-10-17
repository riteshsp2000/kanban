import React, { ChangeEvent, useState } from 'react';

// Libraries
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';

// Components
import { LargeInput, Heading2 } from '.';

// State Handlers
import { usePageDetails } from '../store/contexts/PageDetailsProvider';
import { PAGE_DETAILS } from '../store/types/pageDetails.action';

const Container = styled.div`
  position: relative;
`;

const Wrapper = styled.div`
  width: 100%;
  height: 2.1rem;
  border-radius: 4px;
  padding: 0.7rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
  overflow: hidden;
  background: ${({ color }) => color};
`;

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

const Menu = styled.div<{ show: boolean }>`
  transform-origin: top;
  background: ${({ color }) => color};
  transform: ${({ show }) => (show ? 'rotateX(0deg)' : 'rotateX(-90deg)')};
  transition: transform 0.3s linear;

  border-radius: 4px;
  position: absolute;
  top: 107%;
  width: 100%;
`;

const MenuItem = styled(Heading2)`
  color: ${({ color }) => color};
  width: 100%;
  height: auto;
  margin: 0px;
  padding: 0px;
  padding: 0.4rem 0.7rem;
`;

const Icon = styled(FontAwesomeIcon)`
  width: 45px;
  font-size: 0.8rem;

  &:hover {
    cursor: pointer;
  }
`;

interface SectionTitleProps {
  title: string;
  columnId: string;
  color1: string;
  color2: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title, color1, color2, columnId }) => {
  const [show, setShow] = useState(false);
  const [, dispatch] = usePageDetails();

  const onChange = (e: ChangeEvent<HTMLInputElement>) =>
    dispatch({
      type: PAGE_DETAILS.UPDATE_COLUMN_TITLE,
      payload: {
        id: columnId,
        value: e.target.value,
      },
    });

  const onClick = () => setShow((current) => !current);

  return (
    <Container>
      <Wrapper color={color1}>
        <Input value={title} placeholder='Section Title' onChange={onChange} color={color2} />

        <Icon icon={faEllipsisV} color={color2} onClick={onClick} />
      </Wrapper>

      <Menu show={show} color={color1}>
        <MenuItem color={color2}>Delete</MenuItem>
        <MenuItem color={color2}>Color</MenuItem>
      </Menu>
    </Container>
  );
};

export default SectionTitle;

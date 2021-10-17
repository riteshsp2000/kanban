import React, { ChangeEvent, useState } from 'react';

// Libraries
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisV, faEyeDropper, faTrashAlt } from '@fortawesome/free-solid-svg-icons';

// Components
import { LargeInput, Heading2 } from '.';

// State Handlers
import { usePageDetails } from '../store/contexts/PageDetailsProvider';
import { PAGE_DETAILS } from '../store/types/pageDetails.action';

const Container = styled.div`
  position: relative;
`;

const ColorWrapper = styled.div`
  width: auto;
  height: auto;
  border-radius: 4px;
  background: var(--color-background-primary);
`;

const ColorWrapper1 = styled(ColorWrapper)<{ show: boolean }>`
  position: absolute;
  top: 107%;
  width: 100%;

  transform-origin: top;
  transform: ${({ show }) => (show ? 'rotateX(0deg)' : 'rotateX(-90deg)')};
  transition: all 0.3s linear;
`;

const ColorWrapper2 = styled(ColorWrapper)<{ showColors: boolean }>`
  position: absolute;
  top: 320%;
  right: 0;
  width: 80%;

  transform-origin: top;
  transform: ${({ showColors }) => (showColors ? 'rotateX(0deg)' : 'rotateX(-90deg)')};
  transition: all 0.3s linear;
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

  transition: all 0.3s linear;
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

  transition: all 0.3s linear;
`;

const Menu = styled.div`
  background: ${({ color }) => color};
  border-radius: 4px;

  transition: all 0.3s linear;
`;

const MenuItemWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.4rem 0.7rem;
`;

const MenuItem = styled(Heading2)`
  color: ${({ color }) => color};
  width: 100%;
  height: auto;
  margin: 0px;
  padding: 0px;
  transition: all 0.3s linear;
`;

const IconWrapper = styled.div`
  height: auto;
  display: flex;
  justify-content: flex-end;
  padding-left: 0.4rem;
`;

const Icon = styled(FontAwesomeIcon)`
  font-size: 0.8rem;

  &:hover {
    cursor: pointer;
  }
`;

const ColorMenu = styled.div`
  background: ${({ color }) => color};
  border-radius: 4px;
  transition: all 0.3s linear;
`;

interface SectionTitleProps {
  title: string;
  columnId: string;
  color1: string;
  color2: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title, color1, color2, columnId }) => {
  const [show, setShow] = useState(false);
  const [showColors, setShowColors] = useState(false);
  const [state, dispatch] = usePageDetails();

  const onChange = (e: ChangeEvent<HTMLInputElement>) =>
    dispatch({
      type: PAGE_DETAILS.UPDATE_COLUMN_TITLE,
      payload: {
        id: columnId,
        value: e.target.value,
      },
    });

  const onClick = () => {
    setShow((current) => !current);
    if (show) {
      setShowColors(false);
    }
  };

  const onDeleteClick = () =>
    dispatch({
      type: PAGE_DETAILS.DELETE_COLUMN,
      payload: {
        columnId,
      },
    });

  const onClickColors = () => setShowColors((current) => !current);

  const onColorChoose = (color: string, background: string) =>
    dispatch({
      type: PAGE_DETAILS.UPDATE_COLUMN_COLOR,
      payload: {
        columnId,
        color,
        background,
      },
    });

  return (
    <Container>
      <Wrapper color={color1}>
        <Input value={title} placeholder='Section Title' onChange={onChange} color={color2} />

        <IconWrapper onClick={onClick}>
          <Icon icon={faEllipsisV} color={color2} />
        </IconWrapper>
      </Wrapper>

      <ColorWrapper1 show={show}>
        <Menu color={color1}>
          <MenuItemWrapper onClick={onDeleteClick}>
            <MenuItem color={color2}>Delete</MenuItem>

            <Icon icon={faTrashAlt} color={color2} />
          </MenuItemWrapper>
          <MenuItemWrapper onClick={onClickColors}>
            <MenuItem color={color2}>Color</MenuItem>

            <Icon icon={faEyeDropper} color={color2} />
          </MenuItemWrapper>
        </Menu>
      </ColorWrapper1>

      <ColorWrapper2 showColors={showColors}>
        <ColorMenu color={color1}>
          {state.colors.map(({ color, background, name }) => (
            <MenuItem
              onClick={() => onColorChoose(color, background)}
              style={{ padding: '0.3rem 0.7rem' }}
              color={color}
            >
              {name}
            </MenuItem>
          ))}
        </ColorMenu>
      </ColorWrapper2>
    </Container>
  );
};

export default SectionTitle;

import React, { ChangeEvent, useState } from 'react';

// Libraries
import styled from 'styled-components';

// Components
import { SectionTitle, Card, Modal } from '.';

const ColumnContainer = styled.div`
  display: inline-block;
  width: auto;
  height: auto;

  padding: 0.5rem;
`;

interface InitialStateObject {
  id: string;
  title: string;
  description: string;
}

const initialState = [
  {
    id: 'not-started-yet-1',
    title: 'Hey this is the first Card',
    description: 'The description for the first card',
  },
  {
    id: 'not-started-yet-2',
    title: 'Hey this is the first Card',
    description: 'The description for the first card',
  },
  {
    id: 'not-started-yet-3',
    title: 'Hey this is the first Card',
    description: 'The description for the first card',
  },
];

const CardsColumn: React.FC = () => {
  const [cards, setCards] = useState<InitialStateObject[] | []>(initialState);
  const [selected, setSelected] = useState<string | undefined>();

  const onModalTitleChange = (e: ChangeEvent<HTMLInputElement>, id: string) =>
    setCards((current) =>
      current.map((card) =>
        id === card.id
          ? {
              ...card,
              title: e.target.value,
            }
          : card,
      ),
    );

  const onModalDescriptionChange = (e: ChangeEvent<HTMLTextAreaElement>, id: string) =>
    setCards((current) =>
      current.map((card) =>
        id === card.id
          ? {
              ...card,
              description: e.target.value,
            }
          : card,
      ),
    );

  return (
    <ColumnContainer>
      <SectionTitle title='Not Started yet' color1='#1B3758' color2='#046EF4' />
      {cards.map(({ id, title, description }) => (
        <>
          <Card onClick={() => setSelected(id)} title={title} description={description} />
          <Modal
            titleValue={title}
            textValue={description}
            titleOnChange={onModalTitleChange}
            textOnChange={onModalDescriptionChange}
            show={selected === id}
            setShow={() => setSelected('unselected-card')}
            id={id}
          />
        </>
      ))}
    </ColumnContainer>
  );
};

export default CardsColumn;

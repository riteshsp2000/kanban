import React, { useState } from 'react';

import {
  Heading1,
  Heading2,
  Body1,
  Body2,
  LargeInput,
  SmallInput,
  Modal,
  Card,
} from '../components';

const IndexPage = () => {
  const [largeinput, setLargeInput] = useState<string | undefined>('');
  const [smallInput, setSmallInput] = useState<string | undefined>();
  const [showModal, setShowModal] = useState<boolean>(false);

  return (
    <div>
      <Heading1>Title of this Page</Heading1>
      <Body1>Description of this page if neede and what not etc etc</Body1>
      <Heading2>Title of Card</Heading2>
      <Body2>Description of the card</Body2>

      <LargeInput
        type='text'
        placeholder='Title of this page'
        value={largeinput}
        onChange={(e) => {
          console.log(e.target.value);
          setLargeInput(e.target.value);
        }}
      />
      <SmallInput
        placeholder='Description of this page'
        value={smallInput}
        onChange={(e) => setSmallInput(e.target.value)}
        spellCheck={false}
      />

      <Card setShow={setShowModal} title={largeinput} description={smallInput} />

      <Modal
        titleValue={largeinput}
        titleOnChange={(e) => setLargeInput(e.target.value)}
        textValue={smallInput}
        textOnChange={(e) => setSmallInput(e.target.value)}
        show={showModal}
        setShow={setShowModal}
      />
    </div>
  );
};

export default IndexPage;

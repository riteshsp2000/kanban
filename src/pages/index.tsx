import React, { useState, useRef, TextareaHTMLAttributes } from 'react';

import { Heading1, Heading2, Body1, Body2, LargeInput, SmallInput } from '../components';

const IndexPage = () => {
  const [largeinput, setLargeInput] = useState<string | undefined>('');
  const [smallInput, setSmallInput] = useState<string | undefined>();
  const descriptionRef = useRef<TextareaHTMLAttributes<HTMLTextAreaElement>>();

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
        ref={descriptionRef}
        placeholder='Description of this page'
        value={smallInput}
        onChange={(e) => setSmallInput(e.target.value)}
        spellCheck={false}
      />
    </div>
  );
};

export default IndexPage;

import styled from 'styled-components';
import React, { useRef, useState } from 'react'
import InputCard from './InputCard';

export default function InputContainer() {
  const [changeInput, setChangeInput] = useState(false)
  // const parentRef = React.useRef<HTMLDivElement>(null);
  // const childRef = React.useRef<HTMLDivElement>(null);
  
  const parentRef = useRef(null);
  const childRef = useRef(null);

  return (
    <>
  
      <InputCard ref={childRef}/>
  
      <InputButtonBundle >
        <button ref={parentRef}>+ Add a card</button>
        <i class="fas fa-trash" />
      </InputButtonBundle>
  
    </>
  )
}

  const InputButtonBundle = styled.div`
  ${({ theme }) => theme.displayFlex('space-between', 'center')};
  `
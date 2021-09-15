import React, { Fragment, useState } from 'react'
import styled from 'styled-components'

export default function InputCard() {
  const [changeInput, setChangeInput] = useState(false)
  return (
    <InputCardWrap>
      <input placeholder="Enter a title of this card" onBlur={()=> setChangeInput(!changeInput)} /> 
      <InputCaradButtonBundle>
        <button>Add Card</button>
        <i class="fas fa-times" />
      </InputCaradButtonBundle>
    </InputCardWrap>
  )
}

const InputCardWrap = styled.div`
  input {
    width : 100%;
    margin-bottom : 10px;
  }
`

const InputCaradButtonBundle = styled.div`
  button {
    margin-right: 10px;
    padding : 8px;
    border-radius: 5px;
    border: none;
    background-color: #2a5d9b;
    color: #ffffff;
    font-size: 14px;

    :hover {
      opacity: 0.9;
    }
  }

  i {
    color: #cccccc;

    :hover {
      opacity: 0.9;
    }
  }
`
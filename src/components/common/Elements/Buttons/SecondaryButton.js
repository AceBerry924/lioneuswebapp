import React from "react";
import styled from "styled-components";
import { Route } from 'react-router-dom'
// import { gold_rgb } from './variables'

export default function PrimaryButton({ value = "(value)", ...rest } = {}) {
  return (
    <Button {...rest}>
      <button className="button">
        {value}
      </button>
    </Button>
  )
}


const Button = styled.div`
#consumer-button{
  margin-right: 2rem;
  @media screen and (max-width: 576px) {
    display: none;
  }
}
.button {
    font-family: Calibri, "Trebuchet MS", Arial, sans-serif;
    text-align: center;
    cursor: pointer;
    font-size : 1.3rem;
    position: relative;
    background-color: white;
    color: rgb(197, 179, 0);
    outline: none;
    padding: 0.2rem 1rem;
    text-align: center;
    transition-duration: 0.3s;
    overflow: hidden;
    border-radius: 0.4rem;
    border: 1px solid rgb(197, 179, 0);
  }
  
  .button:hover {
    background:#c5b358;
    color: white;
    background-color: #c5b358;
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.1);
  }
  @media screen and (max-width: 800px) {
    .button {
        font-size: 1rem;
        padding: 0.3rem 0.9rem;
    }
  }
`
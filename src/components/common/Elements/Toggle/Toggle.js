import React, { useState } from "react";
import styled from "styled-components";
import { gold_hex } from "../variables";

const Main = styled.div`
  @import url("https://fonts.googleapis.com/css?family=Asap:400,500,700");

  body {
    margin: 0;
    width: 100%;
    height: 100%;
    display: flex;
    position: absolute;
    left: 0;
    top: 0;
    font-family: "Asap", sans-serif;
    background: white;
  }

  a {
    text-decoration: none;
    opacity: 0.6;
    padding: 60px;
    font-weight: bolder;
    position: absolute;
    right: 0px;
    bottom: 0px;
    font-size: 1.4em;
  }

  a:hover {
    opacity: 1;
  }

  #container {
    width: 160px;
    height: 36px;
    margin: 10px auto;
    position: relative;
    border-radius: 6px;
    overflow: hidden;
    user-select: none;
    cursor: pointer;
  }

  .inner-container {
    position: absolute;
    left: 0;
    top: 0;
    width: inherit;
    height: inherit;
    text-transform: uppercase;
    font-size: 0.6em;
    letter-spacing: 0.2em;
  }

  .inner-container:first-child {
    background: #e9e9e9;
    color: #a9a9a9;
  }

  .inner-container:nth-child(2) {
    background: ${gold_hex};
    color: white;
    clip-path: inset(0 50% 0 0);
    transition: 0.3s cubic-bezier(0, 0, 0, 1);
  }

  .toggle {
    width: 50%;
    position: absolute;
    height: inherit;
    display: flex;
    box-sizing: border-box;
  }

  .toggle p {
    margin: auto;
  }

  .toggle:nth-child(1) {
    right: 0;
  }
  @media screen and (max-width: 576px) {
    .inner-container {
      font-size: 0.3em;
      letter-spacing: 0em;
    }
    .toggle p {
      font-size: 14px;
      letter-spacing: 1px;
    }
  }
`;

export default ({
  primary = "Option-A",
  secondary = "Option-B",
  choice = console.log
}) => {
  const [toggle, setToggleNumber] = useState(false);
  const clipPath = toggle ? "inset(0 0 0 50%)" : "inset(0 50% 0 0)";

  return (
    <Main>
      <div
        id="container"
        onClick={_ => {
          choice(toggle ? primary : secondary);
          setToggleNumber(!toggle);
        }}
      >
        <div className="inner-container">
          <div className="toggle">
            <p>{secondary}</p>
          </div>
          <div className="toggle">
            <p>{primary}</p>
          </div>
        </div>
        <div
          className="inner-container"
          style={{ backgroundColor: gold_hex, clipPath }}
          id="toggle-container"
        >
          <div className="toggle">
            <p>{secondary}</p>
          </div>
          <div className="toggle">
            <p>{primary}</p>
          </div>
        </div>
      </div>
    </Main>
  );
};

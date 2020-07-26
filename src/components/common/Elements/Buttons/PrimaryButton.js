import React from "react";
import styled from "styled-components";
import { ButtonLoader } from "../../assets/StyledComponent";
// import { gold_rgb } from './variables'

export default function PrimaryButton({
  value = "...",
  search,
  cursors,
  disabled,
  loading,
  ...props
} = {}) {
  return (
    <Button {...props}>
      <button
        className={
          cursors === "disabled" ? "button not-allowed" : "button allowed"
        }
      >
        {loading ? (
          <ButtonLoader>
            <div className="d-flex justify-content-center">
              <div className="spinner-border text-warning" role="status">
                <span className="sr-only">Loading...</span>
              </div>
            </div>
          </ButtonLoader>
        ) : (
          value
        )}
      </button>
    </Button>
  );
}

const Button = styled.div`
  .not-allowed {
    cursor: not-allowed !important;
  }
  .allowed {
    cursor: pointer;
  }
  .button {
    font-family: Calibri, "Trebuchet MS", Arial, sans-serif;
    box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.1);
    position: relative;
    background: #c5b358;
    border: 1px solid rgb(197, 179, 0);
    font-size: 1.3rem;
    outline: none;
    color: white;
    padding: 0.2rem 1.5rem;
    cursor: pointer;
    text-align: center;
    //   cursor: not-allowed !important;
    border-radius: 0.4rem;
  }
  .button:hover {
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.1);
    background: rgb(197, 179, 0);
    color: white;
    border: 1px solid #c5b358;
  }
  @media screen and (max-width: 800px) {
    .button {
      font-size: 1rem;
      padding: 0.3rem 1.4rem;
    }
  }
`;

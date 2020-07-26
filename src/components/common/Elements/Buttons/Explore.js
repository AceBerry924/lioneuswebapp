import React from 'react'
import {ExploreButtonStyle } from '../../assets/StyledComponent';

export default function ExploreButton ({ value = "(value)", ...rest } = {}) {
    return (
      <ExploreButtonStyle {...rest}>
        <button className="button">
          {value}
        </button>
      </ExploreButtonStyle>
    )
  }
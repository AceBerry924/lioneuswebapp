import React from 'react'
import { HideButtonStyle } from '../../assets/StyledComponent';

class HideButton extends React.Component {
    render() {
        return (
            <HideButtonStyle>
                <button className="button">Hide</button>
            </HideButtonStyle>
        );
    }
}

export default HideButton;
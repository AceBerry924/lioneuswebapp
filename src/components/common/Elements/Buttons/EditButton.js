import React from 'react'
import { EditButtonStyle } from '../../assets/StyledComponent';

const EditButton = ({ value = "(value)", ...rest } = {}) => {
    return (
      <EditButtonStyle {...rest} className="d-inline-block">
        {/* <button className="button">{value}</button> */}
        <div className="edit">
          <button type="button">
            <i className="fa fa-pencil fa-lg"></i>
          </button>
        </div>
      </EditButtonStyle>
    );
}

export default EditButton;
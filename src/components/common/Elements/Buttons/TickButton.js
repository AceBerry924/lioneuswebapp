import React from "react";
import { EditButtonStyle, Tick } from "../../assets/StyledComponent";

const EditButton = ({ value = "(value)", ...rest } = {}) => {
  return (
    <EditButtonStyle {...rest}>
      {/* <button className="button">{value}</button> */}
      <Tick>
        <div class="edit">
          <button type="button">
          <i class="fas fa-save"></i>
          </button>
        </div>
      </Tick>
    </EditButtonStyle>
  );
};

export default EditButton;

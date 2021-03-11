import React from "react";
const focusNext = (ref_input, index) => {
  if (index < ref_input.length - 1) {
    ref_input[index + 1].current.focus();
  }
  if (index == ref_input.length - 1) {
    ref_input[index].current.blur();
  }
};
export default focusNext;

import React, { useState } from "react";
import propTypes from "prop-types";

export const AddCategory = ({ setCategories }) => {
  const [inputValue, setInputValue] = useState();

  const handleChangeInputValue = e => {
    setInputValue(e.target.value);
  };

  const handleOnSubmit = e => {
    e.preventDefault();
    if (inputValue.trim().length > 2) {
      setCategories(cats => [inputValue, ...cats]);
      setInputValue("");
    }
  };

  return (
    <form onSubmit={handleOnSubmit}>
      <input type="text" onChange={handleChangeInputValue} />
    </form>
  );
};

AddCategory.propTypes = {
  setCategories: propTypes.func.isRequired
};

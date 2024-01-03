import React from 'react'
import Select from 'react-select';

function SearchableDropdown({ options, onChange, placeholder }) {

    const customStyles = {
        control: (provided) => ({
          ...provided,
          width: '30rem', // Set the width of the control
          padding: "0.3rem"
        }),
        option: (provided) => ({
          ...provided,
          width: '30rem', // Set the width of the options
          color: "black",
          padding: "1rem"
        }),
      };

  return (
    <Select
      options={options}
      isSearchable
      isClearable
      onChange={onChange}
      styles={customStyles}
      placeholder={placeholder}
    />
  )
}

export default SearchableDropdown

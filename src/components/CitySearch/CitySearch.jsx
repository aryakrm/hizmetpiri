import React, { useEffect, useState } from 'react'
import Select from 'react-select'

function CitySearch({ options, value, onChange }) {
  const customStyles = {
    control: (provided) => ({
      ...provided,
      width: '30rem', // Set the width of the control
      padding: '0.3rem',
    }),
    option: (provided) => ({
      ...provided,
      width: '30rem', // Set the width of the options
      color: 'black',
      padding: '1rem',
    }),
  }

  return (
    <div>
      <label>İl:</label>
      <br />
      <Select
        options={options}
        value={value}
        onChange={onChange}
        getOptionValue={(option) => option.customValue}
        getOptionLabel={(option) => option.customLabel}
        placeholder='seç'
      />
      <br />
    </div>
  )
}

export default CitySearch

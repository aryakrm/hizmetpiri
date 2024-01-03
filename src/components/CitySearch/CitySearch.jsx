import React, {useEffect, useState} from 'react'
import Select from 'react-select';

function CitySearch({ options, onChange, placeholder }) {

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


      const [cities, setCities] = useState([]);
      const [selectedCity, setSelectedCity] = useState('');
      const [districts, setDistricts] = useState([]);
      const [selectedDistrict, setSelectedDistrict] = useState('');
    
      useEffect(() => {
        // Fetch Turkey's cities
    fetch('https://turkiyeapi.dev/api/v1/provinces')
    .then(response => response.json())
    .then(data => {
      console.log('Raw city data:', data.data);
      setCities(data.data.map(city => ({ customValue: city.id, customLabel: city.name })));
    })
    .catch(error => console.error('Error fetching cities:', error));
    
}, []);



  useEffect(() => {
    // Fetch districts for the selected city
    if (selectedCity) {
      fetch(`https://turkiyeapi.dev/api/v1/districts`)
        .then(response => response.json())
        .then(data => {
          console.log('Raw district data:', data.data);
  
          // Filter districts based on the selected city (province)
          const filteredDistricts = data.data.filter(district => district.province == selectedCity);
  
          setDistricts(filteredDistricts.map(district => ({ customValue: district.id, customLabel: district.name })));
        })
        .catch(error => console.error('Error fetching districts:', error));
    }
  }, [selectedCity]);


    
      

     
  const handleCityChange = selectedOption => {
    setSelectedCity(selectedOption.customLabel);
    setSelectedDistrict(' '); // Reset district when city changes
    console.log(selectedCity)
  };
      
    
      const handleDistrictChange = selectedOption => {
        setSelectedDistrict(selectedOption.customValue);
      };


  return (
    
    <div>
    <label>İl:</label>
    <Select
      options={cities}
      value={cities.find(city => city.customValue === selectedCity)}
      onChange={handleCityChange}
      getOptionValue={option => option.customValue}
      getOptionLabel={option => option.customLabel}
    />
    <br />
    {selectedCity && (
      <div>
        <label>İlçe:</label>
        <Select
          options={districts}
          value={districts.find(district => district.customValue === selectedDistrict)}
          onChange={handleDistrictChange}
          getOptionValue={option => option.customValue}
          getOptionLabel={option => option.customLabel}
        />
      </div>
    )}
  </div>
  )
}

export default CitySearch

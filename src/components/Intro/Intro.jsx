import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import './Intro.scss';
import { tasks } from '../../Stores/tasks';
import SearchableDropdown from '../SearchableDropdown/SearchableDropdown';

function Intro() {

  const [selectedOption, setSelectedOption] = useState(null);

  const handleChange = (selectedOption) => {
    setSelectedOption(selectedOption);
    // Handle any additional logic here
    console.log(selectedOption)
  };


  return (
    <section className="Intro">
      <div className="intro-left">
        <h1>DOĞRU HİZMETİ, HİZMET PİRİ İLE HEMEN BULUN...</h1>
        <div className="intro-search">
          <SearchableDropdown options={tasks} onChange={handleChange} />
          <button type="button">
            <FaSearch />
          </button>
        </div>
      </div>
      <div className="intro-right">
        <img src="/assets/hpVector2.png" alt="Hizmet Piri Vector" />
      </div>
    </section>
  );
}

export default Intro;

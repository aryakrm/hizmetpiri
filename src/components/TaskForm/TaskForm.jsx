// src/components/TaskForm.jsx
import React, { useState, useEffect } from 'react'
import Select from 'react-select'
import './TaskForm.scss'
import { useNavigate, useParams } from 'react-router-dom'
import useTaskStore from '../../Stores/taskStore'
import SearchableDropdown from '../SearchableDropdown/SearchableDropdown'
import { FaTurkishLiraSign } from 'react-icons/fa6'
import { tasks } from '../../Stores/tasks'
import { AnahtarSub } from '../../Stores/AnahtarSub'
import { AnahtarType } from '../../Stores/AnahtarType'
import { ProjeSub } from '../../Stores/ProjeSub'
import { DanismanlikSub } from '../../Stores/DanismanlikSub'
import { UstaSub } from '../../Stores/UstaSub'
import CitySearch from '../CitySearch/CitySearch'

const TaskForm = () => {
  const { hizmet } = useParams()

  const navigate = useNavigate()
  const {
    subOptions,
    setSubOptions,
    type,
    setType,
    area,
    setArea,
    minBudget,
    maxBudget,
    setBudget,
    duration,
    setDuration,
    startDate,
    setStartDate,
    description,
    setDescription,
    city,
    setCity,
    district,
    setDistrict,
    name,
    setName,
    surname,
    setSurname,
    email,
    setEmail,
    telNumber,
    setTelNumber,
    pass,
    setPass,
    paymentMethod,
    setPaymentMethod,
  } = useTaskStore()

  const [progress, setProgress] = useState(0)

  const [descriptionError, setDescriptionError] = useState(false)

  const handleNext = () => {
    setProgress((prevProgress) => Math.min(prevProgress + 11.11, 100))
    if (progress >= 55.55 && progress < 66.66 && description.length < 250) {
      setProgress(56)
      setDescriptionError(true)
    }
  }

  const handlePrev = () => {
    setProgress((prevProgress) => Math.max(prevProgress - 11.11, 0))
  }

  const handleSubmit = async () => {
    try {
      // Dummy function for submitting the task
      console.log('Task submitted successfully!')
      // Reset the state (clear the form)
      useTaskStore.setState({
        subOptions: '',
        type: ' ',
        area: null,
        minBudget: null,
        maxBudget: null,
        duration: null,
        startDate: '',
        description: '',
        city: ' ',
        district: ' ',
        name: '',
        surname: '',
        email: '',
        telNumber: '',
        pass: '',
        paymentMethod: '',
      })
      // Redirect or perform additional actions on successful task submission
      // history.push('/');
      navigate('/create-task')
    } catch (error) {
      // Handle errors
      console.error('Error submitting task:', error)
    }
  }

  const [selectedOption, setSelectedOption] = useState(null)
  const [selectedType, setSelectedType] = useState(null)

  const handleChange = (selectedOption) => {
    setSelectedOption(selectedOption)
    setSubOptions(selectedOption.value)
    console.log(selectedOption.value)
  }
  const handleChangeType = (selectedType) => {
    setSelectedType(selectedType)
    setType(selectedType.value)
    console.log(selectedType.value)
  }

  const [cities, setCities] = useState([])
  const [selectedCity, setSelectedCity] = useState('')
  const [districts, setDistricts] = useState([])
  const [selectedDistrict, setSelectedDistrict] = useState('')

  useEffect(() => {
    // Fetch Turkey's cities
    fetch('https://turkiyeapi.dev/api/v1/provinces')
      .then((response) => response.json())
      .then((data) => {
        console.log('Raw city data:', data.data)
        setCities(
          data.data.map((city) => ({
            customValue: city.id,
            customLabel: city.name,
          }))
        )
      })
      .catch((error) => console.error('Error fetching cities:', error))
  }, [])

  useEffect(() => {
    // Fetch districts for the selected city
    if (selectedCity) {
      fetch(`https://turkiyeapi.dev/api/v1/districts`)
        .then((response) => response.json())
        .then((data) => {
          console.log('Raw district data:', data.data)

          // Filter districts based on the selected city (province)
          const filteredDistricts = data.data.filter(
            (district) => district.province == selectedCity
          )

          setDistricts(
            filteredDistricts.map((district) => ({
              customValue: district.id,
              customLabel: district.name,
            }))
          )
        })
        .catch((error) => console.error('Error fetching districts:', error))
    }
  }, [selectedCity])

  const handleCityChange = (selectedOption) => {
    setSelectedCity(selectedOption.customLabel)
    setSelectedDistrict(' ') // Reset district when city changes
    console.log(selectedOption.customLabel)
    setCity(selectedOption.customLabel)
  }

  const handleDistrictChange = (selectedOption) => {
    setSelectedDistrict(selectedOption.customValue)
    console.log(selectedOption.customLabel)
    setDistrict(selectedOption.customLabel)
  }

  const [calculatedPrice, setCalculatedPrice] = useState(0)

  useEffect(() => {
    if (area === null) {
      setCalculatedPrice(0)
    } else if (
      progress >= 11.11 &&
      progress < 22.22 &&
      area >= 0 &&
      area < 25
    ) {
      setCalculatedPrice(25)
    } else if (area >= 10 && area <= 200) {
      setCalculatedPrice(Math.floor(area * 1))
    } else if (area > 200 && area <= 350) {
      setCalculatedPrice(Math.floor(area * 0.88))
    } else if (area > 350 && area <= 400) {
      setCalculatedPrice(Math.floor(area * 0.8))
    } else if (area > 400 && area <= 500) {
      setCalculatedPrice(Math.floor(area * 0.7))
    } else if (area > 500 && area <= 1000) {
      setCalculatedPrice(Math.floor(area * 0.4))
    } else if (area > 1000 && area <= 2000) {
      setCalculatedPrice(Math.floor(area * 0.25))
    } else if (area > 2000 && area <= 2500) {
      setCalculatedPrice(Math.floor(area * 0.21))
    } else if (area > 2500 && area <= 3000) {
      setCalculatedPrice(Math.floor(area * 0.18))
    } else if (area > 3000 && area <= 3500) {
      setCalculatedPrice(Math.floor(area * 0.16))
    } else if (area > 3500 && area <= 4000) {
      setCalculatedPrice(Math.floor(area * 0.15))
    } else if (area > 4000 && area <= 4500) {
      setCalculatedPrice(Math.floor(area * 0.14))
    } else if (area > 4500 && area <= 5000) {
      setCalculatedPrice(Math.floor(area * 0.13))
    } else if (area > 5000 && area <= 6000) {
      setCalculatedPrice(Math.floor(area * 0.12))
    } else if (area > 6000 && area <= 7000) {
      setCalculatedPrice(Math.floor(area * 0.11))
    } else if (area > 7000 && area <= 8000) {
      setCalculatedPrice(Math.floor(area * 0.1))
    } else if (area > 8000 && area <= 9000) {
      setCalculatedPrice(Math.floor(area * 0.1))
    } else if (area > 9000 && area <= 10000) {
      setCalculatedPrice(Math.floor(area * 0.1))
    } else {
      setCalculatedPrice(1500)
    }
  }, [area])

  return (
    <div className='task-form-container'>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '10px',
        }}
      >
        <h2>{hizmet}</h2>{' '}
        <h4 style={{ marginBottom: '1rem' }}>
          İlan Paylaşma Ücreti: {calculatedPrice} <FaTurkishLiraSign />
        </h4>
      </div>
      <div className='progress-bar-container'>
        <div className='progress-bar' style={{ width: `${progress}%` }}></div>
      </div>
      <div className='form-content'>
        {progress < 11.11 && (
          <div>
            <h3>Proje Türleri</h3>
            {/* <input
              type="text"
              placeholder="Sub-options"
              value={subOptions}
              onChange={(e) => setSubOptions(e.target.value)}
            /> */}
            {hizmet === 'ANAHTAR TESLİM İNŞAAT- TADİLAT' && (
              <SearchableDropdown
                style={{ marginBottom: '1rem' }}
                options={AnahtarSub}
                onChange={handleChange}
                placeholder='Ne Yapılacak?'
              />
            )}

            {hizmet === 'ANAHTAR TESLİM İNŞAAT- TADİLAT' && (
              <SearchableDropdown
                style={{ marginBottom: '1rem' }}
                options={AnahtarType}
                onChange={handleChangeType}
                placeholder='Proje Türü Nedir?'
              />
            )}

            {hizmet === 'PROJE' && (
              <SearchableDropdown
                style={{ marginBottom: '1rem' }}
                options={ProjeSub}
                onChange={handleChange}
                placeholder='Ne Yapılacak?'
              />
            )}

            {hizmet === 'PROJE' && (
              <SearchableDropdown
                style={{ marginBottom: '1rem' }}
                options={AnahtarType}
                onChange={handleChangeType}
                placeholder='Proje Türü Nedir?'
              />
            )}

            {hizmet === 'DANIŞMANLIK' && (
              <SearchableDropdown
                style={{ marginBottom: '1rem' }}
                options={DanismanlikSub}
                onChange={handleChange}
                placeholder='Ne Yapılacak?'
              />
            )}

            {hizmet === 'İŞÇİLİK-USTA' && (
              <SearchableDropdown
                style={{ marginBottom: '1rem' }}
                options={UstaSub}
                onChange={handleChange}
                placeholder='Ne Yapılacak?'
              />
            )}

            {hizmet === 'İŞÇİLİK-USTA' && (
              <SearchableDropdown
                style={{ marginBottom: '1rem' }}
                options={AnahtarType}
                onChange={handleChangeType}
                placeholder='Proje Türü Nedir?'
              />
            )}
          </div>
        )}

        {progress >= 11.11 && progress < 22.22 && (
          <div>
            <h3>
              Projeniz Kaç Metre Kare (
              <b>
                m<sup>2</sup>
              </b>
              ) ?
            </h3>
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <input
                type='number'
                placeholder='150'
                min='1'
                value={area}
                onChange={(e) => setArea(e.target.value, area)}
              />
              <img style={{ width: '2rem' }} src='/assets/area.png' alt='m2' />
            </div>
          </div>
        )}

        {progress >= 22.22 && progress < 33.33 && (
          <div>
            <h3>Bütçeniz:</h3>
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <input
                type='number'
                placeholder='En az'
                value={minBudget}
                onChange={(e) => setBudget(e.target.value, maxBudget)}
              />
              <FaTurkishLiraSign />
            </div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <input
                type='number'
                placeholder='En Fazla'
                value={maxBudget}
                onChange={(e) => setBudget(minBudget, e.target.value)}
              />
              <FaTurkishLiraSign />
            </div>
          </div>
        )}

        {progress >= 33.33 && progress < 44.44 && (
          <div>
            <h3>Teklif Alma Süreci</h3>
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '10px',
              }}
            >
              <input
                type='number'
                placeholder='En fazla 10'
                value={duration}
                min='1'
                max='10'
                onChange={(e) => setDuration(e.target.value)}
              />
              <h4>Gün</h4>
            </div>
          </div>
        )}
        {progress >= 44.44 && progress < 55.55 && (
          <div>
            <h3>Başlama Tarihi</h3>
            <input
              type='date'
              placeholder='Start Date'
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
            />
          </div>
        )}
        {progress >= 55.55 && progress < 66.66 && (
          <div>
            <h3>Açıklama</h3>
            <textarea
              placeholder='Lütfen Projeniz Hakkında Detaylı Bir Açıklama yazın'
              value={description}
              minLength={250}
              onChange={(e) => setDescription(e.target.value)}
            />
            {descriptionError && (
              <p style={{ color: 'red' }}>
                Açıklamanız Yeterli Değil, En az 250 karakter olmalı!
              </p>
            )}
          </div>
        )}
        {progress >= 66.66 && progress < 77.77 && (
          <div>
            <h3>Proje Nerede Yapılacak?</h3>
            <CitySearch
              options={cities}
              value={cities.find((city) => city.customValue === selectedCity)}
              onChange={handleCityChange}
            />
            {selectedCity && (
              <div>
                <label>İlçe:</label>
                <br />
                <Select
                  options={districts}
                  value={districts.find(
                    (district) => district.customValue === selectedDistrict
                  )}
                  onChange={handleDistrictChange}
                  getOptionValue={(option) => option.customValue}
                  getOptionLabel={(option) => option.customLabel}
                  placeholder='seç'
                />
              </div>
            )}
          </div>
        )}
        {progress >= 77.77 && progress < 88.88 && (
          <div>
            <h3>Kayıt Ol</h3>
            <input
              type='text'
              placeholder='Ad'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type='text'
              placeholder='Soyad'
              value={surname}
              onChange={(e) => setSurname(e.target.value)}
            />
            <input
              type='email'
              placeholder='Email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type='tel'
              placeholder='Telefon Numarası'
              value={telNumber}
              onChange={(e) => setTelNumber(e.target.value)}
            />
            <input
              type='password'
              placeholder='Şifre'
              value={pass}
              onChange={(e) => setPass(e.target.value)}
            />
          </div>
        )}
        {progress >= 88.88 && progress < 100 && (
          <div>
            <h3>Payment</h3>
            <input
              type='text'
              placeholder='Payment Method'
              value={paymentMethod}
              onChange={(e) => setPaymentMethod(e.target.value)}
            />
          </div>
        )}
      </div>
      <div className='form-buttons'>
        {progress > 0 && <button onClick={handlePrev}>Önceki Sayfa</button>}
        {progress < 100 ? (
          <button onClick={handleNext}>Devam et</button>
        ) : (
          <button onClick={handleSubmit}>Submit Task</button>
        )}
      </div>
    </div>
  )
}

export default TaskForm

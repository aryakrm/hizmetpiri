// src/components/TaskForm.jsx
import React, { useState } from 'react';
import "./TaskForm.scss"
import { useNavigate, useParams } from 'react-router-dom';
import useTaskStore from '../../Stores/taskStore';
import SearchableDropdown from '../SearchableDropdown/SearchableDropdown';
import { FaTurkishLiraSign } from "react-icons/fa6";
import { tasks } from '../../Stores/tasks';
import { AnahtarSub } from '../../Stores/AnahtarSub';
import { ProjeSub } from '../../Stores/ProjeSub';
import {DanismanlikSub} from "../../Stores/DanismanlikSub"
import { UstaSub } from '../../Stores/UstaSub';

const TaskForm = () => {

  const { hizmet } = useParams()

  const navigate = useNavigate();
  const {
    subOptions,
    setSubOptions,
    minBudget,
    maxBudget,
    setBudget,
    duration,
    setDuration,
    startDate,
    setStartDate,
    description,
    setDescription,
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
  } = useTaskStore();

  const [progress, setProgress] = useState(0);

  const handleNext = () => {
    setProgress((prevProgress) => Math.min(prevProgress + 14.2857, 100));
  };

  const handlePrev = () => {
    setProgress((prevProgress) => Math.max(prevProgress - 14.2857, 0));
  };

  const handleSubmit = async () => {
    try {
      // Dummy function for submitting the task
      console.log('Task submitted successfully!');
      // Reset the state (clear the form)
      useTaskStore.setState({
        subOptions: '',
        minBudget: 0,
        maxBudget: null,
        duration: null,
        startDate: '',
        description: '',
        name: '',
        surname: '',
        email: '',
        telNumber: '',
        pass: '',
        paymentMethod: '',
      });
      // Redirect or perform additional actions on successful task submission
      // history.push('/');
      navigate("/create-task");
      console.log(subOptions + " " + minBudget)
    } catch (error) {
      // Handle errors
      console.error('Error submitting task:', error);
    }
  };

  const [selectedOption, setSelectedOption] = useState(null);

  const handleChange = (selectedOption) => {
    setSelectedOption(selectedOption);
    setSubOptions(selectedOption.value)
    console.log(selectedOption.value)
  };

  return (
    <div className="task-form-container">
      <h2>{hizmet}</h2>
      <div className="progress-bar-container">
        <div className="progress-bar" style={{ width: `${progress}%` }}></div>
      </div>
      <div className="form-content">
        {progress < 14.2857 && (
          <div>
            <h3>Proje Türleri</h3>
            {/* <input
              type="text"
              placeholder="Sub-options"
              value={subOptions}
              onChange={(e) => setSubOptions(e.target.value)}
            /> */}
            {hizmet === "ANAHTAR TESLİM İNŞAAT- TADİLAT" && <SearchableDropdown options={AnahtarSub} onChange={handleChange} />}
            {hizmet === "PROJE" && <SearchableDropdown options={ProjeSub} onChange={handleChange} />}
            {hizmet === "DANIŞMANLIK" && <SearchableDropdown options={DanismanlikSub} onChange={handleChange} />}
            {hizmet === "İŞÇİLİK-USTA" && <SearchableDropdown options={UstaSub} onChange={handleChange} />}
            
        
          </div>
        )}
        {progress >= 14.2857 && progress < 28.5714 && (
          <div>
            <h3>Bütçeniz:</h3>
            <div style={{display: "flex", justifyContent: "center", alignItems: "center"}} ><input
              type="number"
              placeholder="En az"
              value={minBudget}
              onChange={(e) => setBudget(e.target.value, maxBudget)}
            />
            <FaTurkishLiraSign /></div>
            <div style={{display: "flex", justifyContent: "center", alignItems: "center"}} ><input
              type="number"
              placeholder="En Fazla"
              value={maxBudget}
              onChange={(e) => setBudget(minBudget, e.target.value)}
            />
            <FaTurkishLiraSign /></div>
            
            
          </div>
        )}
        {progress >= 28.5714 && progress < 42.8570 && (
          <div>
            <h3>Teklif Alma Süreci</h3>
            <div style={{display: "flex", justifyContent: "center", alignItems: "center", gap: "10px"}} ><input
              type="number"
              placeholder="En fazla 10"
              value={duration}
              min="1" 
              max="10"
              onChange={(e) => setDuration(e.target.value)}
            />
            <h4>Gün</h4></div>
            
          </div>
        )}
        {progress >= 42.8570 && progress < 57.1427 && (
          <div>
            <h3>Başlama Tarihi</h3>
            <input
              type="date"
              placeholder="Start Date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
            />
          </div>
        )}
        {progress >= 57.1427 && progress < 71.4285 && (
          <div>
            <h3>Açıklama</h3>
            <textarea
              placeholder="Lütfen Projeniz Hakkında Detaylı Bir Açıklama yazın"
              value={description}
              minLength={250}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
        )}
        {progress >= 71.4285 && progress < 85.7142 && (
          <div>
            <h3>Kayıt Ol</h3>
            <input
              type="text"
              placeholder="Ad"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Soyad"
              value={surname}
              onChange={(e) => setSurname(e.target.value)}
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="tel"
              placeholder="Telefon Numarası"
              value={telNumber}
              onChange={(e) => setTelNumber(e.target.value)}
            />
            <input
              type="password"
              placeholder="Şifre"
              value={pass}
              onChange={(e) => setPass(e.target.value)}
            />
          </div>
        )}
        {progress >= 85.7142 && progress < 100 && (
          <div>
            <h3>Payment</h3>
            <input
              type="text"
              placeholder="Payment Method"
              value={paymentMethod}
              onChange={(e) => setPaymentMethod(e.target.value)}
            />
          </div>
        )}
      </div>
      <div className="form-buttons">
        {progress > 0 && <button onClick={handlePrev}>Önceki Sayfa</button>}
        {progress < 100 ? <button onClick={handleNext}>Devam et</button> : <button onClick={handleSubmit}>Submit Task</button>}
      </div>
    </div>
  );
};

export default TaskForm;

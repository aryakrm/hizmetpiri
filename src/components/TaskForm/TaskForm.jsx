// src/components/TaskForm.jsx
import React, { useState } from 'react';
import "./TaskForm.scss"
import { useNavigate } from 'react-router-dom';
import useTaskStore from '../../Stores/taskStore';

const TaskForm = () => {
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
        maxBudget: 0,
        duration: '',
        startDate: '',
        description: '',
        name: '',
        surname: '',
        email: '',
        telNumber: '',
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

  return (
    <div className="task-form-container">
      <h2>Task Form</h2>
      <div className="progress-bar-container">
        <div className="progress-bar" style={{ width: `${progress}%` }}></div>
      </div>
      <div className="form-content">
        {progress < 14.2857 && (
          <div>
            <h3>Sub-options</h3>
            <input
              type="text"
              placeholder="Sub-options"
              value={subOptions}
              onChange={(e) => setSubOptions(e.target.value)}
            />
          </div>
        )}
        {progress >= 14.2857 && progress < 28.5714 && (
          <div>
            <h3>Budget</h3>
            <input
              type="number"
              placeholder="Minimum Budget"
              value={minBudget}
              onChange={(e) => setBudget(e.target.value, maxBudget)}
            />
            <input
              type="number"
              placeholder="Maximum Budget"
              value={maxBudget}
              onChange={(e) => setBudget(minBudget, e.target.value)}
            />
          </div>
        )}
        {progress >= 28.5714 && progress < 42.8571 && (
          <div>
            <h3>Duration</h3>
            <input
              type="text"
              placeholder="Duration"
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
            />
          </div>
        )}
        {progress >= 42.8571 && progress < 57.1429 && (
          <div>
            <h3>Start Date</h3>
            <input
              type="date"
              placeholder="Start Date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
            />
          </div>
        )}
        {progress >= 57.1429 && progress < 71.4286 && (
          <div>
            <h3>Description</h3>
            <textarea
              placeholder="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
        )}
        {progress >= 71.4286 && progress < 85.7143 && (
          <div>
            <h3>Registration</h3>
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Surname"
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
              placeholder="Tel Number"
              value={telNumber}
              onChange={(e) => setTelNumber(e.target.value)}
            />
          </div>
        )}
        {progress >= 85.7143 && progress < 100 && (
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
        {progress > 0 && <button onClick={handlePrev}>Previous</button>}
        {progress < 100 ? <button onClick={handleNext}>Next</button> : <button onClick={handleSubmit}>Submit Task</button>}
      </div>
    </div>
  );
};

export default TaskForm;

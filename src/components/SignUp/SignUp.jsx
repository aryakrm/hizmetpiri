import React, { useState } from 'react'
import './SignUp.scss'
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'

function SignUp() {
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [password, setPassword] = useState('')
  const [showSuccessMessage, setShowSuccessMessage] = useState(false)

  const auth = getAuth()
  const navigate = useNavigate()

  const handleSignUp = (e) => {
    e.preventDefault()
    // Add your sign-up logic here
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user
        // ...
        navigate('/')
      })
      .catch((error) => {
        const errorCode = error.code
        const errorMessage = error.message
        // ..
      })
    console.log('Signing up with:', email, phone, password)

    const signUpSuccessful = true

    if (signUpSuccessful) {
      // Clear form fields
      setEmail('')
      setPhone('')
      setPassword('')
      // Show success message
      setShowSuccessMessage(true)
      // Hide success message after 3 seconds (adjust as needed)
      setTimeout(() => setShowSuccessMessage(false), 3000)
    }
  }

  return (
    <div className='SignUp'>
      <h2>Üye Ol</h2>
      {showSuccessMessage && (
        <div className='success-message'>Heasbınız Oluştu!</div>
      )}
      <form onSubmit={handleSignUp}>
        <label htmlFor='email'>Email:</label>
        <input
          type='email'
          id='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label htmlFor='password'>Şifre:</label>
        <input
          type='password'
          id='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type='submit'>Üye Ol</button>
      </form>
    </div>
  )
}

export default SignUp

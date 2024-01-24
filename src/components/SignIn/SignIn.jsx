import React, { useState } from 'react'
import './SignIn.scss'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'

function SignIn() {
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [password, setPassword] = useState('')
  const [showSuccessMessage, setShowSuccessMessage] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  const auth = getAuth()
  const navigate = useNavigate()

  const handleSignIn = (e) => {
    e.preventDefault()

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user
        // ...
        setShowSuccessMessage(true)
        navigate('/')
      })
      .catch((error) => {
        const errorCode = error.code
        const errorMessage = error.message
        setShowSuccessMessage(false)
        setErrorMessage('Email veya Şifre Geçersizdir!')
      })
    console.log('Signing in with:', email, phone, password)

    const signInSuccessful = true

    if (signInSuccessful) {
      // Clear form fields
      setEmail('')
      setPhone('')
      setPassword('')
      // Show success message

      // Hide success message after 3 seconds (adjust as needed)
      setTimeout(() => setShowSuccessMessage(false), 3000)
    }
  }

  return (
    <div className='SignIn'>
      <h2>Giriş Yap</h2>
      {errorMessage && <div className='error-message'>{errorMessage}</div>}
      {showSuccessMessage && (
        <div className='success-message'>Başarıyla Giriş Yaptınız!</div>
      )}
      <form onSubmit={handleSignIn}>
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

        <button type='submit'>Giriş Yap</button>
      </form>
    </div>
  )
}

export default SignIn

import { Routes, Route, Navigate } from 'react-router-dom'
import Home from '../pages/Home/Home'
import TaskForm from '../components/TaskForm/TaskForm'
import SignUp from '../components/SignUp/SignUp'
import SignIn from '../components/SignIn/SignIn'

function Routers() {
  return (
    <Routes>
      <Route path='/' element={<Navigate to='/home' />} />
      <Route path='home' element={<Home />} />
      <Route path='/create-task'>
        <Route path=':hizmet' element={<TaskForm />} />
      </Route>
      <Route path='signup' element={<SignUp />} />
      <Route path='signin' element={<SignIn />} />
    </Routes>
  )
}

export default Routers

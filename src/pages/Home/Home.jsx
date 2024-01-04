import React from 'react'
import Intro from '../../components/Intro/Intro'
import TaskForm from '../../components/TaskForm/TaskForm'

function Home() {
  return (
    <section className='Home'>
      <Intro />
      <TaskForm />
    </section>
  )
}

export default Home

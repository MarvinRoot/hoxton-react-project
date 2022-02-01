import { useEffect } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import { Main } from './components/pages/Main'
import { SignIn } from './components/pages/SignIn'
import { SignUp } from './components/pages/SignUp'
import { useStore } from './components/store'

function App() {
  const {updateUsers} = useStore()

  useEffect(() => {
    fetch('http://localhost:3001/users').then(resp => resp.json())
    .then(usersFromServer => updateUsers(usersFromServer))
  })

  return (
    <div className="App">
      <Routes>
        <Route index element={<Navigate replace to="/sign-in" />} />
        <Route path='/sign-in' element={< SignIn />} />
        <Route path='/sign-up' element={< SignUp />} />
        <Route path='/main' element={< Main />} />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </div>
  )
}

export default App

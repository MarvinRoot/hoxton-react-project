import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import { Main } from './components/pages/Main'
import { SignIn } from './components/pages/SignIn'
import { SignUp } from './components/pages/SignUp'

function App() {

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

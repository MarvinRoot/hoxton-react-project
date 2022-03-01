import { useEffect } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import { Main } from './pages/Main'
import { SignIn } from './pages/SignIn'
import { SignUp } from './pages/SignUp'
import { useStore } from './pages/components/store'
import { FavoritesPage } from './pages/FavoritesPage'
import { API_URL } from '../config'
function App() {
  const {updateUsers, updateGenres} = useStore()

  useEffect(() => {
    fetch(`${API_URL}/users`).then(resp => resp.json())
    .then(usersFromServer => updateUsers(usersFromServer))

    fetch(`${API_URL}/genres`).then(resp => resp.json())
    .then(genresFromServer => updateGenres(genresFromServer))
  }, [])

  return (
    <div className="App">
      <Routes>
        <Route index element={<Navigate replace to="/sign-in" />} />
        <Route path='/sign-in' element={< SignIn />} />
        <Route path='/sign-up' element={< SignUp />} />
        <Route path='/main' element={< Main />} />
        <Route path='/pick-favorites' element={< FavoritesPage/>} />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </div>
  )
}

export default App

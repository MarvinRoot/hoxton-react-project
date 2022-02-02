import { useNavigate } from "react-router-dom"
import { useStore } from "./components/store"

export function SignUp() {
    const navigate = useNavigate()
    const { users, updateUsers, updateUser } = useStore()

    function addUser(username, email, password) {
        //update state
        let updatedUsers = JSON.parse(JSON.stringify(users))
        updatedUsers.push({ username: username, email: email, password: password, profilePic: `https://avatars.dicebear.com/api/avataaars/${username}.svg`, favoriteGenres: [], favoriteSongs: [], playlists: [], favoriteArtists: [] })
        updateUsers(updatedUsers)
        updateUser(updatedUsers[updatedUsers.length-1])
        //update server
        fetch('http://localhost:3001/users', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({username: username, email: email, password: password, profilePic: `https://avatars.dicebear.com/api/avataaars/${username}.svg`, favoriteGenres: [], favoriteSongs: [], playlists: [], favoriteArtists: [] })
        })
    }
    return (
        <div className="sign-up">
            <h1 className="logo">Hoxtify</h1>
            <h2>Your daily music dose</h2>
            <form onSubmit={(e)=> {
                e.preventDefault()
                addUser(e.target.username.value, e.target.email.value, e.target.password.value)
                navigate('/pick-favorites')
            }}>
                <div className="container">
                    <h1>SIGN UP!</h1>

                    <label>
                        <span>Username</span>
                        <input required name="username" type="text" placeholder="Create a username" />
                    </label>

                    <label>
                        <span>Email</span>
                        <input required name="email" type="email" placeholder="Enter your email adress" />
                    </label>

                    <label>
                        <span>Password</span>
                        <input required name="password" type="password" placeholder="Create a password" />
                    </label>

                    <button type="submit" value="Submit">
                        Sign Up
                    </button>

                    <p onClick={() => navigate('/sign-in')}>Already have an account? Sign in</p>
                </div>
            </form>
        </div>
    )
}
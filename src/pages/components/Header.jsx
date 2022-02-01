import TextField from '@mui/material/TextField';
import { useStore } from './store';
export function Header() {
    const { user, search, updateSearch } = useStore()

    return (
        <section className="header">
            <div>
                <h1 className="logo">HOXTIFY</h1>
                <h2>Your daily music dose</h2>
            </div>
            <div className="search-bar">
                <input onChange={(e) => updateSearch(e.target.value)} name="search" type="search" placeholder="Search" />
            </div>
            <div className='header-profile'>
                <img src={user.profilePic} alt="profile pic" />
                <span>{user.username}</span>
            </div>
        </section>
    )
}
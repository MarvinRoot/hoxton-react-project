import { useNavigate } from "react-router-dom";
import { API_URL } from "../../config";
import { useStore } from "./components/store"

export function FavoritesPage() {
    const { user, genres } = useStore()
    const navigate = useNavigate()

    function handleOnChange() {
        let selectedGenres = [
            ...document.getElementsByClassName('input') ,
          ]
            .filter((checkbox) => checkbox.checked)
            .map((checkbox) => checkbox.value);
            console.log(selectedGenres);
        //update server
        fetch(`${API_URL}/users/${user.id}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ favoriteGenres: selectedGenres })
        })
    }
    
    return (
        <section className="pick-favorites">
            <h1> Welcome to hoxtify {user.username} </h1>
            <h2> Pick your favorite genres </h2>
            <div>
                <ul>
                    {genres.map(genre => {
                        return (
                            <li key={genre.id} >
                                <input className="input" onChange={handleOnChange} type="checkbox" value={genre.id} id={`cb${genre.id}`} />
                                <label htmlFor={`cb${genre.id}`}>
                                    <img src={genre.pic} />
                                </label>
                            </li>
                        )
                    })}
                </ul>
            </div>
            <button>One click left to eargasm</button>
        </section>
    )
}

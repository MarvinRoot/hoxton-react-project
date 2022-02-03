import { useState } from "react"
import { useStore } from "./components/store"

export function ArtistDetails() {
    const params = useParams()
    const { artists, user, updateUser } = useStore()
    const [artist, setArtist] = useState()

    function addToFavorites(artist) {
        let newFavArtists = JSON.parse(JSON.stringify(user.favoriteArtists))
        if (user.favoriteSongs.find(artistt => artistt.id === artist.id)) return null
        else newFavArtists.push(Number(artist.id))

        fetch(`http://localhost:3001/users/${user.id}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ favoriteArtists: newFavArtists })
        }).then(resp => resp.json()).then(user => updateUser(user))
    }
    useEffect(() => {
        fetch(`http://localhost:3001/artists/${params.artistId}`).then(resp => resp.json())
            .then(artistFromServer => {
                setArtist(artistFromServer)
            })
    }, [])

    // not fetched yet
    if (song === null || artist === null) return <p>Loading...</p>

    // fetched but did not get a result back
    if (song.id === undefined) return <p>Artist not found</p>


    return (
        <section className="song-details-content">
            <Header />
            <div className="song-content-main-wrapper">
                <Sidebar />
                <div className="song-content-wrapper">
                    <div style={{ display: "grid", gridTemplateColumns: "900px 1fr", alignItems: "center", backgroundColor: "#333", gap: "3rem" }}>
                        <img style={{ borderRadius: "50%", width: "500px" }} src={artist[0].picture} alt="" />
                        <h1 style={{ color: "#f40", fontSize: "35px", fontWeight: "700" }}>{artist[0].name}</h1>
                    </div>
                    <div style={{ display: "grid", gridAutoFlow: "column", justifyContent: "center", gap: "2rem", marginBottom: "2rem" }}>
                        <button onClick={addToFavorites(song)}>Add to favorite artists</button>
                    </div>
                    <h1 style={{ color: "#191919", fontSize: "28px", fontWeight: "600" }}>Similar Artists</h1>
                    <div className="artist-card-wrapper">
                        {artists.filter(artisst => artist[0].genreId === artisst.genreId)
                            .map(artisst => {
                                return (
                                    <Link to={`/main/${artisst.id}`}>
                                        <div key={artisst.id}>
                                            <img style={{ width: "200px", paddingBottom: ".5rem", borderRadius: "50%" }} src={artisst.picture} alt="" />
                                            <h2 style={{ color: "#191919", fontSize: "20px", fontWeight: "700", textAlign: "center" }}>{artisst.name}</h2>
                                        </div>
                                    </Link>
                                )
                            })}
                    </div>
                </div>
            </div>
        </section>

    )

}
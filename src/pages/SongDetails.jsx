import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { Header } from "./components/Header"
import { Sidebar } from "./components/Sidebar"
import { useStore } from "./components/store"

export function SongDetails() {
    const params = useParams()
    const { artists, user, updateUser, artist, updateArtist } = useStore()
    const [song, setSong] = useState(null)

    function addToFavorites(song) {

        let newFavSongs = JSON.parse(JSON.stringify(user.favoriteSongs))
        if (user.favoriteSongs.find(songg => songg === song.id)) return null
        else newFavSongs.push(Number(song.id))

        fetch(`http://localhost:3001/users/${user.id}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ favoriteSongs: newFavSongs })
        }).then(resp => resp.json()).then(user => updateUser(user))
    }

    useEffect(() => {
        fetch(`http://localhost:3001/songs/${params.songId}`).then(resp => resp.json())
            .then(songFromServer => {
                setSong(songFromServer)
                let songArtist = artists.filter(artist => songFromServer.artist === artist.name)
                songArtist = songArtist[0]
                updateArtist(songArtist)
            })
    }, [])

    // not fetched yet
    if (song === null || artist === null) return <p>Loading...</p>

    // fetched but did not get a result back
    if (song.id === undefined) return <p>Song not found</p>

    return (
        <section className="song-details-content">
            <Header />
            <div className="song-content-main-wrapper">
                <Sidebar />
                <div className="song-content-wrapper">
                    <div style={{ display: "grid", gridTemplateColumns: "900px 1fr", alignItems: "center", gap: "2rem"}}>
                        <iframe width="900px" height="400px" scrolling="no" frameborder="no" allow="autoplay" src={song.src}></iframe>
                        <Link to={`/artist/${artist.id}`}><img style={{ borderRadius: "50%", width: "300px" }} src={artist.picture} alt="" /></Link>
                    </div>
                    <div style={{ display: "grid", gridAutoFlow: "column", justifyContent: "center", gap: "2rem", marginBottom: "2rem" }}>
                        <button onClick={()=>addToFavorites(song)}>Add to favorite songs</button>
                        <button>Add to playlist</button>
                    </div>
                    <h1 style={{ color: "#191919", fontSize: "28px", fontWeight: "700" }}>Similar Artists</h1>
                    <div className="artist-card-wrapper">

                        {artists.filter(artisst => artist.genreId === artisst.genreId && artisst.id !== artist.id)
                            .map(artisst => {
                                return (
                                    <Link key={artisst.id} to={`/artist/${artisst.id}`}>
                                    <div >
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
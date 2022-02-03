import { useStore } from "./components/store"

export function ProfilePage() {
    const { user } = useStore()

    function getSongs() {
        for (let id of user.favoriteSongs) {
            fetch(`http://localhost:3001/songs/${id}`).then(resp => resp.json())
                .then(song => {
                    return (
                        <Link to={`/song/${song.id}`}>
                            <div key={song.id}>
                                <img style={{ width: "300px", paddingBottom: ".5rem", borderRadius: "20px" }} src={song.img} alt="" />
                                <h2 style={{ color: "#191919", fontSize: "18px", fontWeight: "200" }}>{song.title}</h2>
                                <h3 style={{ color: "#52525D", fontSize: "13px", fontWeight: "200" }}>{song.artist}</h3>
                            </div>
                        </Link>
                    )
                })
        }
    }

    function getArtists() {
        for (let id of user.favoriteArtists) {
            fetch(`http://localhost:3001/artists/${id}`).then(resp => resp.json())
                .then(artist => {
                    return (
                        <Link to={`/artist/${artist.id}`}>
                            <div key={artist.id}>
                                <img style={{ width: "200px", paddingBottom: ".5rem", borderRadius: "50%" }} src={artist.picture} alt="" />
                                <h2 style={{ color: "#191919", fontSize: "20px", fontWeight: "700", textAlign: "center" }}>{artist.name}</h2>
                            </div>
                        </Link>
                    )
                })
        }
    }
    return (
        <section className="song-details-content">
            <Header />
            <div className="song-content-main-wrapper">
                <Sidebar />
                <div className="song-content-wrapper">
                    <div style={{ display: "grid", gridTemplateColumns: "500px 1fr", alignItems: "center", backgroundColor: "#333" }}>
                        <img style={{ borderRadius: "50%", width: "500px" }} src={user.profilePic} alt="" />
                        <h1 style={{ color: "#191919", fontSize: "35px", fontWeight: "700" }}>{user.username}</h1>
                    </div>

                    <h1 style={{ color: "#191919", fontSize: "28px", fontWeight: "700" }}>Favorite Songs</h1>
                    <div className="artist-card-wrapper">
                        {getSongs()}
                    </div>
                    <h1 style={{ color: "#191919", fontSize: "28px", fontWeight: "700" }}>Favorite Artists</h1>
                    <div className="artist-card-wrapper">
                        {getArtists()}
                    </div>
                </div>
            </div>
        </section>
    )
}
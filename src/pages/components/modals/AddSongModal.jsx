import { useStore } from "../store"

export default function AddSongModal() {

    const { updateModal, user } = useStore()

    function addToPlaylist(name) {
        let updatedPlaylists = user.playlists
        let newPlaylist = JSON.parse(JSON.stringify(user.playlists[playlist.id - 1]))
        newPlaylist.push(Number(song.id))

        fetch(`http://localhost:3001/users/${user.id}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ playlists: newPlaylist })
        }).then(resp => resp.json()).then(user => updateUser(user))
    }

    return (
        <div className="modal-wrapper" onClick={() => updateModal('')}>
            <div className="modal" onClick={(e) => e.stopPropagation()}>
                <button onClick={() => updateModal('')} className="close-modal">
                    X
                </button>
                <h2>Pick a playlist to add the song</h2>
                <div style={{ display: "grid", gap: ".5rem", width: "100%" }}>
                    {user.playlists.map(playlist => {
                        return (
                            <div className="playlist-wrapper" key={playlist.id} >
                                <button style={{ cursor: "pointer", borderRadius: "50px", border: "none", padding: ".5rem 1rem", fontSize: "20px", color: "white", backgroundColor: "#f50" }}> + </button>
                                <h4>{playlist.title}</h4>
                            </div>
                        )
                    })}
                    <button onClick={() => updateModal('new-playlist')} style={{ cursor: "pointer", borderRadius: "50px", border: "none", padding: ".5rem 1rem", fontSize: "15px", color: "white", backgroundColor: "#f50" }}>Create playlist</button>
                </div>
            </div>
        </div>
    )
}
import { useStore } from "./store"

export function MainPage() {
    const { songs, artists, user } = useStore()

    return (

        <section className="main-page-content">
            <div className="music-tracks" style={{ marginTop: "2rem" }}>
                <h1 style={{ color: "#191919", fontSize: "28px", fontWeight: "700" }}>Music For You</h1>
                <div className="music-card-wrapper" >
                {songs.filter(song => user.favoriteGenres.includes(song.genreId))
                    .map(song => {
                        return (
                                <div key={song.id} className="music-card" >
                                    <img style={{ width: "300px", paddingBottom: ".5rem", borderRadius: "20px" }} src={song.img} alt="" />
                                    <h2 style={{ color: "#191919", fontSize: "18px", fontWeight: "200" }}>{song.title}</h2>
                                    <h3 style={{ color: "#52525D", fontSize: "13px", fontWeight: "200" }}>{song.artist}</h3>
                                </div>
                        )
                    })}
                    </div>
                {/* <div className="music-card-wrapper" >
                    <div className="music-card" >
                        <img style={{ width: "300px", paddingBottom: ".5rem", borderRadius: "20px" }} src="http://media.oscarmini.com/wp-content/uploads/2014/08/05044727/michaeljackson_coverart.jpg" alt="" />
                        <h2 style={{ color: "#191919", fontSize: "18px", fontWeight: "200" }}>Title of song</h2>
                        <h3 style={{ color: "#52525D", fontSize: "13px", fontWeight: "200" }}>Artist Name</h3>
                    </div>
                </div> */}

                {/* <iframe width="400px" height="250" scrolling="no" frameborder="no" allow="autoplay" src='https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1150594213&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true'></iframe> */}
            </div>
            <div className="podcasts">
                <h1>Popular Podcasts</h1>
            </div>
        </section>
    )
}
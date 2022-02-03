import React from "react"
import ReactPlayer from "react-player"

export function MainPage() {
    return (
        <section className="main-page-content">
            <div className="music-tracks">
                <h1>Music For You</h1>
                {/* <ReactPlayer
        url="https://soundcloud.com/glennmorrison/beethoven-moonlight-sonata"
      /> */}
          <iframe width="400px" height="250" scrolling="no" frameborder="no" allow="autoplay" src='https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1150594213&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true'></iframe>
            </div>
            <div className="podcasts">
                <h1>Popular Podcasts</h1>
            </div>
        </section>
    )
}
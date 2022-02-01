import { Header } from "./components/Header";

export function Main() {
    return (
        <section className="hoxtify-app">
            <Header/>
            <section className="main-wrapper">
                <div className="sidebar"><h1>sidebar</h1></div>
                <div className="main-page-content"><h1>main page content</h1></div>
            </section>
            
        </section>
    )
}
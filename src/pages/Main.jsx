import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";

export function Main() {
    return (
        <section className="hoxtify-app">
            <Header/>
            <section className="main-wrapper">
                <Sidebar />
                <div className="main-page-content"><h1>main page content</h1></div>
            </section>
            
        </section>
    )
}
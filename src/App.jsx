import { Header } from "./components/header";
import { HomePage } from "./components/home";
import { Cards } from "./components/cards";
import { Footer } from "./components/footer";
import { useState } from "react";
import "./style/App.css";

function App() {
    return (
        <>
            <Header /> <HomePage />
            <section className="cards">
                <div className="container">
                    <Cards />
                </div>
            </section>
            <Footer />
        </>
    );
}

export default App;

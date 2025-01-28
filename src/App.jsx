import "./style/App.css";

function App() {
    const circleClick = () => {
        alert("Hozirchalik bu tugma ishlamaydi uzr");
    };

    return (
        <section className="advice-generator-app">
            <div className="card">
                <div className="content">
                    <h4>ADVICE #117</h4>
                    <p>
                        “It is easy to sit up and take notice, what's difficult
                        is getting up and taking action.”
                    </p>
                </div>
                <div className="pause-box">
                    <div className="line"></div>
                    <img
                        src="./src/assets/pause.svg"
                        alt="pause svg"
                        onClick={circleClick}
                    />
                    <div className="line"></div>
                </div>
                <div className="circle" onClick={circleClick}>
                    <img src="./src/assets/icon.svg" alt="icon svg" />
                </div>
            </div>
        </section>
    );
}

export default App;

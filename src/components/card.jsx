export function Card({ icon, title, desc, btnText }) {
    return (
        <div className="card">
            {icon && <img src={icon} alt="icon svg" />}
            <div className="content">
                <h2>{title}</h2>
                <p>{desc}</p>
                {btnText && <button className="card-btn">{btnText}</button>}
            </div>
        </div>
    );
}

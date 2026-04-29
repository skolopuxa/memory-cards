import { Link } from "react-router-dom"
import Header from "../../components/Header/Header";
import './PageMain.css';

export default function PageMain() {
    return (
        <div>
            <Header />
                <main className="main-content">
                <div className="rules-container">
                    <h2 className="rules-title">Правила игры:</h2>
                    <ol className="rules-list">
                        <li>Найдите все одинаковые пары карточек</li>
                        <li>Кликайте на карточки, чтобы открыть их</li>
                        <li>Выигрываете, когда все пары собраны</li>
                    </ol>
                    <Link to="/game" className="start-button">
                        Начать играть
                    </Link>
                </div>
            </main>
        </div>
    );
}
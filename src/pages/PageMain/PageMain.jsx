import { Link } from "react-router-dom"
import Header from "../../components/Header/Header";

export default function PageMain() {
    return (
        <div>
            <Header />
            <main>
                <p>Правила игры:</p>
                <ol className="rules">
                    <li>Правило 1</li>
                    <li>Правило 2</li>
                    <li>Правило 3</li>
                </ol>
                <Link to="/game">Начать играть</Link>
            </main>
            <footer>
                <p>&copy; Ивлева Кира, 2026</p>
            </footer>
        </div>
    );
}
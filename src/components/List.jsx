import images from "../data.json"
import Item from "./Item"
import Card from "./Card/Card"
import { Link } from "react-router-dom"

export default function List() {
    return (
        <>
            <h2>список картинок</h2>
            {
                images.map((item) => (
                        <Link to={`/images/item/${item.id}`}>
                    <Card url={item.url} key={item.id} />
                    </Link>
                ))
            }
        </>
    )
}
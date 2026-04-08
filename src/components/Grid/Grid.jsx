import { useState } from "react"
import Card from "../Card/Card"
import "./Grid.css"


export default function Grid({ images, finishedItems, checkItems }) {
    const [visibleItems, setvisibleItems] = useState([])
    const handleCardClick = (id) => {
        if (finishedItems.includes(id) || visibleItems.includes(id)) {
            return
        }
        switch (visibleItems.length) {
            case 0:
                setvisibleItems([id])
                break
            case 1:
                setvisibleItems((items) => [...items, id])
                checkItems(visibleItems[0], id)
                setTimeout(() => {
                    setvisibleItems([]);
                }, 1000)
                break
            default:
                setvisibleItems([])

        }
    }


    return (
        <div className="grid">
            {
                images.map((item) => (
                    <Card
                        url={item.url}
                        key={item.id}
                        id={item.id}
                        isVisible={visibleItems.includes(item.id)}
                        isFinished={finishedItems.includes(item.id)}
                        onCardClick={handleCardClick}
                    />
                ))
            }
        </div>
    )
}
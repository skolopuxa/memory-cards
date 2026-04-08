import images from "../data.json"
import { useParams } from "react-router-dom";
export default function Item() {
    const param = useParams()
    const image = images[param.id]
    return (
        <>
            <img className="item" src={image.url} alt="" />
        </>
    )
}
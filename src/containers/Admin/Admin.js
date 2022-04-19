import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { getRents } from "../../services/movieService"

export const Admin = () => {

    const navigate = useNavigate();
    const userRole = useSelector(state => state.user.role)
    const [rents, setRents] = useState([])

    useEffect(() => {
        console.log(userRole);
        getRents().then((res) => {
            console.log(res);
            setRents(res)});
    }, [])
    return (
        <>
            <div>
                {rents.map(rent => (<div>
                    <p>Rented movie Id:{rent.idMovie} belonging to user: {rent.idUser}</p>
                </div>))}
            </div>
        </>
    )
}
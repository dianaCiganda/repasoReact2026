import type{CardProps} from "./componentes/Cards";
import { useEffect, useState } from "react"
import Card from "./componentes/Cards";
import './main'
import "./componentes/Cards.css"


function MainApi() {
const [users, setUsers] = useState<CardProps[]>([])

useEffect(() => {
    
    function getUsers() {
    fetch("https://68fcffe796f6ff19b9f6f15d.mockapi.io/v1/personas")
        .then(res => res.json())
        .then(data => {
        console.log(data)
        setUsers(data)
        })
    }

    getUsers();

}, [])

return (
    <main className="main">
    {(users.length > 0) && users.map(user => (
        <Card key={user.id} name={user.name} bio={user.bio}  image={user.image}skills={user.skills} />
    ))}
    </main>
)
}

export default MainApi
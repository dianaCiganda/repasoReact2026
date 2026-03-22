import type{CardProps} from "./componentes/Cards";
import { useEffect, useState } from "react"
import Card from "./componentes/Cards";
import './main'
import "./componentes/Cards.css"
import "./App.css"


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
             <div className="inicio-container">
      <h1 className="titulo">
        Tiempo Solidario
      </h1>

      <p className="subtitulo">
    Conectando corazones, transformando realidades ✨ <br />    
    Somos un equipo comprometido con el cambio social
      </p>
    </div>
        <div className='cards-container'>
    {(users.length > 0) && users.map(user => (
        <Card key={user.id} name={user.name} bio={user.bio}  image={user.image}skills={user.skills} />
    ))} 
    </div>
    </main>
)
}

export default MainApi
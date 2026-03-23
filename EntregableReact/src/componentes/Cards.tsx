import './Cards.css'
export interface CardProps { //creamos un interfaz para los tipos de datos
name: string,
bio: string,
image: string,
skills: string[],
id?: number;
}


function Card({ name, bio, image,skills}: CardProps) { //pasamos como prop los datos que son las claves de la Api

return (
    
    <div className="card">
    <h2>{name}</h2>
    <p>{bio}</p>
    <img src={image} alt="" />
    <p>
  {skills.join(" - ")}   {/* para separar las habilidades con un guion medio */}
</p>
    </div>
    
)
}

export default Card

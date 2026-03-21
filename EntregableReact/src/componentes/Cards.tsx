import './Cards.css'

export interface CardProps {
name: string,
bio: string,
image: string,
skills: string[],
id?: number;
}


function Card({ name, bio, image,skills, id}: CardProps) {

return (
    
    <div className="card">
    <h2>{name}</h2>
    <p>{bio}</p>
    <img src={image} alt="" />
    <p>{skills}</p>
    </div>
    
)
}

export default Card

import './Button.css'
interface BotonProps{
    texto:string
}

function Button({texto}:BotonProps) {
return (
    <button className='estiloBoton'>
        {texto}
    </button>
)
}

export default Button
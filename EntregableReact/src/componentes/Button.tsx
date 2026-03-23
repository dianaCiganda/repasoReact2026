import './Button.css'
interface BotonProps{
    texto:string
}

function Button({texto}:BotonProps) { {/* declaramos una intefaz para los distintos botones */}
return (
    <button className='estiloBoton'>
        {texto}
    </button>
)
}

export default Button

import type { CardProps } from "./componentes/Cards";
import { useState } from "react";
import Card from "./componentes/Cards";
import "./main";
import "./componentes/Cards.css";
import "./App.css";

// MainApi recibe  una propiedad llamada searchTerm (lo que escribe el usuario para buscar)
function MainApi({ searchTerm }: { searchTerm: string }) {

    // Creamos un estado llamado users donde vamos a guardar los datos de las personas
    const [users, setUsers] = useState<CardProps[]>([]);

    // Creamos otro estado para saber si está cargando la información
    const [loading, setLoading] = useState(false);

    // Esta función se ejecuta cuando el usuario hace clic en el botón ver usuarios
    const getUsers = () => {

        // Indicamos que empieza la carga
        setLoading(true);

        // Hacemos una petición a una API (una dirección de internet que devuelve datos).La hicimos en mockApi
        fetch("https://68fcffe796f6ff19b9f6f15d.mockapi.io/v1/personas")
            .then((res) => res.json()) // Convertimos la respuesta a formato JSON
            .then((data) => {

                // Mostramos los datos en la consola (para desarrollo)
                console.log(data);

                // Guardamos los datos en el estado users
                setUsers(data);
            })
            .catch((error) => console.error(error)) // Si hay error, lo mostramos
            .finally(() => setLoading(false)); // Cuando termina, dejamos de cargar
    };

    // Filtramos los usuarios según lo que se escribe en el buscador
    const filteredUsers = users.filter((user) =>
        user.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Retornamos lo que se va a mostrar en pantalla
    return (
        <main className="main">

            {/* Sección de bienvenida */}
            <div className="inicio-container">
                <h1 className="titulo">Tiempo Solidario</h1>

                <p className="subtitulo">
                    Conectando corazones, transformando realidades <br />
                    Somos un equipo comprometido con el cambio social
                </p>

                {/* Botón que ejecuta la función getUsers */}
                <button
                    className="estiloBoton"
                    onClick={getUsers}
                    disabled={loading}
                >
                    {/* Si está cargando muestra "Cargando...", sino "Ver integrantes" */}
                    {loading ? "Cargando..." : "Ver integrantes"}
                </button>
            </div>

            {/* Contenedor donde se muestran las tarjetas */}
            <div className="cards-container">

                {/* Solo muestra las tarjetas si hay usuarios */}
                {users.length > 0 &&
                    filteredUsers.map((user) => (

                        // Por cada usuario, renderiza una Card
                        <Card
                            key={user.id} // clave única para React
                            name={user.name}
                            bio={user.bio}
                            image={user.image}
                            skills={user.skills}
                        />
                    ))}
            </div>
        </main>
    );
}

// Exportamos el componente para poder usarlo en otros archivos
export default MainApi;
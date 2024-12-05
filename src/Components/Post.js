import React from "react";
import { useParams } from "react-router-dom";

const posts = {
    1 : { title: 'React Router desde Cero', content: 'En la cultura popular, en la ufología y en la xenobiología, se denomina extraterrestre a todo ser vivo originario de cualquier sitio ajeno a la Tierra.​ La mayor parte de las personas solo tiene en cuenta esta definición al referirse a los seres provenientes del espacio exterior.'},
    2 : { title: 'Extraterrestres en el mar', content: 'Búsqueda directa, es decir, la observación de vida microbiana o de cualquier tipo en los cuerpos celestes que la humanidad llegue a visitar. Detección indirecta, o la detección de características o marcas distintivas de la vida en cuerpos celestes a través de telescopios avanzados.'},
    3 : { title: 'Tendremos puerto espacial en peru', content: 'el puerto de chiclayo sera una fachada para el nuevo puerto extraterrestre puesto que los chinos son los mas felices ya que paran extrayendo nuestras riquezas para alimentar a sus lideres extraterrestres'}
}

const Post = () => {
    const { id } = useParams();
    const post = posts[id];
    
    if(!post){
        return <h2>Post no encontrado</h2>;
    }
    return(
        <div>
            <h1>{post.title}</h1>
            <p>{post.content}</p>
        </div>
    );
}

export default Post;
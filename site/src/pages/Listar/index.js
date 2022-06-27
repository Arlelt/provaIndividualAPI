import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import { useEffect, useState } from "react";
import './index.scss';

export default function Listar () {
    const [anime, setAnime] = useState([]);
    const navigate = useNavigate();

    async function listarAnimes () {
        const r = await axios.get('http://localhost:5000/anime');
        
        return setAnime(r.data);
    }

    useEffect(() => {
        listarAnimes();
    }, []);

    function Home () {
        navigate('/')
    };


    return(
        <main className="listar-main">
            <h1>Animes</h1>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nome</th>
                    </tr>
                </thead>
                <tbody>
                    {anime.map(item =>
                        <tr>
                            <td>{item.id}</td>
                            <td>{item.anime}</td>
                        </tr>
                    )}
                    
                </tbody>
            </table>

            <div><button onClick={Home}>Home</button></div>
        </main>
    );
}
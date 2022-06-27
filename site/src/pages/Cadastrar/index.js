import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import { useState } from "react";

export default function Cadastrar () {
    const [anime, setAnime] = useState('');
    const navigate = useNavigate();

    async function cadastrarClick () {
        const r = await axios.post('http://localhost:5000/anime', {
            anime: anime
        })
        return r.data;
    }

    function Home () {
        navigate('/')
    }

    return(
        <main>
            <h1>Cadastrar Anime</h1>

            <div>
                <input type='text' value={anime} onChange={e => setAnime(e.target.value)} /> 
                <button onClick= {cadastrarClick} > Cadastrar</button>

            </div>

            <div><button onClick={Home}>Home</button></div>


        </main>
    );
}
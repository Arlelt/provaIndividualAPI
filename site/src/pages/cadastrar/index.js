import axios from 'axios'
import { useState } from 'react';

export default function Index () {
    const [anime, setAnime] = useState('');

    return (
        <main>
            <h1>Cadastrar anime</h1>
            <p>Insira o nome do anime: </p> <input type= 'text' value={anime} onChange={e => setAnime(e.target.value)}></input> <button>Cadastrar</button>
        </main>
    );
}
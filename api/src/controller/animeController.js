import {Router} from 'express';
import { inserirAnime, listarAnimes } from '../Repository/animeRepository.js';

const server = Router();

server.post('/anime', async (req, resp) => {
    try {
        const {anime} = req.body;

        if (!anime) throw new Error("Insira o nome do anime")

        const resposta = await inserirAnime(anime);
       

        resp.status(200).send(resposta);
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
    
})

server.get ('/anime', async (req, resp) => {
    try {
        const resposta = await listarAnimes();
        if (!resposta)
            throw new Error('Não foi possível listar os animes')
        resp.send(resposta);
    } catch (err) {
        resp.status(400).send({
            erro:err.message
        })
    }
    
} )


export default server;
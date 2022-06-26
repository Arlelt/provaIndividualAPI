import { con } from "./connection.js";

export async function inserirAnime (anime) {
    const comando = 
    `insert into tb_anime (nm_anime)
    values (?)`

    const [resposta] = await con.query (comando, [anime]);
    
    
    return resposta[0];
}

export async function listarAnimes () {
    const comando = 
    `select id_anime            id,
            nm_anime			anime
    from tb_anime`

    const [resposta] = await con.query (comando);
    return resposta;
}
const nomes = ["Aventureiro", "Explorador Urbano", "Apaixonado por Cultura", "Viciado em Natureza", "Turista Gastronômico"];

export function aleatorio (lista){
    const posicao = Math.floor(Math.random()* lista.length);
    return lista[posicao];
}

export const nome = aleatorio(nomes);
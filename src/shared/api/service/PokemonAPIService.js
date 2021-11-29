import http from '../PokemonAPI'

const searchPokemon = (search) => {
    return http.get(`/pokemon/${search}`)
}

export default {
    searchPokemon
}
import Axios from 'axios'
import { useState, useEffect } from 'react'
import PokemonAPIService from '../../shared/api/service/PokemonAPIService'

export const DisplayDataView = () => {
    const [serverResponse, setServerResponse] = useState()
    const [search, setSearch] = useState('')

    const fetchData2 = async () => {
        try {
            const { data } = await PokemonAPIService.searchPokemon(search.toLowerCase())
            setServerResponse(data)
            console.log(data)
        } catch (error) {
            console.log(error)
        }
    }

    /*useEffect(() => {
        fetchData2()
    }, [search])*/

    return (
        <div>
            <input type="text" onKeyDown={(e) => { if (e.key.toLowerCase() === "enter") fetchData2() }} onChange={(e) => setSearch(e.target.value)} />
            <button onClick={() => fetchData2()}>Search</button>
            {/*button onClick={() => console.log(serverResponse)}> Show Variable</button>*/}


            {serverResponse?.name && <h1> Name: {serverResponse?.name}</h1>}
            {serverResponse?.abilities && <h3> Ability: {serverResponse?.abilities[0].ability.name}</h3>}
            {serverResponse?.abilities && <h3> Hidden: {serverResponse?.abilities[1].ability.name}</h3>}
            {serverResponse?.sprites && <img src={serverResponse?.sprites.front_default} />}
        </div >
    )
}

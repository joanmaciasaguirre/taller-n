import logo from './logo.svg';
import {useState, useEffect, useDeferredValue} from "react";
import './App.css';

function App() {
    const [characters, setCharacters] = useState([])

    async function  getAllCharacters(){



        const response =await fetch('https://rickandmortyapi.com/api/character')
        const characters = await response.json()

      //  const  aliveCharacter =characters.results.filter(character => character.status==='Alive')
      //  setCharacters( aliveCharacter)

        setCharacters( characters.results)
    }
    function killAllCharacters(){
        const  killedCharacters =[...characters]
        killedCharacters.forEach(character =>  character.status= 'dead' )
        setCharacters(killedCharacters)

    }
    function vivoAllCharacters(){
        const  vivCharacters =[...characters]
        vivCharacters.forEach(character =>  character.status= 'Alive' )
        setCharacters(vivCharacters)

    }
    function noexiAllCharacters(){
        const  noCharacters =[...characters]
        noCharacters.forEach(character =>  character.status= 'unknown' )
        setCharacters(noCharacters)

    }

    useEffect(  () =>{
        getAllCharacters()

    }, [] )



    return(
<section className="main">

    <h1 className="title">Rick and Morty</h1>
    <p className="description">Esta es una lista de Rick</p>
    <button
        className="button"
        onClick={killAllCharacters}
    >mostrar personajes muertos</button>

    <button
        className="button"
        onClick={vivoAllCharacters}
    >mostrar personajes vivos</button>
    <button
        className="button"
        onClick={noexiAllCharacters}
    >mostrar personajes no existen</button>



    <section className="grid">
        {characters?.map(character =>(


        <div className="card">
            <img
                className="image"
                src={character.image}
                alt={character.name}
                width="380px"
                height="380px"
            />
            <h2 className="name"> {character.name} </h2>
            <div className="info">
                <span className={`status ${
                    character.status !== 'Alive'? 'red-status' : '' 
                    
                    
                }`}/>
                <span className="text">{character.status}-{character.species}</span>
                <div className="info">

                <span className="sexy">Sexo-{character.gender}</span>
                </div>
            </div>

        </div>
            ))}
    </section>

</section>
);
}

export default App;

import { useEffect, useState } from 'react';
import { useLocalStorage } from 'react-use';
import './App.css';
import CustomAlert from './components/Alert';
import CustomCard from './components/Card';
import Navbar from './components/Navbar';
import Search from './components/Search';

function App() {
  const [cacheSearch, setCacheSearch] = useLocalStorage('pokemonSearch', []);
  const [pokemon, setPokemon] = useState({});
  const [searchPokemon, setSearchPokemon] = useState('');
  const [open, setOpen] = useState(false);

  useEffect(() => {
    externalRequest();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    saveInCache();
    // eslint-disable-next-line
  }, [pokemon]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setOpen(false);
    }, 5000);

    return () => {
      clearTimeout(timeout);
    }
  }, [open]);

  function verifyInCache() {
    cacheSearch.find(item => item.name === searchPokemon.toLowerCase());
  }

  function saveInCache() {
    setCacheSearch([...cacheSearch, pokemon]);
  }

  async function handleFindPokemon() {
    const result = verifyInCache();
    if (result) {
      return setPokemon(result);
    }
    await externalRequest();
    setSearchPokemon('');
  }

  async function externalRequest() {
    try {
      if (!searchPokemon) {
        const currentPokemon = {
          name: "",
          abilities: "",
          image: ""
        }
        setPokemon(currentPokemon);
      } else {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${searchPokemon}`);
        // const { name, sprites: { other }, abilities } = await response.json();
        // const { dream_world: { front_default } } = other;
        const {
          name,
          sprites: { other: { dream_world: { front_default } } },
          abilities } = await response.json();

        const currentPokemon = {
          name,
          abilities,
          image: front_default
        }

        setPokemon(currentPokemon);
      }
    } catch (error) {
      console.log(error.message);
      searchPokemon && setOpen(true);
    }
  }

  return (
    <div className="app">
      <Navbar />
      {open && <CustomAlert
        pokemon={pokemon}
        searchPokemon={searchPokemon}
        open={open}
      />}
      <div className="main">
        <CustomCard
          name={pokemon.name}
          abilities={pokemon.abilities}
          image={pokemon.image}
        />
        <Search
          searchPokemon={searchPokemon}
          setSearchPokemon={setSearchPokemon}
          handleFindPokemon={handleFindPokemon}
        />
      </div>
    </div>
  );
}

export default App;

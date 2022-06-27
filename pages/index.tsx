import type { NextPage, GetStaticProps } from 'next';

import { Grid } from '@nextui-org/react';

import { pokeApi } from '../api';
import { Layout } from '../components/layouts';
import { PokemonListResponse, SmallPokemon } from '../interfaces';
import { PokemonCard } from '../components/pokemon';

interface Props {
  pokemons: SmallPokemon[];
}


const HomePage: NextPage<Props> = ({pokemons}) => {

  return (
    <>
      <Layout title='Listado de Pokémons'>
        <Grid.Container gap={2} justify='flex-start'>
          {
            pokemons.map( (pokemon) => (
              <PokemonCard key={pokemon.id} pokemon={pokemon} />
            ))
          }
        </Grid.Container>
      </Layout>
    </>
  )
}

// Esto solo se ejecuta en tiempo de Construccion de la App
// o en momento de invocar peticiones al Server como un API
// excepto con las props que si se reflejan en el componente 
// y en modo de desarrollo. En Produccion se ejecuta una sola vez
export const getStaticProps: GetStaticProps = async (ctx) => {
  const { data } = await pokeApi.get<PokemonListResponse>('/pokemon?limit=151');

  // data.results.map( (pokemon, index) => {
  //   console.log( pokemon.name, '-', index + 1);
  //   pokemon.id = index + 1;
  //   pokemon.img = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${index+1}.svg`;
  // });

  const pokemons: SmallPokemon[] = data.results.map( (poke, i) => ({
    ...poke,
    id: i + 1,
    img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${i + 1}.svg`
  }));

  return {
    props: {
      pokemons: pokemons
    }
  }
}

export default HomePage;

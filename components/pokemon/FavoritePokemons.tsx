import { NextPage } from 'next';
import { Grid } from '@nextui-org/react';
import { FavoriteCardPokemon } from './FavoriteCardPokemon';

interface Props {
    favoritePokemons: number[]
}


export const FavoritePokemon: NextPage<Props> = ({favoritePokemons}) => {
  return (
    <Grid.Container gap={2} direction='row' justify='flex-start'>
    {
        favoritePokemons.map( id => (
          <FavoriteCardPokemon pokemonId={id} key={id} />
        ))
    }
    </Grid.Container>
  )
}

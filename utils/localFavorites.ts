

const toggleFavorite = ( id: number ) =>  {
    console.log('Favorite llamado');

    let favorites: number[] = JSON.parse( localStorage.getItem('favorites') || '[]' );

    if ( favorites.includes(id) ) {
        favorites = favorites.filter( pokeId => pokeId !== id);
    } else {
        favorites.push( id );
    }

    localStorage.setItem( 'favorites', JSON.stringify( favorites) );
};

const existInFavorite = ( id: number ): boolean => {

    // Si se esta generando del lado del Servidor regresa false
    if ( typeof window  === 'undefined' ) return false;

    const favorites: number[] = JSON.parse( localStorage.getItem('favorites') || '[]' );

    return favorites.includes( id );
};

const pokemons = (): number[] => {

    return JSON.parse( localStorage.getItem('favorites') || '[]' );

}

/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */
export default {
    existInFavorite,
    pokemons,
    toggleFavorite,
};
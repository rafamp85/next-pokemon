import { FC } from 'react';
import Head from "next/head"
import { Navbar } from '../ui';

interface LayoutProps  {
    title: string,
    children: JSX.Element
}


const origin = ( typeof window === 'undefined') ? '' : window.location.origin;

export const Layout: FC<LayoutProps> = ({ children, title }: LayoutProps) => {
  return (
    <>
        <Head>
            <title>{title || 'PokemonApp'}</title>
            <meta name="author" content="Rafael Morales" />
            <meta name="description" content={`Información sobre el pokémon: ${title}`} />
            <meta name="keywords" content={`${title}, pokemon, pokedex`} />
            <meta property="og:title" content={`Información sobre el pokémon: ${title}`} />
            <meta property="og:description" content={`Pagina divertida para obtener informacion sobre Pokemons como ${title}`} />
            <meta property="og:image" content={`${origin}/img/banner.png`} />
        </Head>

        <Navbar />

        <main style={{
            padding: '0px 20px'
        }}>
            { children }
        </main>
    </>
  )
}

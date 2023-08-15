import Head from "next/head"
import { FC } from "react"
import { Navbar } from "../ui"

interface Props {
    children: JSX.Element,
    title?: string
}

const origin = (typeof window === 'undefined') ? '' : window.location.origin;

const Layout: FC<Props> = ({ children, title = 'PokemonApp' }) => {

    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="author" content="Sandro Dezerio" />
                <meta name="description" content="Información sobre el pokemon XXXX" />
                <meta name="keywords" content={`${title}, pokemon, pokedex`} />

                <meta property="og:title" content={`Información sobre ${title}`} />
                <meta property="og:description" content={`Esta es la página sobre ${title}`} />
                <meta property="og:image" content={`${origin}/img/banner.png`} />
            </Head>

            <Navbar/>

            <main style={{
                padding: '0px 20px'
            }}>
                {children}
            </main>
        </>
    )
}

export default Layout

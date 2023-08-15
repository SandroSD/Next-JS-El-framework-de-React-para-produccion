import { FC } from "react";
import { Card, Grid } from "@nextui-org/react";
import { useRouter } from "next/router";

interface Props {
    pokemonId: number;
}

const FavoriteCardPokemon: FC<Props> = ({ pokemonId }) => {
    const router = useRouter();

    const onFavoritePokemonClicked = () => {
        router.push(`/pokemon/${pokemonId}`);
    }
    return (
        <Grid xs={6} sm={3} md={2} xl={1}>
            <Card isHoverable isPressable css={{ padding: 10 }} onClick={onFavoritePokemonClicked}>
                <Card.Image
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemonId}.svg`}
                    width={'100%'}
                    height={140}
                />
            </Card>
        </Grid>
    )
}

export default FavoriteCardPokemon;
const API_URL = "https://pokeapi.co/api/v2";

const basicFecth = async (endpoint) => {
  return (await fetch(`${API_URL}${endpoint}`)).json();
};

export default {
  getSpritesList: async () => {
    const resultado = await basicFecth(`/pokemon?limit=200&offset=0`);

    const teste = await Promise.all(
      resultado.results.map(async (pokemon) => {
        return basicFecth(`/pokemon/${pokemon.name}`);
      })
    );

    const sprites = teste.map((a) => ({
      id: a.id,
      imgUrl: a.sprites.other["official-artwork"].front_default,
      name: a.name,
      tipo: a.types[0].type.name,
      skill1: a.abilities[0].ability.name,
    }));

    return sprites;
  },
};

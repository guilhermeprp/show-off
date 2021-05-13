const API_URL = "https://pokeapi.co/api/v2";

const basicFecth = async (endpoint) => {
  return (await fetch(`${API_URL}${endpoint}`)).json();
};

export default {
  getSpritesList: async () => {
    const resultado = await basicFecth(`/pokemon?limit=100&offset=200`);
    const teste = await Promise.all(
      resultado.results.map(async (pokemon) => {
        return basicFecth(`/pokemon/${pokemon.name}`);
      })
    );
    const sprites = teste.map((a) => ({
      imgUrl: a.sprites.front_default,
      name: a.name,
    }));

    return sprites;
  },
};

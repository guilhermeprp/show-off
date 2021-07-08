import React, { useEffect, useState } from "react";
import styles from "../styles/Slides.module.scss";
import model from "../pages/api/model";

export default function Slides() {
  const [pokemonSpritesList, setPokemonSpritesList] = useState([]);
  const pokeColor = {
    normal: "#CACAC1",
    poison: "#A95CA0",
    psychic: "#F763B2",
    grass: "#8CD851",
    ground: "#EDCB56",
    ice: "#96F2FF",
    fire: "#FA5643",
    rock: "#CDBC72",
    dragon: "#8774FF",
    water: "#56ADFF",
    bug: "#BECE1E",
    dark: "#000",
    fighting: "#A95643",
    ghost: "#7773D4",
    steel: "#C2C0D9",
    flying: "#78A3FF",
    electric: "#FDE23A",
    fairy: "#F9ADFF",
  };

  useEffect(() => {
    const load = async () => {
      let pokedexImgs = await model.getSpritesList();
      setPokemonSpritesList(pokedexImgs);
    };

    load();
  }, []);

  console.log(pokemonSpritesList);

  const prevSlide = () => {
    document.querySelector("#card-row").scrollBy(-1200, 0);
  };

  const nextSlide = () => {
    document.querySelector("#card-row").scrollBy(1200, 0);
  };

  const openHandle = (evento) => {
    console.log(evento.target.className);
  };

  return (
    <div className="background">
      <div className={styles.rowWrapper}>
        <div id="card-row" className={styles.cardRow}>
          <div
            className={styles.cardWrapper}
            style={{
              width: pokemonSpritesList.length * 300,
            }}
          >
            <div className={styles.prevSlide} onClick={prevSlide}>
              <span>{"<"}</span>
            </div>
            {pokemonSpritesList
              .sort((a, b) => (a.name > b.name ? 1 : -1))
              .map((item, key) => (
                <div key={key} className={styles.cards} onClick={openHandle}>
                  <h1>{item.name.toUpperCase()}</h1>
                  <img className={styles.pokemonBG} src="/card_bg.png" />
                  <div className={styles.pokemonBox}>
                    <img className={styles.pokemonImg} src={item.imgUrl} />
                  </div>
                  <div className={styles.description}>
                    <p
                      style={{
                        color:
                          pokeColor[item.tipo] === "#000"
                            ? "#f9f9f9"
                            : pokeColor[item.tipo],
                      }}
                    >
                      TYPE: {item.tipo.toUpperCase()}
                    </p>
                    <p
                      style={{
                        color:
                          pokeColor[item.tipo] === "#000"
                            ? "#f9f9f9"
                            : pokeColor[item.tipo],
                      }}
                    >
                      SKILL: {item.skill1.toUpperCase()}
                    </p>
                  </div>
                  <div
                    className={styles.cardBackground}
                    style={{
                      background: pokeColor[item.tipo],
                    }}
                  ></div>
                </div>
              ))}
            <div className={styles.nextSlide} onClick={nextSlide}>
              <span>{">"}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

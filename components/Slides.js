import React, { useEffect, useState } from "react";
import styles from "../styles/Slides.module.scss";
import model from "../pages/api/model";

export default function Slides() {
  const [pokemonSpritesList, setPokemonSpritesList] = useState([]);

  useEffect(() => {
    const load = async () => {
      let pokedexImgs = await model.getSpritesList();
      setPokemonSpritesList(pokedexImgs);
    };

    load();
  }, []);

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

  const prevSlide = () => {
    document.querySelector("#card-row").scrollBy(-1200, 0);
  };

  const nextSlide = () => {
    document.querySelector("#card-row").scrollBy(1200, 0);
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
                <div key={key} className={styles.cards}>
                  <h1>{item.name.toUpperCase()}</h1>
                  <img class={styles.pokemonBG} src="/card_bg.png" />
                  <div class={styles.pokemonBox}>
                    <img class={styles.pokemonImg} src={item.imgUrl} />
                  </div>
                  <div className={styles.description}>
                    <p>{item.tipo.toUpperCase()}</p>
                    <p>Lorem ipsu</p>
                    <p>Lorem ipsu</p>
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

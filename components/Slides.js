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

  const cardBackground = (poketipo) => {
    console.log(poketipo);
    if (poketipo === "normal") {
      return "#CACAC1";
    }
    if (poketipo === "poison") {
      return "#A95CA0";
    }
    if (poketipo === "psychic") {
      return "#F763B2";
    }
    if (poketipo === "grass") {
      return "#8CD851";
    }
    if (poketipo === "ground") {
      return "#EDCB56";
    }
    if (poketipo === "ice") {
      return "#96F2FF";
    }
    if (poketipo === "fire") {
      return "#FA5643";
    }
    if (poketipo === "rock") {
      return "#CDBC72";
    }
    if (poketipo === "dragon") {
      return "#8774FF";
    }
    if (poketipo === "water") {
      return "#56ADFF";
    }
    if (poketipo === "bug") {
      return "#BECE1E";
    }
    if (poketipo === "dark") {
      return "#000";
    }
    if (poketipo === "fighting") {
      return "#A95643";
    }
    if (poketipo === "ghost") {
      return "#7773D4";
    }
    if (poketipo === "steel") {
      return "#C2C0D9";
    }
    if (poketipo === "flying") {
      return "#78A3FF";
    }
    if (poketipo === "electric") {
      return "#FDE23A";
    }
    if (poketipo === "fairy") {
      return "#F9ADFF";
    }
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
                      background: cardBackground(item.tipo),
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

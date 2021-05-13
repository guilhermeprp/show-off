import React, { useEffect, useState } from "react";
import styles from "../styles/Slides.module.scss";
import model from "../pages/api/model";

export default function Slides() {
  const [pokemonSpritesList, setPokemonSpritesList] = useState([]);
  const [scrollX, setScrollX] = useState(0);

  useEffect(() => {
    const load = async () => {
      let pokedexImgs = await model.getSpritesList();
      setPokemonSpritesList(pokedexImgs);
    };

    load();
  }, []);

  const cardBackground = () => {
    var randomColor = Math.floor(Math.random() * 16777215).toString(16);
    return randomColor;
  };

  const prevSlide = () => {
    let x = scrollX + Math.round(window.innerWidth / 2);
    if (x > 0) {
      x = 0;
    }
    setScrollX(x);
  };

  const nextSlide = () => {
    let x = scrollX - Math.round(window.innerWidth / 2);
    let listW = pokemonSpritesList.length * 300;
    if (window.innerWidth - listW > x) {
      x = window.innerWidth - listW - 60;
    }
    setScrollX(x);
  };

  return (
    <div className="background">
      <div className={styles.rowWrapper}>
        <div className={styles.cardRow}>
          <div
            className={styles.cardWrapper}
            style={{
              marginLeft: scrollX,
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
                  <img class={styles.pokemonBG} src={item.imgUrl} />
                  <div class={styles.pokemonBox}>
                    <img class={styles.pokemonImg} src={item.imgUrl} />
                  </div>
                  <div
                    className={styles.cardBackground}
                    style={{
                      background: "#" + cardBackground(),
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

import React, { Suspense } from "react";
import styles from "./MovieInfo.module.css";

function MovieInfo() {
  return (
    <div className={styles.content_width}>
      <div className={styles.img_width}>
        <Suspense fallback={<div>Loading...</div>}>
          <img
            className={styles.poster}
            src="https://www.themoviedb.org/t/p/w600_and_h900_bestv2/1UCOF11QCw8kcqvce8LKOO6pimh.jpg"
            alt=""
          />
        </Suspense>
      </div>
      <div className={styles.movie_details}>
        <div className={styles.movie_info}>
          <div className={styles.title_div}>
            <h1>Mortal Kombat</h1>
          </div>
          <div className={styles.facts}>
            <span className={styles.year}>1995</span>
            <span className="padding">•</span>
            <span className={styles.runtime}>101 min</span>
            <span className="padding">•</span>
            <span className={styles.language}>English</span>
          </div>
          <div>
            <p className={styles.genres}>
              <span
                className={styles.caption_text_size}
                style={{ fontWeight: "450" }}
              >
                Genre:{" "}
              </span>
              <span className={styles.caption_text_size}>
                Action, Adventure, Fantasy, Sci-Fi, Thriller
              </span>
            </p>
            <p>
              <span className={styles.caption_text_size}>Cast: </span>
              <span className={styles.caption_text_size}>
                Christopher Lambert, Robin Shou, Linden Ashby, Cary-Hiroyuki
                Tagawa"
              </span>
            </p>
          </div>
        </div>
        <div>
          <p className={styles.plot_text_size}>
            Plot: "Based on the popular video game of the same name "Mortal
            Kombat" tells the story of an ancient tournament where the best of
            the best of different Realms fight each other. The goal - ten wins
            to be able to legally invade the losing Realm. Outworld has so far
            collected nine wins against Earthrealm, so it's up to Lord Rayden
            and his fighters to stop Outworld from reaching the final victory.
          </p>
        </div>
        <div>
          <div>
            <p className={styles.caption_text_size}>
              <span style={{ fontSize: "1.4rem", fontWeight: "500" }}>
                Paul W.S. Anderson
              </span>
              <br /> Director
            </p>
          </div>
          <div style={{ marginTop: "8px" }}>
            <p className={styles.caption_text_size}>
              Cast:{" "}
              <span className={styles.caption_text_size}>
                Christopher Lambert, Robin Shou, Linden Ashby, Cary-Hiroyuki
                Tagawa
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieInfo;

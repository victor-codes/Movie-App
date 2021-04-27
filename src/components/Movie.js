import React from "react";

function truncateString(str, num) {
  return str.split(" ").slice(0, num).join(" ").concat(" read more");
}

const Movie = ({
  title,
  plot,
  poster,
  director,
  genre,
  year,
  cast,
  time,
  lang,
}) => {
  return (
        <div className="movie_div">
          <div className="movie_poster">
            <img className="poster" src={poster} alt={title} />
          </div>
          <div>
            <div className="movie_details">
              <div className="title_div">
                <h2>{title} </h2>
              </div>
              <div className="facts">
                <p className="year">{year}</p><span className="padding">
                  •</span>
                <p className="runtime">{time}</p><span className="padding">
                  •</span>
                <p className="language">{lang}</p>
              </div>
              <div>
                <p className="genre">Genre: {genre}</p>
              </div>
            </div>
            <div className="plot_div">
              <p className="plot-text_size">{truncateString(plot, 18)}</p>
            </div>
            <div>
              <p className="italic">
                <span style={{ fontSize: "1.2rem", fontWeight: "500" }}>
                  {director}
                </span>
                <br /> Director
          </p>
            </div>
            <div style={{ marginTop: "8px" }}>
              <p>Cast: {cast}</p>
            </div>
          </div>
        </div>
  );
};

export default Movie;

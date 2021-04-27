import React, { useState, createContext, useEffect } from "react";
import axios from "axios";

export const MovieContext = createContext();

const apikey = "352d50a";

const apiUrl = `https://www.omdbapi.com/?apikey=${apikey}&t=mortal+kombat&plot=full`

export default function MovieProvider(props) {
  useEffect(() => {
      axios.get(apiUrl).then((response)=> {
          const data = response.data
          console.log(data);
          setMoviesList([data])
      })
  });

  const [moviesList, setMoviesList] = useState([
    {
      Title: "Mortal Kombat",
      Poster:
        "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/yiu9ISHAbbZATKl0FaMPh8is7Oa.jpg",
      Plot:
        "Washed-up MMA fighter Cole Young, unaware of his heritage, and hunted by Emperor Shang Tsung's best warrior, Sub-Zero, seeks out and trains with Earth's greatest champions as he prepares to stand against the enemies of Outworld in a high stakes battle for the universe.",
      Director: "Simon McQuoid",
      Year: "2021",
      Runtime: "1h 50m",
      genre: "Fantasy, Action, Adventure, Science Fiction, Thriller",
      Language: "English",
      Actors: " Lewis Tan, Jessica McNamee, Josh Lawson",
    },
    {
      Title: "Godzilla vs. Kong",
      Poster:
        "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/pgqgaUx1cJb5oZQQ5v0tNARCeBp.jpg",
      Plot:
        "In a Runtime when monsters walk the Earth, humanity’s fight for its future sets Godzilla and Kong on a collision course that will see the two most powerful forces of nature on the planet collide in a spectacular battle for the ages.",
      Director: "Adam Wingard",
      Year: "2021",
      Runtime: "1h 59m",
      genre: "Action, Science Fiction, Comedy",
      Language: "English",
      Actors: " Natsuki Hanae, Akari Kitô, Yoshitsugu Matsuoka",
    },
    {
      Title: "Demon Slayer –Kimetsu no Yaiba– The Movie: Mugen Train",
      Poster:
        "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/h8Rb9gBr48ODIwYUttZNYeMWeUU.jpg",
      Plot:
        "Tanjirō Kamado, joined with Inosuke Hashibira, a boy raised by boars who wears a boar's head, and Zenitsu Agatsuma, a scared boy who reveals his true power when he sleeps, boards the Infinity Train on a new mission with the Fire Hashira, Kyōjurō Rengoku, to defeat a demon who has been tormenting the people and killing the demon slayers who oppose it!",
      Director: "Haruo Sotozaki",
      Year: "2020",
      Runtime: "2hrs",
      genre: "Animation, Action, Adventure, Fantasy, Drama",
      Language: "English",
      Actors: " Natsuki Hanae, Akari Kitô, Yoshitsugu Matsuoka",
    },
    {
      Title: "Monster Hunter",
      Poster:
        "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/1UCOF11QCw8kcqvce8LKOO6pimh.jpg",
      Plot:
        "A portal transports Cpt. Artemis and an elite unit of soldiers to a strange world where powerful monsters rule with deadly ferocity. Faced with relentless danger, the team encounters a mysterious hunter who may be their only hope to find a way home.",
      Director: "Paul W. S. Anderson",
      Year: "2020",
      Runtime: "1h 44m",
      genre: "Fantasy, Action, Adventure",
      Language: "English",
      Actors: " Milla Jovovich, Tony Jaa, Ron Perlman ",
    },
    {
      Title: "New Gods: Nezha Reborn",
      Poster:
        "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/6goDkAD6J3br81YMQf0Gat8Bqjy.jpg",
      Plot:
        "3000 Years after the boy-god Nezha conquers the Dragon King then disappears in mythological Runtimes, he returns as an ordinary man to find his own path to becoming a true hero.",
      Director: " Ji Zhao",
      Year: "2021",
      Runtime: "1h 56m",
      genre: "Animation, Action, Fantasy",
      Language: "English",
      Actors: "Nicole Fong, Victoria Grace, Jason Ko",
    },
    {
      Title: "Outside the Wire ",
      Poster:
        "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/6XYLiMxHAaCsoyrVo38LBWMw2p8.jpg",
      Plot:
        "In the near future, a drone pilot is sent into a deadly militarized zone and must work with an android officer to locate a doomsday device.",
      Director: "Mikael Håfström",
      Year: "2021",
      Runtime: "1h 56m",
      genre: "Thriller, Action, Science Fiction",
      Language: "English",
      Actors: " Anthony Mackie, Damson Idris, Enzo Cilent",
    },
    {
      Title: "Space Sweepers",
      Poster:
        "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/p9YDHJKvUoi7v2SCd3vLGPae1Xp.jpg",
      Plot:
        "When the crew of a space junk collector ship called The Victory discovers a humanoid robot named Dorothy that's known to be a weapon of mass destruction, they get involved in a risky business deal which puts their lives at stake.",
      Director: "Jo Sung-hee",
      Year: "2021",
      Runtime: "2h 16m",
      genre: "Drama, Fantasy, Science Fiction",
      Language: "English",
      Actors: " Song Joong-Ki, Kim Tae-ri, Seon-kyu Jin ",
    },
    {
      Title: "Soul",
      Poster:
        "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/hm58Jw4Lw8OIeECIq5qyPYhAeRJ.jpg",
      Plot:
        "Joe Gardner is a middle school teacher with a love for jazz music. After a successful gig at the Half Note Club, he suddenly gets into an accident that separates his soul from his body and is transported to the You Seminar, a center in which souls develop and gain passions before being transported to a newborn child. Joe must enlist help from the other souls-in-training, like 22, a soul who has spent eons in the You Seminar, in order to get back to Earth.",
      Director: "Kemp Powers",
      Year: "2020",
      Runtime: "1h 41m",
      genre: "Family, Animation, Comedy, Drama, Music, Fantasy",
      Language: "English",
      Actors: "Jamie Foxx, Tina Fey, Graham Norton",
    },
    {
      Title: "Love and Monsters",
      Poster:
        "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/r4Lm1XKP0VsTgHX4LG4syAwYA2I.jpg",
      Plot:
        "Seven years since the Monsterpocalypse began, Joel Dawson has been living underground in order to survive. But after reconnecting over radio with his high school girlfriend Aimee, Joel decides to venture out to reunite with her, despite all the dangerous monsters that stand in his way.",
      Director: "Michael Matthews",
      Year: "2020",
      Runtime: "1h 49m",
      genre: "Comedy, Action, Adventure, Fantasy",
      Language: "English",
      Actors: " Dylan O'Brien, Jessica Henwick, Michael Rooker",
    },
    {
      Title: "Raya and the Last Dragon",
      Poster:
        "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/lPsD10PP4rgUGiGR4CCXA6iY0QQ.jpg",
      Plot:
        "Long ago, in the fantasy world of Kumandra, humans and dragons lived together in harmony. But when an evil force threatened the land, the dragons sacrificed themselves to save humanity. Now, 500 years later, that same evil has returned and it’s up to a lone warrior, Raya, to track down the legendary last dragon to restore the fractured land and its divided people.",
      Director: "Carlos López Estrada",
      Year: "2021",
      Runtime: "1h 47m",
      genre: "Animation, Adventure, Fantasy, Family, Action",
      Language: "English",
      Actors: "Kelly Marie Tran, Awkwafina, Gemma Chan",
    },
  ]);

  return (
    <MovieContext.Provider value={[moviesList]}>
      {props.children}
    </MovieContext.Provider>
  );
}

import React from "react";
import "./styles.css";
import { useState } from "react";

const animeDB = {
  beginner: [
    { name: "Death Note", rating: "10/10" },
    { name: "Naruto", rating: "8.2/10" },
    { name: "Demon Slayer", rating: "8/10" },
    { name: "Jujutsu Kaisen", rating: "8/10" }
  ],

  thriller: [
    {
      name: "Classroom of the Elite",
      rating: "11/10"
    },
    {
      name: "Attack on Titan",
      rating: "10/10"
    },
    {
      name: "Erased",
      rating: "9.6/10"
    },
    {
      name: "Stiens Gate",
      rating: "8.3/10"
    }
  ],
  action: [
    {
      name: "One Piece",
      rating: "11/10"
    },
    {
      name: "HunterxHunter",
      rating: "9/10"
    },
    {
      name: "Tokyo Revengers",
      rating: "8.6/10"
    },
    {
      name: "One Punch Man",
      rating: "7.9/10"
    }
  ],
  heartbreaking: [
    {
      name: "Clannad after-story",
      rating: "11/10"
    },
    {
      name: "Grave of fireflies",
      rating: "9.7/10"
    },
    {
      name: "Your lie in April",
      rating: "9.5/10"
    }
  ]
};

export default function App() {
  var [selectedGenre, setGenre] = useState("beginner");
  function genreClickHandler(genre) {
    setGenre(genre);
  }
  function changeColor(rate) {
    if (rate === "11/10") {
      return "gold";
    } else if (rate === "10/10") {
      return "silver";
    } else if (rate >= "9") {
      return "#CD7F32";
    }
  }

  return (
    <div className="App">
      <h1> Anime Recommendation </h1>
      <p>List of animes that you must watch for each genre</p>

      <div>
        {Object.keys(animeDB).map((genre) => (
          <button
            onClick={() => genreClickHandler(genre)}
            style={{
              cursor: "pointer",
              background: "#E5E7EB",
              borderRadius: "0.5rem",
              padding: "0.5rem  1rem",
              border: "1px solid black",
              margin: "1rem 0.3rem"
            }}
          >
            {genre}
          </button>
        ))}
      </div>
      <hr />
      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {animeDB[selectedGenre].map((anime) => (
            <li
              key={anime.name}
              style={{
                listStyle: "none",
                padding: "1rem",
                border: "1px solid #D1D5DB",
                width: "70%",
                margin: "1rem 0rem",
                borderRadius: "0.5rem",
                backgroundColor: changeColor(anime.rating)
              }}
            >
              <div style={{ fontSize: "larger" }}> {anime.name} </div>
              <div style={{ fontSize: "smaller" }}> {anime.rating} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

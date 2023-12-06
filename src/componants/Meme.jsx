import { useState } from "react";
import memeData from "../memeData";

export const Meme = () => {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "",
  });

  const [allMemes, setAllMemes] = useState(memeData);

  // const [memeImage, setMemeImage] = useState("");

  function getMemeImage() {
    const memeArray = allMemes.data.memes;
    const randomNumber = Math.floor(Math.random() * memeArray.length);

    const url = memeArray[randomNumber].url;
    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: url,
    }));
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setMeme((prevMeme) => ({
      ...prevMeme,
      [name]: value,
    }));
  }

  return (
    <main>
      <div className="form">
        <input
          type="text"
          className="form--input"
          placeholder="Top text"
          value={meme.topText}
          onChange={handleChange}
          name="topText"
        />
        <input
          type="text"
          className="form--input"
          placeholder="Bottom text"
          value={meme.bottomText}
          onChange={handleChange}
          name="bottomText"
        />
        <button onClick={getMemeImage} className="form--button">
          Get a new meme image 🖼
        </button>
      </div>

      <div className="meme">
        <img src={meme.randomImage} className="meme--img" />
        <h2 className="meme--text top">{meme.topText}</h2>
        <h2 className="meme--text bottom">{meme.bottomText}</h2>
      </div>
    </main>
  );
};

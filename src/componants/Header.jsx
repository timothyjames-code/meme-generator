import image from "../images/trollface.png";

export const Header = () => {
  return (
    <header className="header">
      <div className="web-icon">
        <img src={image} alt="troll-face" className="trollface" />
        <h2 className="meme-generator">Meme Generator</h2>
      </div>
      <span className="project">React Course - Project 3</span>
    </header>
  );
};

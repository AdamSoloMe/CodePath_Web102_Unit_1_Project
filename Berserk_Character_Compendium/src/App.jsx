import { CHARACTERS } from "./CharacterData";
import CharacterCard from "./CharacterCard";
import "./App.css";

function App() {
  return (
    <div className="bw-app">
      {/* ── Header ── */}
      <header className="bw-header">
        <p className="bw-header__eyebrow">Character Compendium</p>

        <h1 className="bw-header__title">BERSERK</h1>

        <img src="/void.png" alt="" className="bw-header__scene" />

        {/* Brand of Sacrifice divider */}
        <div className="bw-header__divider">
          <div className="bw-header__divider-line bw-header__divider-line--left" />
          <img src="/brand-icon.ico" alt="Brand of Sacrifice" className="bw-header__brand" />
          <div className="bw-header__divider-line bw-header__divider-line--right" />
        </div>

        <p className="bw-header__quote">
          "In this world, is the destiny of mankind controlled by some
          transcendental entity or law?"
        </p>

        <p className="bw-header__count">
          {CHARACTERS.length} Recorded Characters
        </p>
      </header>

      {/* ── Character Grid ── */}
      <div className="bw-grid">
        {CHARACTERS.map((char) => (
          <CharacterCard key={char.id} char={char} />
        ))}
      </div>
    </div>
  );
}

export default App;

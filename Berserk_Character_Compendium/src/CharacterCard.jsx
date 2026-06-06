import { useState } from "react";
import { STATUS_STYLE } from "./CharacterData";
import "./CharacterCard.css";

function CharacterCard({ char }) {
  const [selected, setSelected] = useState(false);
  const st = STATUS_STYLE[char.status] || STATUS_STYLE.Unknown;

  const themeVars = {
    "--sym-color": char.symColor,
    "--grad-from": char.gradFrom,
    "--grad-to": char.gradTo,
    "--faction-color": char.factionColor,
    "--status-dot": st.dot,
    "--status-text": st.text,
  };

  return (
    <div
      className={`bw-card${selected ? " bw-card--selected" : ""}`}
      style={themeVars}
      onClick={() => setSelected((s) => !s)}
    >
      {/* ── Banner ── */}
      <div className="bw-card__banner">
        {/* Faction color accent bar */}
        <div className="bw-card__faction-bar" />

        {char.image ? (
          <img src={char.image} alt={char.name} className="bw-card__img" />
        ) : (
          <div className="bw-card__placeholder">
            <span className="bw-card__placeholder-sym">{char.sym}</span>
          </div>
        )}

        {/* Bottom fade into card body */}
        <div className="bw-card__banner-fade" />

        {/* Archetype badge — top left */}
        <div className="bw-card__archetype">{char.archetype}</div>

        {/* Status — top right */}
        <div className="bw-card__status">
          <span className="bw-card__status-dot" />
          {char.status}
        </div>
      </div>

      {/* ── Body ── */}
      <div className="bw-card__body">
        {/* Faction label */}
        <p className="bw-card__faction">{char.faction}</p>

        {/* Name */}
        <h2 className="bw-card__name">{char.name}</h2>

        {/* Title / epithet */}
        <p className="bw-card__title">"{char.title}"</p>

        {/* Divider */}
        <div className="bw-card__divider" />

        {/* Description */}
        <p className="bw-card__desc">{char.desc}</p>

        {/* Ability tags */}
        <div className="bw-card__abilities">
          {char.abilities.map((ab) => (
            <span key={ab} className="bw-card__ability">
              {ab}
            </span>
          ))}
        </div>

        {/* Footer */}
        <div className="bw-card__footer">
          <span className="bw-card__race">{char.race}</span>

          <a
            className="bw-card__btn"
            href={char.wiki}
            target="_blank"
            rel="noreferrer"
            onClick={(e) => e.stopPropagation()}
          >
            View Profile
          </a>
        </div>
      </div>
    </div>
  );
}

export default CharacterCard;

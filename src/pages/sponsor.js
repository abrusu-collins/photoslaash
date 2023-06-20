import React from "react";

function Sponsor() {
  return (
    <div className="sponsor">
      <div className="sponsor-left">
        <p className="sponsor-title">Wanna sponsor me?</p>
        <p className="sponsor-text">
          Loving Photoslaash? Join our journey and become a sponsor, supporting
          innovation and empowering users worldwide. Together, let&apos;s
          transform the way we share and store captivating visuals.
        </p>
        <div className="sponsor-buttons">
          <a href="https://www.buymeacoffee.com/collinsabrusu">buymeacoffee</a>
          <a href="https://www.patreon.com/abrusucollins">Patreon</a>
        </div>
      </div>
      <img src="/images/money.svg"></img>
    </div>
  );
}

export default Sponsor;

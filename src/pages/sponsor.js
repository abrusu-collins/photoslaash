import React from "react";

function Sponsor() {
  return (
    <div className="sponsor">
      <div className="sponsor-left">
        <p className="sponsor-title">Wanna sponsor me?</p>
        <p className="sponsor-text">
          Wow, this image compression app is a game-changer! I was able to
          compress a batch of 100 high-resolution images in just a few minutes,
          without any loss in quality. It saved me so much storage space and
          made sharing them a breeze.
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

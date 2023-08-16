/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Btn from "./Btn";
import Logo from "./Logo";

function HeroCard() {
  return (
    <div className="cardContanier">
      <div className="card-desc">
        <div className="logo">
          <Logo className={"w-8 h-8"} />
        </div>
        {/*card-desc*/}
        <h1 className="title">
          You're <br />
          <span className="font-extrabold">almost</span> there
        </h1>

        <p className="desc">
          {" "}
          To countinue , please agree to <br />
          our{" "}
          <a href="#" className="underline cursor-pointer">
            Terms of service
          </a>
        </p>
      </div>

      <hr className="line" />
      <Btn />
    </div>
  );
}

export default HeroCard;

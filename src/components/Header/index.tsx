import React, { memo } from "react";

import { ReactComponent as WounderLogo } from "../../assets/icons/wunder_mobility_white.svg";
import "./style.scss";

const Header = () => (
  <header>
    <div className="container__header">
      <div className="logo">
        <a href="https://www.wundermobility.com/">
          <div>
            <WounderLogo />
          </div>
        </a>
      </div>
    </div>
  </header>
);

export default memo(Header);

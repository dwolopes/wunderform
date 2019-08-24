import React, { memo } from "react";

import { ReactComponent as LogoFooter } from "../../assets/icons/logo-footer.svg";
import "./style.scss";

const Footer = () => (
  <footer>
    <div className="container__footer">
      <div className="logo">
        <a href="https://www.wundermobility.com/">
          <div>
            <LogoFooter />
          </div>
        </a>
      </div>
    </div>
  </footer>
);

export default memo(Footer);

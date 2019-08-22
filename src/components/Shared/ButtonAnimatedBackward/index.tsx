import React, { memo, useState, useEffect } from "react";
import { animated, useSpring } from "react-spring";

import { ReactComponent as Arrowhead } from '../../../assets/icons/right-arrow.svg';
import "./style.scss";

export interface ButtonProps {
  setPage: (value: number) => void;
  page: number;
  disabled?: boolean;
  content: string;
  setDisabledDecideStep: (value: boolean) => void;
}

const ButtonAnimatedBackward = ({
  disabled,
  content,
  page,
  setPage,
  setDisabledDecideStep
}: ButtonProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const { translate, backgroundColor } = useSpring({
    translate: isHovered ? 0 : 20,
    backgroundColor: isHovered
      ? "rgba(6, 106, 150, 1)"
      : "rgba(6, 160, 227, 1)",
    config: { duration: 160 }
  });

  return (
    <div className="backward__button">
      <animated.button
        style={{ backgroundColor }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => {
          setPage(page - 1);
          setDisabledDecideStep(true);
        }}
      >
        {content}
        <animated.span
          style={{
            transform: translate.interpolate(x => `translateX(${x}px)`)
          }}
        >
          <Arrowhead/>
        </animated.span>
      </animated.button>
    </div>
  );
};

export default memo(ButtonAnimatedBackward);

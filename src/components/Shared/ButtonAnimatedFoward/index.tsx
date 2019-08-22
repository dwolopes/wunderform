import React, { memo, useState } from "react";
import { animated, useSpring } from "react-spring";

import { ReactComponent as Arrowhead } from '../../../assets/icons/right-arrow.svg';
import "./style.scss";

export interface ButtonProps {
  disabled?: boolean;
  content: string;
}

const ButtonAnimatedFoward = ({ disabled, content }: ButtonProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const { translate, backgroundColor } = useSpring({
    translate: isHovered ? 20 : 0,
    backgroundColor: isHovered
      ? "rgba(6, 106, 150, 1)"
      : "rgba(6, 160, 227, 1)",
    config: { duration: 160 }
  });
  const toggleIsHovered = () => setIsHovered(prevState => !prevState);

  return (
    <div className="foward__button">
      <animated.button
        style={{ backgroundColor }}
        onMouseEnter={toggleIsHovered}
        onMouseLeave={toggleIsHovered}
        type="submit"
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

export default memo(ButtonAnimatedFoward);

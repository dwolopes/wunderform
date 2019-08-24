import React, { memo, useContext } from 'react';

import { FormInformationContext } from '../../containers/Register';
import handleFactory from './handleFactory';
import homeFleetImg from '../../assets/images/home-fleet.png';
import './style.scss';

const RegisterForm = () => {
  const { page, setPage, setDisabledDecideStep } = useContext(
    FormInformationContext
  );
  const Component = handleFactory(page);
  return (
    <>
      <div className="register__art">
        <div>
          <h2>FLEET</h2>
          <p>
            Technology powering the world's largest car and scooter sharing
            companies. Provides software and hardware solutions to help you
            launch your own free floating sharing business.
          </p>
        </div>
        <div className="resgister__fleet">
          <img src={homeFleetImg} alt="Streets showing using Wunder fleet" />
        </div>
      </div>
      <div className="register__container">
        <div className="content">
          <Component
            setPage={setPage}
            page={page}
            setDisabledDecideStep={setDisabledDecideStep}
          />
        </div>
      </div>
    </>
  );
};

export default memo(RegisterForm);

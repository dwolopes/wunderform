import React, { memo, useEffect, useState } from "react";
import { connect } from "react-redux";

import RegisterForm from "../components/RegisterForm";
import Header from "../components/Header";
import { Personal, Address, Payment } from "../@types";
import "./style.scss";

interface Props {
  page?: number;
  setPage?: (page: any) => void;
}

interface MapState {
  formInformation: {
    personal: Personal;
    address: Address;
    payment: Payment;
  };
}

interface Props {
  getpersonalInformation: (payload: Personal) => void;
  getAddressInformation: (payload: Address) => void;
  getPaymentInformation: (payload: Payment) => void;
}

interface State {
  page: number;
  setPage: (page: number) => void;
}

export const FormInformationContext = React.createContext<any>({});

const Register = (props: MapState & Props) => {
  const [page, setPage] = useState<number>(0);
  const [disabledDecideStep, setDisabledDecideStep] = useState<boolean>(false);

  useEffect(() => {
    if (!disabledDecideStep) {
      decideStep();
    }
  }, [page, disabledDecideStep]);

  const decideStep = () => {
    switch (true) {
      case Object.keys(props.formInformation.personal).length === 4 &&
        page === 0:
        return setPage(1);
      case Object.keys(props.formInformation.address).length === 5 &&
        page === 1:
        return setPage(2);
      default:
        break;
    }
  };

  return (
    <>
      <Header />
      <FormInformationContext.Provider
        value={
          {
            formInformation: props.formInformation,
            getpersonalInformation: props.getpersonalInformation,
            getAddressInformation: props.getAddressInformation,
            getPaymentInformation: props.getPaymentInformation,
            page,
            setPage,
            setDisabledDecideStep
          } as MapState & Props & State
        }
      >
        <RegisterForm />
      </FormInformationContext.Provider>
    </>
  );
};

const mapState = (state: MapState) => ({
  formInformation: state.formInformation
});

const mapDispatch = (dispatch: any) => ({
  getpersonalInformation: (payload: any) =>
    dispatch.formInformation.getpersonalInformation(payload),
  getAddressInformation: (payload: any) =>
    dispatch.formInformation.getAddressInformation(payload),
  getPaymentInformation: (payload: any) =>
    dispatch.formInformation.getPaymentInformation(payload)
});

export default connect(
  mapState,
  mapDispatch
)(memo(Register));

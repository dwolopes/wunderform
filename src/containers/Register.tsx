import React, { memo, useEffect, useState, useCallback } from "react";
import { connect } from "react-redux";

import RegisterForm from "../components/RegisterForm";
import Header from "../components/Header";
import { Personal, Address, Payment } from "../@types";
import Footer from "../components/Footer";
import Loading from "../components/Shared/Loading";

interface Props {
  page?: number;
  loading: any;
  setPage?: (page: any) => void;
}

interface MapState {
  formInformation: {
    personal: Personal;
    address: Address;
    payment: Payment;
  };
  loading: any;
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
  console.log(props.loading)
  const [page, setPage] = useState<number>(0);
  const [disabledDecideStep, setDisabledDecideStep] = useState<boolean>(false);

  const decideStep = useCallback(() => {
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
  }, [page, props]);

  useEffect(() => {
    if (!disabledDecideStep) {
      decideStep();
    }
  }, [page, disabledDecideStep, decideStep]);

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
            setDisabledDecideStep,
            loading: props.loading
          } as MapState & Props & State
        }
      >
        <RegisterForm />
      </FormInformationContext.Provider>
      <Footer/>
      {props.loading && <Loading />}
    </>
  );
};

const mapState = (state: MapState) => ({
  formInformation: state.formInformation,
   loading: state.loading.effects.formInformation.getPaymentInformation
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

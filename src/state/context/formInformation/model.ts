import * as repository from "./repository";
import { toast } from "react-toastify";
import { Personal, Address, Payment } from "../../../@types";

export const formInformation = {
  state: {
    personal: {},
    address: {
      street: "",
      number: 0,
      zipcode: "",
      city: ""
    },
    payment: {
      accountOwner: "",
      iban: "",
      paymentIdResponse: {
        error: false,
        paymentId: ""
      }
    }
  },
  reducers: {
    setPersonalData(state: any, payload: any) {
      return {
        ...state,
        personal: { ...state.personal, ...payload }
      };
    },
    setAddress(state: any, payload: any) {
      return {
        ...state,
        address: { ...state.address, ...payload }
      };
    },
    setPayment(state: any, payload: any) {
      return {
        ...state,
        payment: { ...state.payment, ...payload }
      };
    },
    registerPaymentIdResponse(state: any, paymentIdResponse: any) {
      return {
        ...state,
        payment: {
          ...state.payment,
          paymentIdResponse
        }
      };
    },
    clearStore() {
      return {};
    }
  },
  effects: (dispatch: any) => ({
    getpersonalInformation(payload: Personal) {
      return dispatch.formInformation.setPersonalData({
        ...payload
      });
    },

    getAddressInformation(payload: Address, getState: any) {
      const {
        formInformation: {
          personal: { customerId }
        }
      } = getState;
      return dispatch.formInformation.setAddress({
        customerId: customerId,
        ...payload
      });
    },

    async getPaymentInformation(payload: Payment, getState: any) {
      const {
        formInformation: {
          personal: { customerId, firstName, lastname, telephone },
          address
        }
      } = getState;

      dispatch.formInformation.setPayment({
        customerId: customerId,
        ...payload
      });

      try {
        const response = await repository.registerCustomer({
          customerId: customerId,
          owner: `${firstName} ${lastname}`,
          telephone,
          address,
          ...payload
        });

        throw response;
        // Retorna 400, como verificar ?
      } catch (error) {
        toast.error("Ops :( Algo deu errado tente novamente !");
      }
    },

    clearStores() {
      dispatch.formInformation.clearStore();
    }
  })
};

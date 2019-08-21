// import * as repository from './repository';
import { toast } from 'react-toastify';
import shortid from 'shortid';

interface PersonaInformation {
    firstname: string, 
    lastname: string, 
    telephone: string,
};

interface AddressInformation {
    address: string,
    number: number,
    zipcode: string,
    city: string,
}

interface PaymentInformation {
    accountOwner: string,
    iban: string
}

export const formInformation = {
    state: {
        personal: {},
        address: {},
        payment:{}
    },
    reducers: {
        personal(state: any, payload: any) {
            return {
                personal: { ...state.personal, ...payload },
            };
        },
        address(state: any, payload: any) {
            return {
                address: { ...state.address, ...payload },
            };
        },
        payment(state: any, payload: any) {
            return {
                payment: { ...state.payment, ...payload },
            };
        },
        clearStore() {
            return {};
        },
    },
    effects: (dispatch: any) => ({

        getpersonalInformation(payload: PersonaInformation){
            return dispatch.formInformation.personal({
                _id: shortid.generate(),
                ...payload
            });
        },

        getAddressInformation(payload: AddressInformation, getState: any){
            const {
                formInformation: { personal: { _id } },
            } = getState;
            return dispatch.formInformation.address({
                customerId: _id,
                ...payload
            });
        },

        getPaymentInformation(payload: PaymentInformation, getState: any){
            const {
                formInformation: { personal: { _id } },
            } = getState;
            return dispatch.formInformation.payment({
                customerId: _id,
                ...payload
            });
        },

        clearStores() {
            dispatch.calendar.clearStore();
        },
    }),
};
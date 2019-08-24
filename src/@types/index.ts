export interface Personal {
  customerId: string;
  firstName: string;
  lastname: string;
  telephone: string;
}

export interface Address {
  street: string;
  number: number;
  zipcode: string;
  city: string;
}

export interface Payment {
  accountOwner: string;
  iban: string;
  paymentIdResponse?: {
    error: boolean;
    paymentId: string;
  };
}

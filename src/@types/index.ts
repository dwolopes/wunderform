export interface Personal {
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
}
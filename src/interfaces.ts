export interface IFrontendEmployee {
	firstName: string;
	lastName: string;
	age: number;
	hireDate: string;
	employeeNumber: string;
	notes: string;
}

export interface IBackendEmployee extends IFrontendEmployee {
	id: number;
}

export interface IFormField {
	label: string;
	value: string;
	isRequired: boolean;
	isValid: boolean;
}

export interface IFormFields {
	firstName: IFormField;
	lastName: IFormField;
	age: IFormField;
}

export interface IFormInfo {
	status: "active" | "sending" | "error";
	fields: IFormFields;
}
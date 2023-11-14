import { useState } from "react";
import * as config from "../config";
import axios from "axios";
import { IFormInfo } from "../interfaces";

const initialFormInfo: IFormInfo = {
	status: "active",
	fields: {
		firstName: {
			label: "First Name",
			value: "",
			isRequired: true,
			isValid: true,
		},
		lastName: {
			label: "Last Name",
			value: "",
			isRequired: true,
			isValid: true,
		},
		age: {
			label: "Age",
			value: "",
			isRequired: true,
			isValid: true,
		},
	},
};

export const PageStateForm = () => {
	const [formInfo, setFormInfo] = useState(initialFormInfo);

	const handleFieldFirstName = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value;
		const _formInfo = structuredClone(formInfo);
		_formInfo.fields.firstName.value = value;
		setFormInfo(_formInfo);

		// setFormInfo({
		//   ...formInfo,
		//   fields: {
		//     ...formInfo.fields,
		//     firstName: {
		//       ...formInfo.fields.firstName,
		//       value: e.target.value,
		//     },
		//   },
		// });
	};

	const handleFieldLastName = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value;
		const _formInfo = structuredClone(formInfo);
		_formInfo.fields.lastName.value = value;
		setFormInfo(_formInfo);
	};

	const handleFieldAge = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value;
		const _formInfo = structuredClone(formInfo);
		_formInfo.fields.age.value = value;
		setFormInfo(_formInfo);
	};

	const handleSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		// const _formInfo = structuredClone(formInfo);
		// _formInfo.
		setFormInfo({ ...formInfo, status: 'sending' });

		const member = {
			firstName: formInfo.fields.firstName.value,
			lastName: formInfo.fields.lastName.value,
			age: Number(formInfo.fields.age.value),
		};

		const headers = {
			"Access-Control-Allow-Origin": "*",
			"Content-Type": "application/json",
		};

		(async () => {
			try {
				const response = await axios.post(
					"http://localhost:4801/members",
					member,
					{ headers }
				);
			} catch (e) {
				console.log(axios.AxiosError);
			}
		})();
	};

	return (
		<section className="flex gap-8">
			[{formInfo.status}]
			<form onSubmit={handleSubmitForm}>
				<fieldset className="border border-slate-500 p-4 rounded max-w-[15rem]">
					<legend>New Member</legend>

					<div className="flex gap-2 mb-4">
						<label htmlFor="firstName" className="w-32">
							{formInfo.fields.firstName.label}
						</label>
						<input
							type="text"
							disabled={formInfo.status === 'sending'}
							onChange={handleFieldFirstName}
							value={formInfo.fields.firstName.value}
							id="firstName"
						/>
					</div>

					<div className="flex gap-2 mb-4">
						<label htmlFor="lastName" className="w-32">
							{formInfo.fields.lastName.label}
						</label>
						<input
							type="text"
							disabled={formInfo.status === 'sending'}
							onChange={handleFieldLastName}
							value={formInfo.fields.lastName.value}
							id="lastName"
						/>
					</div>

					<div className="flex gap-2 mb-4">
						<label htmlFor="age" className="w-32">
							{formInfo.fields.age.label}
						</label>
						<input
							type="text"
							disabled={formInfo.status === 'sending'}
							className="w-12 text-right"
							onChange={handleFieldAge}
							value={formInfo.fields.age.value}
							id="age"
						/>
					</div>

					<div className="flex justify-end" >
						<button className={`${formInfo.status === 'sending' ? 'opacity-70 hover:bg-gray-500' : ''}`} disabled={formInfo.status === 'sending'}
						>Submit</button>
					</div>
				</fieldset>
			</form>
			{config.debugging() && (
				<section>
					<pre className="text-xs text-orange-900">
						{JSON.stringify(formInfo, null, 2)}
					</pre>
				</section>
			)}
		</section>
	);
};

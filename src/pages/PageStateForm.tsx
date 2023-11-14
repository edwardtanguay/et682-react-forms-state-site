import { useState } from "react";
import * as config from "../config";

const initialFormInfo = {
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

	return (
		<section className="flex gap-8">
			<form>
				<fieldset className="border border-slate-500 p-4 rounded max-w-[15rem]">
					<legend>New Member</legend>

					<div className="flex gap-2 mb-4">
						<label htmlFor="firstName" className="w-32">
							{formInfo.fields.firstName.label}
						</label>
						<input
							type="text"
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
							className="w-12 text-right"
							onChange={handleFieldAge}
							value={formInfo.fields.age.value}
							id="age"
						/>
					</div>

					<button>Submit</button>
				</fieldset>
			</form>
			{config.debugging && (
				<section>
					<pre className="text-xs text-orange-900">
						{JSON.stringify(formInfo, null, 2)}
					</pre>
				</section>
			)}
		</section>
	);
};

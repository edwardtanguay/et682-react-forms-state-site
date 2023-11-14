import { useState } from "react";

const initialFormInfo = {
	fields: {
		firstName: {
			label: "First Name",
			value: "nnn222",
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
	return (
		<form>
			<fieldset>
				<legend>New Member</legend>

				<div>
					[{formInfo.fields.firstName.value}]
					<label htmlFor="firstName"></label>
					<input
						type="text"
						onChange={(e) => handleFieldFirstName(e)}
						value={formInfo.fields.firstName.value}
						id="firstName"
					/>
				</div>
				<button>Submit</button>
			</fieldset>
		</form>
	);
};

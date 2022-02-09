import React from "react";
import InputWrapper from "../InputWrapper";

const Input = ({label, error, multiline, type, value, onChange, onFocus}) => {
	return (
		<InputWrapper label={label} error={error}>
			{multiline ? (
				<textarea
					className="w-full border border-gray p-2 px-4 rounded outline-none focus:border-gray-400"
					value={value}
					type={type}
					onChange={(e) => onChange(e)}
					onFocus={onFocus}
				/>
			) : (
				<input
					className="w-full border border-gray p-2 px-4 rounded outline-none focus:border-gray-400"
					value={value}
					type={type}
					onChange={(e) => onChange(e)}
					onFocus={onFocus}
				/>
			)}
		</InputWrapper>
	);
};

export default Input;

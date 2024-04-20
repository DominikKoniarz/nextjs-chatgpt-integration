"use client";

import { useState } from "react";
import FormPrompt from "./FormPrompt";
import SubmitButton from "./SubmitButton";

export default function Form() {
	const [prompValue, setPrompValue] = useState<string>("");

	return (
		<form className="mb-0 flex w-full flex-row items-end gap-2 sm:mb-10 sm:w-72">
			<FormPrompt
				promptValue={prompValue}
				setPromptValue={(value) => setPrompValue(value)}
			/>
			<SubmitButton disabled={!prompValue.length} />
		</form>
	);
}

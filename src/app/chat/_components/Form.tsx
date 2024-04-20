"use client";

import { useState } from "react";
import FormPrompt from "./FormPrompt";
import SubmitButton from "./SubmitButton";

export default function Form() {
	const [prompValue, setPrompValue] = useState<string>("");

	return (
		<form className="mx-auto mb-0 mt-4 flex w-full max-w-2xl shrink-0 flex-row items-end gap-2 self-end sm:mb-4">
			<FormPrompt
				promptValue={prompValue}
				setPromptValue={(value) => setPrompValue(value)}
			/>
			<SubmitButton disabled={!prompValue.length} />
		</form>
	);
}

import FormPrompt from "./FormPrompt";
import SubmitButton from "./SubmitButton";

type FormProps = {
	input: string;
	handleInputChange: (
		e:
			| React.ChangeEvent<HTMLInputElement>
			| React.ChangeEvent<HTMLTextAreaElement>,
	) => void;
	onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
};

export default function Form({
	input,
	handleInputChange,
	onSubmit,
}: FormProps) {
	return (
		<form
			className="mx-auto mb-0 mt-4 flex w-full max-w-2xl shrink-0 flex-row items-end gap-2 self-end sm:mb-4"
			onSubmit={onSubmit}
		>
			<FormPrompt
				input={input}
				handleInputChange={(e) => handleInputChange(e)}
			/>
			<SubmitButton disabled={!input.length} />
		</form>
	);
}

import { Textarea } from "@/components/ui/textarea";
import useFormPrompt from "../_hooks/useFormPrompt";
import { ChangeEvent } from "react";

export default function FormPrompt({
	input,
	handleInputChange,
}: {
	input: string;
	handleInputChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
}) {
	const { textareaRef } = useFormPrompt(input);

	return (
		<Textarea
			ref={textareaRef}
			value={input}
			onChange={(e) => handleInputChange(e)}
			className="h-min min-h-min w-full resize-none overflow-hidden border-none bg-white/20 text-base text-white shadow-sm transition-colors placeholder:text-white focus:bg-white/25 focus:ring-white focus:ring-offset-0 focus-visible:bg-white/25 focus-visible:ring-white focus-visible:ring-offset-0"
			placeholder="Type a message..."
			rows={1}
			style={{ height: "auto" }}
			onInput={(e) => {
				e.currentTarget.style.height = "auto";
				e.currentTarget.style.height =
					e.currentTarget.scrollHeight + "px";
			}}
		/>
	);
}

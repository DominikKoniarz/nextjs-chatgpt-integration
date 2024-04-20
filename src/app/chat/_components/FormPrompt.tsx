import { Textarea } from "@/components/ui/textarea";
import useFormPrompt from "../_hooks/useFormPrompt";

export default function FormPrompt({
	promptValue,
	setPromptValue,
}: {
	promptValue: string;
	setPromptValue: (value: string) => void;
}) {
	const { textareaRef } = useFormPrompt(promptValue);

	return (
		<Textarea
			ref={textareaRef}
			value={promptValue}
			onChange={(e) => setPromptValue(e.target.value)}
			className="h-min min-h-min w-full resize-none overflow-hidden border-none bg-white/20 text-white transition-colors placeholder:text-white focus:bg-white/25 focus:ring-white focus:ring-offset-0 focus-visible:bg-white/25 focus-visible:ring-white focus-visible:ring-offset-0"
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

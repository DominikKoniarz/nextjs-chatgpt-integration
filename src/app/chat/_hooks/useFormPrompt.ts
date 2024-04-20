import { useEffect, useRef } from "react";

export default function useFormPrompt(value: string) {
	const textareaRef = useRef<HTMLTextAreaElement>(null);

	useEffect(() => {
		const textarea = textareaRef.current;

		const resizeHandler = () => {
			if (textarea) {
				textarea.style.height = "auto";
				textarea.style.height = textarea.scrollHeight + "px";
			}
		};

		window.addEventListener("resize", resizeHandler);

		return () => {
			window.removeEventListener("resize", resizeHandler);
		};
	}, [value]);

	return { textareaRef };
}

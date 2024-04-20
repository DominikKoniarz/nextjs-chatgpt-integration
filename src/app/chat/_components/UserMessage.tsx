export default function UserMessage({ text }: { text: string }) {
	return (
		<li className="flex w-fit max-w-[80%] flex-col items-start self-end rounded-md bg-white/15 p-3 text-sm">
			{text}
		</li>
	);
}

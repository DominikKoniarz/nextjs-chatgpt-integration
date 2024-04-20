export default function AnswerMessage({ text }: { text: string }) {
	return (
		<li className="w-fit max-w-[80%] self-start rounded-md bg-white/15 p-3 text-sm">
			<span className="font-bold capitalize">Answer:</span> {text}
		</li>
	);
}

import { Button } from "@/components/ui/button";
import { FaPaperPlane } from "react-icons/fa6";

export default function SubmitButton({ disabled }: { disabled: boolean }) {
	return (
		<Button
			aria-disabled={disabled}
			disabled={disabled}
			type="submit"
			className="focus-visible:white bg-white/20 text-lg hover:bg-white/25 focus:bg-white/25 focus:ring-offset-0 focus-visible:border-none focus-visible:bg-white/25 focus-visible:ring-white focus-visible:ring-offset-0 active:bg-white/25"
		>
			<FaPaperPlane className="text-white" />
		</Button>
	);
}

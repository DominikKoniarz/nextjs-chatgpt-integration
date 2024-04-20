import { Button } from "@/components/ui/button";
import { FaRegPaperPlane } from "react-icons/fa6";

export default function SubmitButton({ disabled }: { disabled: boolean }) {
	return (
		<Button
			aria-disabled={disabled}
			disabled={disabled}
			type="submit"
			size="sm"
			className="bg-white/20 text-lg hover:bg-white/30 focus:bg-white/30 focus:ring-offset-0 focus-visible:border-none focus-visible:bg-white/30 focus-visible:ring-offset-0 active:bg-white/30"
		>
			<FaRegPaperPlane className="text-black" />
		</Button>
	);
}

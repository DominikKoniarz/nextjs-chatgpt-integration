import { Button } from "@/components/ui/button";

export default function Nav() {
	return (
		<nav className="flex h-10 w-full shrink-0 flex-row items-center justify-start">
			<Button variant="link" size="sm" className="text-white">
				back to home
			</Button>
		</nav>
	);
}

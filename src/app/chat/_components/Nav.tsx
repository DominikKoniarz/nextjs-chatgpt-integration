import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";

export default function Nav() {
	return (
		<nav className="flex h-10 w-full shrink-0 flex-row items-center justify-start">
			<Link
				href="/"
				className={buttonVariants({
					size: "sm",
					variant: "link",
					className: "text-white",
				})}
			>
				back to home
			</Link>
		</nav>
	);
}

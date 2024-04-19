import { cn } from "@/lib/utils";

export default function FlexWrapper({
	className,
	children,
}: {
	className?: string;
	children?: React.ReactNode;
}) {
	return (
		<div className={cn("flex flex-row gap-4", className)}>{children}</div>
	);
}

import Link from "next/link";

export default function HeaderLink({
	label,
	href,
}: {
	label: string;
	href: string;
}) {
	return (
		<Link href={href} className="p-1 text-base font-bold text-white">
			{label}
		</Link>
	);
}

import Link from "next/link";

export default function NotFound() {
	return (
		<main className="from-gradient-from via-gradient-via to-gradient-to flex h-full w-full flex-col items-center justify-center gap-3 bg-gradient-to-tr via-[52%] text-white">
			<h1 className="text-5xl font-bold sm:text-7xl">No i ch...</h1>
			<p className="text-xl">404 Not Found</p>
			<Link
				href="/"
				className="relative pb-px text-sm font-light after:absolute after:left-1/2 after:top-full after:block after:h-px after:w-0 after:-translate-x-1/2 after:bg-white after:transition-all after:duration-200 after:ease-in-out after:content-[''] hover:after:w-full"
			>
				Go to home page
			</Link>
		</main>
	);
}

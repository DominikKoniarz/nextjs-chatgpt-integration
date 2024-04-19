import FlexWrapper from "@/components/FlexWrapper";
import Link from "next/link";

export default function HeroSection() {
	return (
		<FlexWrapper className="mb-8 h-full w-full flex-col items-center justify-center">
			<h1 className="text-center text-4xl font-bold">
				Simple ChatGPT API integration using <br />
				Next.js and TailwindCSS.
			</h1>
			<Link
				href="https://github.com/DominikKoniarz"
				target="_blank"
				className="relative pb-0.5 text-2xl font-light after:absolute after:left-1/2 after:top-full after:block after:h-px after:w-0 after:-translate-x-1/2 after:bg-white after:transition-all after:duration-200 after:ease-in-out after:content-[''] hover:after:w-full"
			>
				by Dominik Koniarz
			</Link>
		</FlexWrapper>
	);
}

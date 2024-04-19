import Header from "./_components/Header";
import HeroSection from "./_components/HeroSection";

export default function Home() {
	return (
		<main className="from-gradient-from via-gradient-via to-gradient-to flex h-full w-full flex-col bg-gradient-to-tr via-[52%] text-white">
			<Header />
			<HeroSection />
		</main>
	);
}

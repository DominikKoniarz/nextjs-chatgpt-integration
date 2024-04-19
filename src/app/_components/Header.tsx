import HeaderLink from "./HeaderLink";

export default function Header() {
	return (
		<header className="flex w-full items-center justify-center gap-8 p-4 uppercase">
			<HeaderLink label="Home" href="/" />
			<HeaderLink label="Chat" href="/chat" />
		</header>
	);
}

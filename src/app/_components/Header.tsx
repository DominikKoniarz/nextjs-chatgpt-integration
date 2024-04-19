import HeaderLink from "./HeaderLink";

export default function Header() {
	return (
		<header className="flex h-16 w-full items-center justify-center gap-8 uppercase">
			<HeaderLink label="Home" href="/" />
			<HeaderLink label="Chat" href="/chat" />
		</header>
	);
}

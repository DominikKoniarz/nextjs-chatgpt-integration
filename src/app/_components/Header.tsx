import HeaderLink from "./HeaderLink";

export default function Header() {
	return (
		<header className="h-fit w-full">
			<nav className="mx-auto flex w-fit items-center justify-center gap-8 p-4 uppercase">
				<HeaderLink label="Home" href="/" />
				<HeaderLink label="Chat" href="/chat" />
			</nav>
		</header>
	);
}

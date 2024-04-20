import { Toaster } from "react-hot-toast";
import type { Metadata } from "next";
import { Lexend } from "next/font/google";
import "./globals.css";

const lexend = Lexend({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Next.js ChatGPT Integration",
	description: "ChatGPT Integration built with Next.js",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={lexend.className}>
				{children}
				<Toaster />
			</body>
		</html>
	);
}

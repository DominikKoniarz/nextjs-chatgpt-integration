import Form from "./_components/Form";
import Nav from "./_components/Nav";

export default function page() {
	return (
		<main className="flex h-full w-full flex-col items-center justify-end bg-gradient-to-tr from-gradient-from via-gradient-via via-[52%] to-gradient-to p-4 text-white">
			<Nav />
			<div className="h-full w-full"></div>
			<Form />
		</main>
	);
}

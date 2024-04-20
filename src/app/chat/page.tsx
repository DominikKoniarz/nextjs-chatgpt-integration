import FlexWrapper from "@/components/FlexWrapper";
import Form from "./_components/Form";
import Nav from "./_components/Nav";
import MessagesList from "./_components/MessagesList";

export default function page() {
	return (
		<main className="flex h-full w-full flex-col bg-gradient-to-tr from-gradient-from via-gradient-via via-[52%] to-gradient-to p-4 text-white">
			<Nav />
			{/* <FlexWrapper className="mx-auto mb-4 mt-10 h-full w-full max-w-2xl flex-col gap-0"> */}
			<MessagesList />
			<Form />
			{/* </FlexWrapper> */}
		</main>
	);
}

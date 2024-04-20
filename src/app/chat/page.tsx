"use client";

import Form from "./_components/Form";
import Nav from "./_components/Nav";
import MessagesList from "./_components/MessagesList";
import { useChat } from "ai/react";
import { useEffect } from "react";
import toast from "react-hot-toast";

export default function ChatPage() {
	const { messages, input, handleInputChange, handleSubmit, error } = useChat(
		{ streamMode: "stream-data" },
	);

	useEffect(() => {
		if (error) {
			toast.error(error.message, {
				position: "top-center",
			});
		}
	}, [error]);

	return (
		<main className="flex h-full w-full flex-col bg-gradient-to-tr from-gradient-from via-gradient-via via-[52%] to-gradient-to p-4 text-white">
			<Nav />
			<MessagesList messages={messages} />
			<Form
				input={input}
				handleInputChange={handleInputChange}
				onSubmit={(e) => handleSubmit(e)}
			/>
		</main>
	);
}

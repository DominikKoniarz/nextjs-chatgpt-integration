import { Message } from "ai/react";
import AnswerMessage from "./AnswerMessage";
import UserMessage from "./UserMessage";
import NoMessagesInfo from "./NoMessagesInfo";

type MessagesListProps = { messages: Message[] };

export default function MessagesList({ messages }: MessagesListProps) {
	return (
		<ul
			className="mx-auto mt-10 flex h-full w-full max-w-2xl flex-col justify-start gap-4 overflow-auto pr-4"
			id="messages-list"
		>
			{messages.length > 0 &&
				messages.map((m) =>
					m.role === "user" ? (
						<UserMessage text={m.content} key={m.id} />
					) : (
						<AnswerMessage text={m.content} key={m.id} />
					),
				)}
			{messages.length === 0 && <NoMessagesInfo />}
		</ul>
	);
}

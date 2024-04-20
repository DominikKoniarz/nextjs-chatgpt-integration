import AnswerMessage from "./AnswerMessage";
import UserMessage from "./UserMessage";

export default function MessagesList() {
	return (
		<ul
			className="mx-auto mt-10 flex h-full w-full max-w-2xl flex-col justify-start gap-4 overflow-auto pr-4"
			id="messages-list"
		>
			<UserMessage
				text={`Testowy text xdxdxdxd 123 1 321 31 321 3213123 123123 123123 3332 1312 3 123132 123 132 123123123 123 123 12312313 12
					3123`}
			/>
			<AnswerMessage
				text="It is a
				long established fact that a reader will be distracted by the
				readable content of a page when looking at its layout. The point
				of using Lorem Ipsum is that it has a more-or-less normal
				distribution of letters, as opposed to using Content here,
				content here, making it look like readable English. Many desktop
				publishing packages and web page editors now use Lorem Ipsum as
				their default model text, and a search for lorem ipsum will
				uncover many web sites still in their infancy. Various versions
				have evolved over the years, sometimes by accident, sometimes on
				purpose (injected humour and the like)."
			/>
			<UserMessage
				text={`Testowy text xdxdxdxd 123 1 321 31 321 3213123 123123 123123 3332 1312 3 123132 123 132 123123123 123 123 12312313 12
					3123`}
			/>
			<AnswerMessage
				text="It is a
				long established fact that a reader will be distracted by the
				readable content of a page when looking at its layout. The point
				of using Lorem Ipsum is that it has a more-or-less normal
				distribution of letters, as opposed to using Content here,
				content here, making it look like readable English. Many desktop
				publishing packages and web page editors now use Lorem Ipsum as
				their default model text, and a search for lorem ipsum will
				uncover many web sites still in their infancy. Various versions
				have evolved over the years, sometimes by accident, sometimes on
				purpose (injected humour and the like)."
			/>
			<UserMessage
				text={`Testowy text xdxdxdxd 123 1 321 31 321 3213123 123123 123123 3332 1312 3 123132 123 132 123123123 123 123 12312313 12
				3123`}
			/>
			<AnswerMessage
				text="It is a
			long established fact that a reader will be distracted by the
			readable content of a page when looking at its layout. The point
			of using Lorem Ipsum is that it has a more-or-less normal
			distribution of letters, as opposed to using Content here,
			content here, making it look like readable English. Many desktop
			publishing packages and web page editors now use Lorem Ipsum as
			their default model text, and a search for lorem ipsum will
			uncover many web sites still in their infancy. Various versions
			have evolved over the years, sometimes by accident, sometimes on
			purpose (injected humour and the like)."
			/>
		</ul>
	);
}

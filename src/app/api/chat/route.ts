import { env } from "@/env";
import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";
import { OpenAIStream, StreamingTextResponse } from "ai";

const openai = new OpenAI({
	apiKey: env.OPEN_AI_API_KEY,
});

export const POST = async (request: NextRequest) => {
	try {
		const { messages } = await request.json();

		const response = await openai.chat.completions.create({
			model: "gpt-3.5-turbo",
			messages,
			stream: true,
		});

		const stream = OpenAIStream(response);

		return new StreamingTextResponse(stream);
	} catch (error) {
		console.error(error);
		return new NextResponse(null, { status: 500 });
	}
};

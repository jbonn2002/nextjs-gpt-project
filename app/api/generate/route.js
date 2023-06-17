import { NextResponse } from "next/server";
import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export async function POST(req) {
  const { prompt } = await req.json();

  const res = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: prompt,
    temperature: 0,
    max_tokens: 3000,
    top_p: 1,
    frequency_penalty: 0.5,
    presence_penalty: 0,
  });

  const text = res.data.choices[0].text;

  console.log(res.data.choices[0].text);
  console.log(prompt);

  return new Response(JSON.stringify(text), {
    status: 200,
  });
}

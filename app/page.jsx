import Feed from "@/components/Feed";
import Image from "next/image";

export default function Home() {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Test Out
        <br className="max-md:hidden" />
        <span className="blue_gradient">AI-Powered Text Generation</span>
      </h1>
      <p className="desc text-center">
        Promptopia is an open-source AI prompting tool for the modern world to
        discover, create and share creative prompts
      </p>
      <Feed />
    </section>
  );
}

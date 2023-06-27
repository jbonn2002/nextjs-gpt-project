"use client";

import { useState, useEffect } from "react";
import { Toaster, toast } from "react-hot-toast";

const Feed = () => {
  const [loading, setLoading] = useState(false);
  const [bio, setBio] = useState("");
  const [generatedBios, setGeneratedBios] = useState("");

  const generateBio = async (e) => {
    e.preventDefault();
    setGeneratedBios("");
    const res = await fetch("/api/generate", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({
        prompt: bio,
      }),
    });

    if (!res.ok) {
      throw new Error("failed to fetch data");
    }

    return setGeneratedBios(res.json());
  };
  // useEffect(() => {
  //   const fetchPosts = async () => {
  //     const response = await fetch("/api/prompt");
  //     const data = await response.json();

  //     setPosts(data);
  //   };

  //   fetchPosts();
  // }, []);

  return (
    <section className="feed">
      <form className="relative w-full flex-center">
        <textarea
          value={bio}
          placeholder="Generate text"
          rows={3}
          onChange={(e) => setBio(e.target.value)}
          required
          className="search_input peer"
        />
      </form>
      <button
        className="black_btn mt-10"
        onClick={(e) => {
          generateBio(e);
        }}
      >
        Generate Text
      </button>
      <div className="space-y-8 flex flex-col items-center justify-center max-w-xl mx-auto">
        <Toaster
          position="top-center"
          reverseOrder={false}
          toastOptions={{ duration: 2000 }}
        />
        {generatedBios ? (
          <div
            className="bg-white rounded-xl shadow-md p-4 hover:bg-gray-100 transition cursor-copy border"
            onClick={() => {
              console.log(generatedBios);
              navigator.clipboard.writeText(
                JSON.stringify(generatedBios.value)
              );
              toast("Bio copied to clipboard", {
                icon: "✂️",
              });
            }}
          >
            <p>{generatedBios}</p>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </section>
  );
};

export default Feed;

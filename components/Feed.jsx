"use client";

import { useState, useEffect } from "react";

const Feed = () => {
  const [bio, setBio] = useState("");

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch("/api/prompt");
      const data = await response.json();

      setPosts(data);
    };

    fetchPosts();
  }, []);

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
      <button className="black_btn mt-10" onClick={() => {}}>
        Generate Text
      </button>
    </section>
  );
};

export default Feed;

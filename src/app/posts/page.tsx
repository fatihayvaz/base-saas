"use client";

import { useState, useEffect } from "react";

interface Post {
  id: number;
  title: string;
  content: string | null;
}

export default function Posts() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    const response = await fetch("/api/posts");
    const data = await response.json();
    setPosts(data);
  };

  const createPost = async (e: React.FormEvent) => {
    e.preventDefault();
    const response = await fetch("/api/posts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, content }),
    });
    if (response.ok) {
      setTitle("");
      setContent("");
      fetchPosts();
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Posts</h1>
      <form onSubmit={createPost} className="mb-4">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
          className="border p-2 mr-2"
        />
        <input
          type="text"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Content"
          className="border p-2 mr-2"
        />
        <button type="submit" className="bg-blue-500 text-white p-2">
          Create Post
        </button>
      </form>
      <ul>
        {posts.length > 0 &&
          posts.map((post) => (
            <li key={post.id} className="mb-2">
              <h2 className="font-bold">{post.title}</h2>
              <p>{post.content}</p>
            </li>
          ))}
      </ul>
    </div>
  );
}

"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Fetch mock blog posts
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);

  if (posts.length === 0) {
    return <div className="text-center mt-4">Loading...</div>;
  }

  return (
    <div className="container mx-auto p-4 bg-gray-100">
      <h1 className="text-3xl font-bold mb-6 text-center">Blog Viewer</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <div 
            key={post.id}
            className="bg-white rounded-lg shadow-md p-4"
          >
            <h2 className="font-bold text-lg truncate">Title: {post.title}</h2>
            <p className="text-gray-600 mt-2 text-sm truncate">
              Description: {post.body}
            </p>
            <Link 
              href={`/blog/${post.id}`} 
              className="inline-block mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg text-sm hover:bg-blue-700"
            >
              Read More
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

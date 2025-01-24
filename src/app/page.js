"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Fetch mock blog posts
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((res) => res.json())
      .then((data) => setPosts(data.slice(0, 10)));
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 flex justify-center items-center">Blog Viewer</h1>
      <ul className="space-y-4">
        {posts.map((post) => (
          <li 
          className="flex justify-center items-center bg-yellow-300 w-6/12 mx-auto py-4 rounded-lg"
          key={post.id}>
            <Link href={`/blog/${post.id}`}>
              <span className="text-blue-600 hover:underline">{post.title}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

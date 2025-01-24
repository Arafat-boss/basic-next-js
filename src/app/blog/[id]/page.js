"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function BlogDetails() {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    if (id) {
      fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then((res) => res.json())
        .then((data) => setPost(data));
    }
  }, [id]);

  if (!post) {
    return <div className="p-6">Loading...</div>;
  }

  return (
    <div className="p-6 w-6/12 border shadow-xl m-2 mx-auto rounded-lg">
      <h1 className="text-4xl font-bold text-blue-400">{post.title}</h1>
      <p className="mt-4">{post.body}</p>
     <Link href='/'> <button className="btn btn-accent my-3 w-full">Go Back</button></Link>
    </div>
  );
}

import React from 'react';
import { Link } from 'react-router-dom';
import { posts } from '../data/blogPosts';

export default function Blog() {
  return (
    <div className="pt-20">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl lg:text-5xl font-bold mb-8">Blog</h1>
        <ul>
          {posts.map((post) => (
            <li key={post.date} className="text-lg lg:text-xl mb-3">
              <Link to={`/blog/${post.date}`} className="text-blue-500 underline">
                {post.title}
              </Link>
              <span className="text-black"> - {post.date}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

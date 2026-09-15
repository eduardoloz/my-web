import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { findPost, toEmbed } from '../data/blogPosts';

export default function BlogPost() {
  const { id } = useParams<{ id: string }>();
  const post = findPost(id);

  if (!post) {
    return (
      <div className="pt-24 container mx-auto px-4">
        <p className="text-lg">Post not found.</p>
        <Link to="/blog" className="text-blue-500 underline">
          Back to Blog
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-20">
      <div className="container mx-auto px-4 py-8">
        <Link to="/blog" className="text-blue-500 underline mb-4 block">
          [Back to Blog]
        </Link>
        <h1 className="text-3xl lg:text-5xl font-bold mb-2">{post.title}</h1>
        <p className="text-md lg:text-lg text-gray-500 mb-6">{post.date}</p>
        <p className="text-lg lg:text-xl mb-6">{post.body}</p>
        {post.video && (
          <iframe
            width="560"
            height="315"
            src={toEmbed(post.video)}
            title={post.title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="max-w-full"
          />
        )}
      </div>
    </div>
  );
}

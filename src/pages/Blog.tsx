import React from 'react';
import { Link } from 'react-router-dom';
import postsData from '../data/blog/posts.json';

export default function Blog() {
    return (
        <div>
            <div style={{ padding: '5rem 1rem 1rem 1rem' }}></div>
            <h1 style={{ fontSize: '2rem', marginBottom: '2rem' }}>Blog</h1>
            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                {postsData.map((post) => (
                    <Link 
                        key={post.id} 
                        to={`/blog/${post.id}`} 
                        style={{ textDecoration: 'none', color: 'inherit' }}
                    >
                        <div style={{
                            border: '1px solid #e0e0e0',
                            borderRadius: '8px',
                            padding: '1.5rem',
                            marginBottom: '1rem',
                            cursor: 'pointer',
                            transition: 'box-shadow 0.2s ease',
                            backgroundColor: 'white'
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.boxShadow = '0 4px 8px rgba(0,0,0,0.1)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.boxShadow = 'none';
                        }}
                        >
                            <h2 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>
                                {post.title}
                            </h2>
                            <p style={{ color: '#666', fontSize: '0.9rem', marginBottom: '0.5rem' }}>
                                {post.date}
                            </p>
                            <p style={{ fontSize: '1rem', lineHeight: '1.5' }}>
                                {post.description}
                            </p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
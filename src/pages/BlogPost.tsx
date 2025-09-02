import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import postsData from '../data/blog/posts.json';

export default function BlogPost() {
    const { id } = useParams<{ id: string }>();
    const [content, setContent] = useState<string>('');
    const [loading, setLoading] = useState(true);
    
    const post = postsData.find(p => p.id === id);

    useEffect(() => {
        if (post) {
            import(`../data/blog/${post.fileName}?raw`)
                .then(module => {
                    setContent(module.default);
                    setLoading(false);
                })
                .catch(error => {
                    console.error('Error loading blog post:', error);
                    setLoading(false);
                });
        } else {
            setLoading(false);
        }
    }, [post]);

    if (loading) {
        return (
            <div style={{ padding: '5rem 1rem 1rem 1rem' }}>
                <div>Loading...</div>
            </div>
        );
    }

    if (!post) {
        return (
            <div style={{ padding: '5rem 1rem 1rem 1rem' }}>
                <h1>Blog post not found</h1>
                <Link to="/blog">← Back to Blog</Link>
            </div>
        );
    }

    const renderMarkdown = (text: string) => {
        return text
            .split('\n')
            .map((line, index) => {
                if (line.startsWith('# ')) {
                    return <h1 key={index} style={{ fontSize: '2rem', marginTop: '2rem', marginBottom: '1rem' }}>{line.substring(2)}</h1>;
                }
                if (line.startsWith('## ')) {
                    return <h2 key={index} style={{ fontSize: '1.5rem', marginTop: '1.5rem', marginBottom: '0.75rem' }}>{line.substring(3)}</h2>;
                }
                if (line.startsWith('### ')) {
                    return <h3 key={index} style={{ fontSize: '1.25rem', marginTop: '1.25rem', marginBottom: '0.5rem' }}>{line.substring(4)}</h3>;
                }
                if (line.trim() === '') {
                    return <br key={index} />;
                }
                if (/^\d+\./.test(line.trim())) {
                    return <p key={index} style={{ marginBottom: '0.5rem', fontWeight: 'bold' }}>{line}</p>;
                }
                
                const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
                const parts = [];
                let lastIndex = 0;
                let match;
                
                while ((match = linkRegex.exec(line)) !== null) {
                    if (match.index > lastIndex) {
                        parts.push(line.substring(lastIndex, match.index));
                    }
                    parts.push(
                        <a key={match.index} href={match[2]} target="_blank" rel="noopener noreferrer" style={{ color: '#0066cc' }}>
                            {match[1]}
                        </a>
                    );
                    lastIndex = match.index + match[0].length;
                }
                
                if (lastIndex < line.length) {
                    parts.push(line.substring(lastIndex));
                }
                
                return <p key={index} style={{ marginBottom: '1rem', lineHeight: '1.6' }}>{parts}</p>;
            });
    };

    return (
        <div style={{ padding: '5rem 1rem 1rem 1rem' }}>
            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                <Link to="/blog" style={{ color: '#0066cc', textDecoration: 'none', marginBottom: '2rem', display: 'inline-block' }}>
                    ← Back to Blog
                </Link>
                <article>
                    <header style={{ marginBottom: '2rem' }}>
                        <h1 style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>{post.title}</h1>
                        <p style={{ color: '#666', fontSize: '1rem' }}>{post.date}</p>
                    </header>
                    <div style={{ fontSize: '1.1rem', lineHeight: '1.7' }}>
                        {renderMarkdown(content)}
                    </div>
                </article>
            </div>
        </div>
    );
}
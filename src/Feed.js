import React, { useState } from 'react';
import './Feed.css';

function Feed() {
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [sortBy, setSortBy] = useState('latest');

    const blogs = [
        {
            id: 1,
            userId: "anonymous_123",
            userAvatar: "👤",
            title: "The Future of Technology",
            content: "As we move into 2024, artificial intelligence and machine learning continue to reshape our daily lives. From smart homes to autonomous vehicles, the impact is undeniable...",
            category: "Technology",
            timestamp: "2 hours ago",
            likes: 15,
            comments: 5
        },
        {
            id: 2,
            userId: "travel_explorer",
            userAvatar: "✈️",
            title: "Hidden Gems of Southeast Asia",
            content: "Discovering the untouched beaches of Thailand and the ancient temples of Cambodia was an incredible experience. Here are my top 5 recommendations...",
            category: "Travel",
            timestamp: "5 hours ago",
            likes: 23,
            comments: 8
        },
        {
            id: 3,
            userId: "health_guru",
            userAvatar: "🧘‍♀️",
            title: "Mindfulness in Modern Life",
            content: "In today's fast-paced world, finding moments of peace can be challenging. Here's how I incorporate mindfulness into my daily routine...",
            category: "Lifestyle",
            timestamp: "1 day ago",
            likes: 45,
            comments: 12
        }
    ];

    return (
        <div className="feed-wrapper">
            {/* Feed Header Section */}
            <div className="feed-header">
                <div className="feed-title">
                    <h1>Community Feed</h1>
                    <p>Discover stories, thoughts, and ideas</p>
                </div>
                
                {/* Filter Controls */}
                <div className="feed-controls">
                    <div className="control-group">
                        <label>Category</label>
                        <select 
                            value={selectedCategory}
                            onChange={(e) => setSelectedCategory(e.target.value)}
                            className="select-control"
                        >
                            <option value="all">All Categories</option>
                            <option value="technology">Technology</option>
                            <option value="travel">Travel</option>
                            <option value="lifestyle">Lifestyle</option>
                            <option value="food">Food</option>
                        </select>
                    </div>

                    <div className="control-group">
                        <label>Sort By</label>
                        <select 
                            value={sortBy}
                            onChange={(e) => setSortBy(e.target.value)}
                            className="select-control"
                        >
                            <option value="latest">Latest First</option>
                            <option value="popular">Most Popular</option>
                            <option value="commented">Most Commented</option>
                        </select>
                    </div>
                </div>
            </div>

            {/* Blogs Container */}
            <div className="blogs-container">
                {blogs.map(blog => (
                    <article key={blog.id} className="blog-card">
                        {/* User Info Section */}
                        <div className="blog-user-info">
                            <div className="user-details">
                                <span className="user-avatar">{blog.userAvatar}</span>
                                <span className="user-name">{blog.userId}</span>
                            </div>
                            <div className="post-meta">
                                <span className="post-time">{blog.timestamp}</span>
                                <span className="post-category">{blog.category}</span>
                            </div>
                        </div>

                        {/* Blog Content */}
                        <div className="blog-content">
                            <h2>{blog.title}</h2>
                            <p>{blog.content}</p>
                        </div>

                        {/* Interaction Buttons */}
                        <div className="blog-interactions">
                            <button className="interaction-btn">
                                <span>❤️</span>
                                <span>{blog.likes}</span>
                            </button>
                            <button className="interaction-btn">
                                <span>💬</span>
                                <span>{blog.comments}</span>
                            </button>
                            <button className="interaction-btn">
                                <span>🔗</span>
                                <span>Share</span>
                            </button>
                        </div>
                    </article>
                ))}
            </div>
        </div>
    );
}

export default Feed; 
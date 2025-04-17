import './App.css';
import Navbar from './Navbar';
import React, { useState } from 'react';
import Feed from './Feed';
import Profile from './Profile';

function App() {
  const [blogContent, setBlogContent] = useState('');
  const [blogTitle, setBlogTitle] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [activeTab, setActiveTab] = useState('home');

  const categories = [
    'Technology', 'Lifestyle', 'Travel', 'Food', 
    'Health', 'Personal', 'Career', 'Other'
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Blog submitted:', { title: blogTitle, content: blogContent, category: selectedCategory });
    setBlogContent('');
    setBlogTitle('');
    setSelectedCategory('');
  };

  return (
    <div className="App min-h-screen bg-gradient-to-b from-gray-50 to-blue-100">
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
      <main className="container mx-auto px-4 py-12">
        {activeTab === 'feed' ? (
          <Feed />
        ) : activeTab === 'profile' ? (
          <Profile />
        ) : (
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl font-bold text-gray-800 mb-6">
              Share Your Thoughts Anonymously
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Express yourself freely and connect with others in a safe, anonymous environment
            </p>
            
            {/* Blog Input Section */}
            <div className="max-w-4xl mx-auto">
              <div className="blog-card">
                <div className="blog-header">
                  <h2 className="text-2xl font-bold text-gray-800 mb-2">Create Your Blog</h2>
                  <p className="text-gray-600">Share your thoughts with the world</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Title Input */}
                  <div className="input-group">
                    <label className="input-label">Blog Title</label>
                    <input
                      type="text"
                      className="title-input"
                      placeholder="Enter an engaging title..."
                      value={blogTitle}
                      onChange={(e) => setBlogTitle(e.target.value)}
                    />
                  </div>

                  {/* Category Selection */}
                  <div className="input-group">
                    <label className="input-label">Category</label>
                    <div className="category-tags">
                      {categories.map((category) => (
                        <button
                          key={category}
                          type="button"
                          className={`category-tag ${selectedCategory === category ? 'selected' : ''}`}
                          onClick={() => setSelectedCategory(category)}
                        >
                          {category}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Blog Content */}
                  <div className="input-group">
                    <label className="input-label">Blog Content</label>
                    <div className="content-editor">
                      <textarea
                        className="content-input"
                        placeholder="Start writing your blog here..."
                        value={blogContent}
                        onChange={(e) => setBlogContent(e.target.value)}
                        rows="8"
                      ></textarea>
                      <div className="editor-tools">
                        <span className="text-sm text-gray-500">
                          {blogContent.length} characters
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="button-group">
                    <button
                      type="button"
                      onClick={() => {
                        setBlogContent('');
                        setBlogTitle('');
                        setSelectedCategory('');
                      }}
                      className="clear-button"
                    >
                      Clear All
                    </button>
                    <button
                      type="submit"
                      className="submit-button"
                      disabled={!blogTitle || !blogContent || !selectedCategory}
                    >
                      Publish Blog
                    </button>
                  </div>
                </form>
              </div>
            </div>

            {/* Feature Cards */}
            <div className="grid md:grid-cols-3 gap-8 mt-16">
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <div className="text-blue-600 text-2xl mb-4">🔒</div>
                <h3 className="text-xl font-semibold mb-2">Anonymous Writing</h3>
                <p className="text-gray-600">Share your thoughts without revealing your identity</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <div className="text-blue-600 text-2xl mb-4">💭</div>
                <h3 className="text-xl font-semibold mb-2">Engage & Connect</h3>
                <p className="text-gray-600">Join discussions and connect with like-minded people</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <div className="text-blue-600 text-2xl mb-4">🌟</div>
                <h3 className="text-xl font-semibold mb-2">Safe Space</h3>
                <p className="text-gray-600">Express yourself in a secure and moderated environment</p>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;

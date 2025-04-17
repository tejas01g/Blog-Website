import React, { useState } from 'react';
import './Profile.css';

function Profile() {
    // Dummy user data - in a real app, this would come from your authentication system
    const [user] = useState({
        username: "anonymous_user",
        bio: "Passionate writer | Tech enthusiast | Coffee lover ☕",
        avatar: "👤",
        joinDate: "January 2024",
        postsCount: 15,
        followersCount: 124,
        followingCount: 98
    });

    const [isEditing, setIsEditing] = useState(false);
    const [editedBio, setEditedBio] = useState(user.bio);

    const handleSignOut = () => {
        // Add your sign-out logic here
        console.log("Signing out...");
    };

    const handleSaveBio = () => {
        // Add your bio update logic here
        console.log("Saving bio:", editedBio);
        setIsEditing(false);
    };

    return (
        <div className="profile-container">
            {/* Profile Header */}
            <div className="profile-header">
                <div className="profile-avatar-section">
                    <div className="profile-avatar">
                        <span className="avatar-text">{user.avatar}</span>
                        <button className="edit-avatar-btn" title="Change avatar">
                            📷
                        </button>
                    </div>
                </div>

                <div className="profile-info">
                    <h1 className="profile-username">{user.username}</h1>
                    <div className="profile-stats">
                        <div className="stat-item">
                            <span className="stat-value">{user.postsCount}</span>
                            <span className="stat-label">Posts</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-value">{user.followersCount}</span>
                            <span className="stat-label">Followers</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-value">{user.followingCount}</span>
                            <span className="stat-label">Following</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Profile Bio Section */}
            <div className="profile-bio-section">
                {isEditing ? (
                    <div className="bio-edit">
                        <textarea
                            value={editedBio}
                            onChange={(e) => setEditedBio(e.target.value)}
                            placeholder="Write something about yourself..."
                            maxLength={160}
                            className="bio-textarea"
                        />
                        <div className="bio-actions">
                            <button 
                                onClick={() => setIsEditing(false)} 
                                className="cancel-btn"
                            >
                                Cancel
                            </button>
                            <button 
                                onClick={handleSaveBio} 
                                className="save-btn"
                            >
                                Save
                            </button>
                        </div>
                    </div>
                ) : (
                    <div className="bio-display">
                        <p className="bio-text">{user.bio}</p>
                        <button 
                            onClick={() => setIsEditing(true)}
                            className="edit-btn"
                        >
                            Edit Bio
                        </button>
                    </div>
                )}
            </div>

            {/* Settings and Actions */}
            <div className="profile-actions">
                <button className="settings-btn">
                    <span className="icon">⚙️</span>
                    Settings
                </button>
                <button className="signout-btn" onClick={handleSignOut}>
                    <span className="icon">🚪</span>
                    Sign Out
                </button>
            </div>
        </div>
    );
}

export default Profile; 
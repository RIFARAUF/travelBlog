import React from 'react'
export default function blog_section() {
    return (
        <div className="blog_section">
            <h2>Latest Blog Posts</h2>
            <div className="blog_posts">
                <div className="blog_post">
                    <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="Blog Post 1" />
                    <h3>Exploring the Mountains</h3>
                    <p>Discover the beauty of mountain landscapes and the thrill of hiking through rugged terrains.</p>
                    <button className="read_more_btn">Read More</button>
                </div>
                <div className="blog_post">
                    <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="Blog Post 2" />
                    <h3>Beach Getaways</h3>
                    <p>Experience the serenity of pristine beaches and the joy of water activities.</p>
                    <button className="read_more_btn">Read More</button>
                </div>
                <div className="blog_post">
                    <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="Blog Post 3" />
                    <h3>Cultural Experiences</h3>
                    <p>Immerse yourself in diverse cultures and traditions from around the world.</p>
                    <button className="read_more_btn">Read More</button>
                </div>
            </div>
        </div>
    )
}
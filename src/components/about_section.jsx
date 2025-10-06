import React from 'react'
export default function About_section() {
    return (
        <div className="about_section">
            <div className="about_img">
                <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="About Us" /> 
            </div>
            <div className="about_content">
                <h2>Fathima</h2>
                <p>Welcome to our travel blog! We are passionate travelers who love exploring new destinations and sharing our experiences with you. Our mission is to inspire and guide fellow travel enthusiasts to make the most of their journeys.</p>
                <p>From hidden gems to popular tourist spots, we cover a wide range of travel topics including destination guides, travel tips, cultural insights, and personal stories. Join us as we embark on exciting adventures around the world!</p>
                <button className="read_more_btn">Read More</button>
            </div>
        </div>
    )
}
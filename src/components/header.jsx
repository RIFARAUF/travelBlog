import React from 'react'
export default function header() {
    return (
        <div className="header">
            <h1>Travel Blog</h1>
            <nav>
                <a href="#home">Home</a>
                <a href="#about">About</a>
                <a href="#blog">Blog</a>
                <a href="#contact">Contact</a>
            </nav>
        </div>
    )
}
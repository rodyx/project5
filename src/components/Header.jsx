import React from 'react';

export const Header = () => {
    return (
        <header className="header">
            <h1>Hello, John! What's new?</h1>
            <div className="headerSearch">
                <div>
                    <a href="/"><i class="fas fa-envelope"></i></a>
                    <a href="/"><i class="fas fa-bell"></i></a>
                </div>
                <form>
                    <span><i class="fas fa-search"></i></span>
                    <input placeholder="Search..."></input>
                </form>
            </div>
        </header>
    )
}
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="border-b border-[var(--border-subtle)]">
      <div className="container mx-auto px-6 py-4 flex justify-end items-center">
        <a 
          href="/movie.html" 
          className="bg-transparent hover:bg-[var(--bg-element)] text-[var(--text-secondary)] hover:text-[var(--text-default)] font-semibold py-2 px-4 border border-[var(--border-subtle)] rounded-lg shadow-sm transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[var(--bg-default)] focus:ring-[var(--color-primary)]"
          aria-label="Navigate to the movie section"
        >
          Movie
        </a>
      </div>
    </header>
  );
};

export default Header;

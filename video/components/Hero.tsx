import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="text-center py-12 md:py-16 px-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-[var(--text-default)] leading-tight tracking-tight">
          Interactive Video Portfolio
        </h1>
        <p className="mt-4 text-lg md:text-xl text-[var(--text-secondary)] max-w-2xl mx-auto">
          Welcome! This is a modern, interactive web application to browse a portfolio of video content.
          Click any item to watch the featured video from platforms like YouTube and Vimeo.
        </p>
      </div>
    </section>
  );
};

export default Hero;

import React from 'react';

interface LinkedinIconProps {
  className?: string;
}

const LinkedinIcon: React.FC<LinkedinIconProps> = ({ className }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 24 24" 
      fill="currentColor" 
      className={className || "w-6 h-6"}
    >
      <path d="M19.75 3H4.25A1.25 1.25 0 0 0 3 4.25v15.5A1.25 1.25 0 0 0 4.25 21h15.5A1.25 1.25 0 0 0 21 19.75V4.25A1.25 1.25 0 0 0 19.75 3zM8.5 18.5h-3v-9h3v9zM7 8.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm11.5 10h-3v-4.35c0-1.05-.02-2.4-1.46-2.4-1.46 0-1.69 1.14-1.69 2.32V18.5h-3v-9h2.88v1.31h.04c.4-.76 1.38-1.56 2.84-1.56 3.04 0 3.6 2 3.6 4.6v5.3z"/>
    </svg>
  );
};

export default LinkedinIcon;

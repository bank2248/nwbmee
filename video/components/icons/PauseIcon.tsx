import React from 'react';

interface PauseIconProps {
  className?: string;
}

const PauseIcon: React.FC<PauseIconProps> = ({ className }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 24 24" 
      fill="currentColor" 
      className={className || "w-6 h-6"}
    >
      <path fillRule="evenodd" d="M6.75 5.25a.75.75 0 0 0-.75.75V18a.75.75 0 0 0 .75.75h1.5a.75.75 0 0 0 .75-.75V6a.75.75 0 0 0-.75-.75h-1.5Zm9 0a.75.75 0 0 0-.75.75V18a.75.75 0 0 0 .75.75h1.5a.75.75 0 0 0 .75-.75V6a.75.75 0 0 0-.75-.75h-1.5Z" clipRule="evenodd" />
    </svg>
  );
};

export default PauseIcon;
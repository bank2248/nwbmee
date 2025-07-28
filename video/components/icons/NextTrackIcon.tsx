import React from 'react';

interface NextTrackIconProps {
  className?: string;
}

const NextTrackIcon: React.FC<NextTrackIconProps> = ({ className }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 24 24" 
      fill="currentColor" 
      className={className || "w-6 h-6"}
    >
      <path d="M5.588 5.062a1.25 1.25 0 0 0-1.025 2.197l5.005 4.29-5.005 4.29a1.25 1.25 0 0 0 1.025 2.197l7.09-6.078a1.25 1.25 0 0 0 0-2.196L5.587 5.06Zm10.912 0a1.25 1.25 0 0 0-1.25 1.25v11.375a1.25 1.25 0 0 0 2.5 0V6.312a1.25 1.25 0 0 0-1.25-1.25Z" />
    </svg>
  );
};

export default NextTrackIcon;
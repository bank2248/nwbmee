import React from 'react';

interface PreviousTrackIconProps {
  className?: string;
}

const PreviousTrackIcon: React.FC<PreviousTrackIconProps> = ({ className }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 24 24" 
      fill="currentColor" 
      className={className || "w-6 h-6"}
    >
      <path d="M18.412 5.062a1.25 1.25 0 0 1 1.025 2.197l-5.005 4.29 5.005 4.29a1.25 1.25 0 0 1-1.025 2.197l-7.09-6.078a1.25 1.25 0 0 1 0-2.196l7.09-6.077ZM7.5 5.062A1.25 1.25 0 0 1 6.25 6.312v11.375a1.25 1.25 0 0 1-2.5 0V6.312A1.25 1.25 0 0 1 7.5 5.06Z" />
    </svg>
  );
};

export default PreviousTrackIcon;
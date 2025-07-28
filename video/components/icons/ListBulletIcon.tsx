import React from 'react';

interface ListBulletIconProps {
  className?: string;
}

const ListBulletIcon: React.FC<ListBulletIconProps> = ({ className }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 24 24" 
      fill="currentColor" 
      className={className || "w-6 h-6"}
    >
      <path fillRule="evenodd" d="M2.625 6.75a.75.75 0 0 1 .75-.75h17.25a.75.75 0 0 1 0 1.5H3.375a.75.75 0 0 1-.75-.75Zm0 6a.75.75 0 0 1 .75-.75h17.25a.75.75 0 0 1 0 1.5H3.375a.75.75 0 0 1-.75-.75Zm0 6a.75.75 0 0 1 .75-.75h17.25a.75.75 0 0 1 0 1.5H3.375a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" />
    </svg>
  );
};

export default ListBulletIcon;
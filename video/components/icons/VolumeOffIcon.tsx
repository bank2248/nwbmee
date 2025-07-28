import React from 'react';

interface VolumeOffIconProps {
  className?: string;
}

const VolumeOffIcon: React.FC<VolumeOffIconProps> = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className || "w-6 h-6"}
    >
      <path d="M13.5 4.06c0-1.336-1.616-2.005-2.56-1.06l-4.5 4.5H4.508c-1.141 0-2.318.664-2.66 1.905A9.76 9.76 0 0 0 1.5 12c0 .898.121 1.768.35 2.595.341 1.24 1.518 1.905 2.66 1.905H6.44l4.5 4.5c.944.945 2.56.276 2.56-1.06V4.06ZM18.28 15.28a.75.75 0 0 0-1.06-1.06l-1.97-1.97-1.97 1.97a.75.75 0 1 0 1.06 1.06L16.25 14.2l1.97 1.97ZM18.28 8.72a.75.75 0 0 0 1.06-1.06l-1.97-1.97-1.97 1.97a.75.75 0 1 0 1.06 1.06L16.25 9.8l1.97-1.97Z" />
    </svg>
  );
};

export default VolumeOffIcon;
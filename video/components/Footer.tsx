import React from 'react';
import TwitterIcon from './icons/TwitterIcon';
import GithubIcon from './icons/GithubIcon';
import LinkedinIcon from './icons/LinkedinIcon';

const SocialLink: React.FC<{ href: string; ariaLabel: string; children: React.ReactNode }> = ({ href, ariaLabel, children }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={ariaLabel}
    className="text-[var(--text-muted)] hover:text-[var(--text-default)] transition-transform duration-200 hover:scale-110"
  >
    {children}
  </a>
);


const Footer: React.FC = () => {
  return (
    <footer className="bg-[var(--bg-surface-glass)] backdrop-blur-lg mt-12 glass-border shadow-[0_-4px_15px_var(--shadow-color)]">
      <div className="container mx-auto px-6 py-8 text-center text-[var(--text-secondary)]">
        <p className="text-lg font-medium text-[var(--text-default)] mb-4">
          Thank you for visiting!
        </p>
        
        <div className="flex justify-center items-center space-x-6 mb-6">
          <SocialLink href="#" ariaLabel="Follow on Twitter">
            <TwitterIcon className="w-6 h-6" />
          </SocialLink>
          <SocialLink href="#" ariaLabel="View on GitHub">
            <GithubIcon className="w-6 h-6" />
          </SocialLink>
          <SocialLink href="#" ariaLabel="Connect on LinkedIn">
            <LinkedinIcon className="w-6 h-6" />
          </SocialLink>
        </div>

        <p className="text-sm text-[var(--text-muted)]">
          &copy; 2025 Your Name / Artist Name. All rights reserved.
        </p>
         <p className="text-xs mt-2 text-[var(--text-subtle)]">
          Crafted with ❤️ using React & Tailwind CSS.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

import React from 'react';
import { useTranslation } from 'react-i18next';

interface StoreBadgeProps {
  href: string;
  className?: string;
}

export const AppStoreBadge: React.FC<StoreBadgeProps> = ({ href, className = '' }) => {
  const { t } = useTranslation();
  
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer" 
      className={`inline-block ${className}`}
      aria-label={t('download.appstore')}
    >
      <div className="h-14 bg-black text-white rounded-lg px-4 py-2 flex items-center justify-center hover:opacity-90 transition-opacity">
        <div className="mr-3">
          <svg width="30" height="30" viewBox="0 0 24 24" fill="currentColor">
            <path d="M16.05 3.58a4.42 4.42 0 0 0-1.05 3.22 4.32 4.32 0 0 0 2.57 3.94 9.8 9.8 0 0 1-1.27 2.62c-.77 1.12-1.57 2.25-2.83 2.27-1.24.03-1.64-.73-3.06-.73-1.42 0-1.86.71-3.03.75-1.22.05-2.14-1.22-2.92-2.33a11.23 11.23 0 0 1-1.96-6.12c0-3.6 2.34-5.5 4.64-5.5 1.22-.01 2.37.82 3.12.82.75 0 2.15-1.02 3.62-.87.62.02 2.35.25 3.47 1.89a4.06 4.06 0 0 0-1.28 3.04zM12.92.97c.14 1.06-.3 2.11-.86 2.89-.56.77-1.5 1.36-2.41 1.34-.18-1.03.29-2.1.83-2.77A3.36 3.36 0 0 1 12.92.97z"/>
          </svg>
        </div>
        <div className="text-left">
          <div className="text-xs">Download on the</div>
          <div className="text-lg font-semibold">App Store</div>
        </div>
      </div>
    </a>
  );
};

export const PlayStoreBadge: React.FC<StoreBadgeProps> = ({ href, className = '' }) => {
  const { t } = useTranslation();
  
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer" 
      className={`inline-block ${className}`}
      aria-label={t('download.playstore')}
    >
      <div className="h-14 bg-black text-white rounded-lg px-4 py-2 flex items-center justify-center hover:opacity-90 transition-opacity">
        <div className="mr-3">
          <svg width="30" height="30" viewBox="0 0 24 24" fill="currentColor">
            <path d="M3.61 1.814L13.93 12 3.61 22.186c-.26-.52-.61-1.41-.61-2.186V4c0-.77.35-1.666.61-2.186zM13.93 12l3.09 3.03 3.57-2.03c.45-.26 1.01-.97 1.01-1s-.54-.74-1.01-1l-3.57-2.03L13.93 12zM3.94 1.5L13.93 12l-9.99 10.5c-.33-.17-.94-.66-.94-1V2.5c0-.34.61-.83.94-1zM13.93 12L5 2.5h14.64c.17.33.36.64.36 1.02v17.02c0 .32-.22.63-.36.96H5l8.93-9.5z"/>
          </svg>
        </div>
        <div className="text-left">
          <div className="text-xs">GET IT ON</div>
          <div className="text-lg font-semibold">Google Play</div>
        </div>
      </div>
    </a>
  );
};
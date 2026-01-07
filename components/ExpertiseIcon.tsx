import React from 'react';

interface ExpertiseIconProps {
  type: 'ideation' | 'administration' | 'digital';
  className?: string;
}

const ExpertiseIcon = ({ type, className = '' }: ExpertiseIconProps) => {
  switch (type) {
    case 'ideation':
      return (
        <svg 
          viewBox="0 0 100 100" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          className={className}
        >
          <circle cx="50" cy="35" r="20"/>
          <path d="M35 50 L35 60 L65 60 L65 50"/>
          <line x1="35" y1="65" x2="65" y2="65"/>
          <line x1="40" y1="70" x2="60" y2="70"/>
          <line x1="50" y1="15" x2="50" y2="5"/>
          <line x1="70" y1="20" x2="77" y2="13"/>
          <line x1="30" y1="20" x2="23" y2="13"/>
          <line x1="80" y1="35" x2="90" y2="35"/>
          <line x1="20" y1="35" x2="10" y2="35"/>
        </svg>
      );
    
    case 'administration':
      return (
        <svg 
          viewBox="0 0 100 100" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          className={className}
        >
          <circle cx="50" cy="50" r="15"/>
          <path d="M50 10 L55 25 L70 20 L65 35 L80 40 L70 50 L80 60 L65 65 L70 80 L55 75 L50 90 L45 75 L30 80 L35 65 L20 60 L30 50 L20 40 L35 35 L30 20 L45 25 Z"/>
        </svg>
      );
    
    case 'digital':
      return (
        <svg 
          viewBox="0 0 100 100" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          className={className}
        >
          <path d="M50 10 L60 40 L70 50 L60 60 L50 90 L40 60 L30 50 L40 40 Z"/>
          <circle cx="50" cy="35" r="8"/>
          <path d="M35 60 L25 70 L30 75 L40 65"/>
          <path d="M65 60 L75 70 L70 75 L60 65"/>
          <path d="M25 75 L20 85 L15 90"/>
          <path d="M75 75 L80 85 L85 90"/>
        </svg>
      );
    
    default:
      return null;
  }
};

export default ExpertiseIcon;
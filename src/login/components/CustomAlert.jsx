import React from 'react';

export const Alert = ({ children, variant = 'default' }) => {
  const variantStyles = {
    default: 'bg-blue-100 text-blue-700',
    destructive: 'bg-red-100 text-red-700'
  };

  return (
    <div className={`p-4 rounded ${variantStyles[variant]}`}>
      {children}
    </div>
  );
};
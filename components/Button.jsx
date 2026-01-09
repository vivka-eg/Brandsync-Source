import React from 'react';
import '../styles/_tokens.css';
import './Button.css';

const Button = ({
  children,
  variant = 'primary',
  size = 'large',
  disabled = false,
  onClick,
  startIcon = null,
  endIcon = null
}) => {
  const getVariantClass = () => {
    if (startIcon) return `${variant}-start-icon`;
    if (endIcon) return `${variant}-end-icon`;
    return variant;
  };

  return (
    <button
      className={`button button--${getVariantClass()} button--${size}`}
      disabled={disabled}
      onClick={onClick}
    >
      {startIcon && <span className="button__icon--start">{startIcon}</span>}
      {children}
      {endIcon && <span className="button__icon--end">{endIcon}</span>}
    </button>
  );
};

export default Button;

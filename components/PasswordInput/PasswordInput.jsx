import { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import '../../styles/_tokens.css';
import './PasswordInput.css';

const PasswordInput = ({
  placeholder = 'Placeholder',
  label,
  supportiveText,
  disabled = false,
  error = false,
  value,
  onChange
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="password-wrapper">
      {label && <label className="password-label">{label}</label>}
      <div className={`password-container ${error ? 'password-container--error' : ''}`}>
        <input
          type={showPassword ? 'text' : 'password'}
          placeholder={placeholder}
          className="password-input"
          disabled={disabled}
          value={value}
          onChange={onChange}
        />
        <button
          type="button"
          className="password-toggle"
          onClick={togglePasswordVisibility}
          disabled={disabled}
          aria-label={showPassword ? 'Hide password' : 'Show password'}
        >
          {showPassword ? <FaEyeSlash /> : <FaEye />}
        </button>
      </div>
      {supportiveText && (
        <span className={`password-supportive-text ${error ? 'password-supportive-text--error' : ''}`}>
          {supportiveText}
        </span>
      )}
    </div>
  );
};

export default PasswordInput;

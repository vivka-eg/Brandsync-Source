import '../../styles/_tokens.css';
import './Input.css';

const Input = ({
  type = 'text',
  placeholder = 'Placeholder',
  label,
  supportiveText,
  startIcon = null,
  disabled = false,
  error = false,
  value,
  onChange
}) => {
  return (
    <div className="input-wrapper">
      {label && <label className="input-label">{label}</label>}
      <div className={`input-container ${error ? 'input-container--error' : ''}`}>
        {startIcon && <span className="input-icon--start">{startIcon}</span>}
        <input
          type={type}
          placeholder={placeholder}
          className="input"
          disabled={disabled}
          value={value}
          onChange={onChange}
        />
      </div>
      {supportiveText && (
        <span className={`input-supportive-text ${error ? 'input-supportive-text--error' : ''}`}>
          {supportiveText}
        </span>
      )}
    </div>
  );
};

export default Input;

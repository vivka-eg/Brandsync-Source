import '../../styles/_tokens.css';
import './Select.css';

const Select = ({
  placeholder = 'Placeholder',
  label,
  supportiveText,
  disabled = false,
  error = false,
  value,
  onChange,
  options = []
}) => {
  return (
    <div className="select-wrapper">
      {label && <label className="select-label">{label}</label>}
      <div className={`select-container ${error ? 'select-container--error' : ''}`}>
        <select
          className="select"
          disabled={disabled}
          value={value}
          onChange={onChange}
        >
          <option value="" disabled selected hidden>
            {placeholder}
          </option>
          {options.map((option, index) => (
            <option key={index} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <span className="select-icon">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </span>
      </div>
      {supportiveText && (
        <span className={`select-supportive-text ${error ? 'select-supportive-text--error' : ''}`}>
          {supportiveText}
        </span>
      )}
    </div>
  );
};

export default Select;

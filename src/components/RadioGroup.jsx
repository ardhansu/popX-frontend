import '../styles/components/RadioGroup.css'

function RadioGroup({ 
  label, 
  name, 
  options, 
  value, 
  onChange, 
  required = false,
  error = ''
}) {
  const handleChange = (e) => {
    onChange(e.target.value)
  }
  
  return (
    <div className="radio-group">
      <div className="radio-group-label">
        {label}
        {required && <span className="field-required">*</span>}
      </div>
      
      <div className="radio-options">
        {options.map((option) => (
          <label key={option.value} className="radio-option">
            <input
              type="radio"
              name={name}
              value={option.value}
              checked={value === option.value}
              onChange={handleChange}
              required={required}
            />
            <span className="radio-checkmark"></span>
            <span className="radio-label">{option.label}</span>
          </label>
        ))}
      </div>
      
      {error && <p className="field-error">{error}</p>}
    </div>
  )
}

export default RadioGroup
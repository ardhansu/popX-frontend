import { useState } from 'react'
import '../styles/components/TextField.css'

function TextField({
  label,
  type = 'text',
  required = false,
  error = '',
  value = '',
  onChange,
  placeholder = '',
  ...props
}) {
  const [focused, setFocused] = useState(false)
  
  const handleFocus = () => setFocused(true)
  const handleBlur = () => setFocused(false)
  
  const classes = [
    'text-field',
    error ? 'text-field-error' : '',
    focused ? 'text-field-focused' : '',
    value ? 'text-field-filled' : '',
  ].filter(Boolean).join(' ')
  
  return (
    <div className="field-container">
      {label && (
        <label className="field-label">
          {label}
          {required && <span className="field-required">*</span>}
        </label>
      )}
      
      <div className={classes}>
        <input
          type={type}
          value={value}
          onChange={onChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          placeholder={placeholder}
          required={required}
          {...props}
        />
      </div>
      
      {error && <p className="field-error">{error}</p>}
    </div>
  )
}

export default TextField
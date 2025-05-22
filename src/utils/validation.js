// Email validation
export const validateEmail = (email) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return regex.test(email) ? '' : 'Please enter a valid email address'
}

// Password validation
export const validatePassword = (password) => {
  if (!password) return 'Password is required'
  if (password.length < 6) return 'Password must be at least 6 characters'
  return ''
}

// Name validation
export const validateName = (name) => {
  if (!name) return 'Name is required'
  if (name.length < 2) return 'Name must be at least 2 characters'
  return ''
}

// Phone validation
export const validatePhone = (phone) => {
  const regex = /^\d{10}$/
  if (!phone) return 'Phone number is required'
  return regex.test(phone) ? '' : 'Please enter a valid 10-digit phone number'
}

// Form validation
export const validateForm = (formData, fields) => {
  const errors = {}
  let isValid = true
  
  fields.forEach(field => {
    const { name, validator, required } = field
    
    if (required && !formData[name]) {
      errors[name] = `${name.charAt(0).toUpperCase() + name.slice(1)} is required`
      isValid = false
    } else if (validator && formData[name]) {
      const error = validator(formData[name])
      if (error) {
        errors[name] = error
        isValid = false
      }
    }
  })
  
  return { isValid, errors }
}
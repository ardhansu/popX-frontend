import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import TextField from '../components/TextField'
import Button from '../components/Button'
import { validateEmail, validatePassword } from '../utils/validation'
import '../styles/pages/SignInPage.css'

function SignInPage() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })
  
  const [errors, setErrors] = useState({
    email: '',
    password: ''
  })
  
  const [submitting, setSubmitting] = useState(false)
  
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    
    // Clear error when user types
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }
  
  const validateForm = () => {
    const newErrors = {
      email: validateEmail(formData.email),
      password: validatePassword(formData.password)
    }
    
    setErrors(newErrors)
    return !Object.values(newErrors).some(error => error)
  }
  
  const handleSubmit = (e) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }
    
    setSubmitting(true)
    
    // Simulate API call
    setTimeout(() => {
      setSubmitting(false)
      // Navigate to home page on successful login
      navigate('/home')
    }, 1000)
  }
  
  return (
    <div className="signin-page">
      <div className="signin-content">
        <h1 className="signin-title">Signin to your PopX account</h1>
        <p className="signin-subtitle">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        
        <form className="signin-form" onSubmit={handleSubmit}>
          <TextField
            label="Email Address"
            type="email"
            name="email"
            placeholder="Enter email address"
            value={formData.email}
            onChange={handleChange}
            error={errors.email}
            required
          />
          
          <TextField
            label="Password"
            type="password"
            name="password"
            placeholder="Enter password"
            value={formData.password}
            onChange={handleChange}
            error={errors.password}
            required
          />
          
          <Button 
            variant="tertiary" 
            fullWidth 
            type="submit"
            disabled={submitting}
          >
            {submitting ? 'Logging in...' : 'Login'}
          </Button>
        </form>
      </div>
    </div>
  )
}

export default SignInPage
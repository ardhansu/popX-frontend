import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import TextField from '../components/TextField'
import RadioGroup from '../components/RadioGroup'
import Button from '../components/Button'
import { 
  validateEmail, 
  validatePassword, 
  validateName,
  validatePhone
} from '../utils/validation'
import '../styles/pages/SignUpPage.css'

function SignUpPage() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    password: '',
    companyName: '',
    isAgency: 'yes'
  })
  
  const [errors, setErrors] = useState({
    fullName: '',
    phone: '',
    email: '',
    password: '',
    companyName: '',
    isAgency: ''
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
  
  const handleRadioChange = (value) => {
    setFormData(prev => ({ ...prev, isAgency: value }))
  }
  
  const validateForm = () => {
    const newErrors = {
      fullName: validateName(formData.fullName),
      phone: validatePhone(formData.phone),
      email: validateEmail(formData.email),
      password: validatePassword(formData.password),
      companyName: '',
      isAgency: ''
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
      // Navigate to home page on successful signup
      navigate('/home')
    }, 1000)
  }
  
  return (
    <div className="signup-page">
      <div className="signup-content">
        <h1 className="signup-title">Create your PopX account</h1>
        
        <form className="signup-form" onSubmit={handleSubmit}>
          <TextField
            label="Full Name"
            type="text"
            name="fullName"
            placeholder="Marry Doe"
            value={formData.fullName}
            onChange={handleChange}
            error={errors.fullName}
            required
          />
          
          <TextField
            label="Phone number"
            type="tel"
            name="phone"
            placeholder="Marry Doe"
            value={formData.phone}
            onChange={handleChange}
            error={errors.phone}
            required
          />
          
          <TextField
            label="Email address"
            type="email"
            name="email"
            placeholder="Marry Doe"
            value={formData.email}
            onChange={handleChange}
            error={errors.email}
            required
          />
          
          <TextField
            label="Password"
            type="password"
            name="password"
            placeholder="Marry Doe"
            value={formData.password}
            onChange={handleChange}
            error={errors.password}
            required
          />
          
          <TextField
            label="Company name"
            type="text"
            name="companyName"
            placeholder="Marry Doe"
            value={formData.companyName}
            onChange={handleChange}
            error={errors.companyName}
          />
          
          <RadioGroup
            label="Are you an Agency?"
            name="isAgency"
            options={[
              { label: 'Yes', value: 'yes' },
              { label: 'No', value: 'no' }
            ]}
            value={formData.isAgency}
            onChange={handleRadioChange}
            error={errors.isAgency}
            required
          />
          
          <Button 
            variant="primary" 
            fullWidth 
            type="submit"
            disabled={submitting}
          >
            {submitting ? 'Creating Account...' : 'Create Account'}
          </Button>
        </form>
      </div>
    </div>
  )
}

export default SignUpPage
import { useNavigate } from 'react-router-dom'
import Button from '../components/Button'
import '../styles/pages/LandingPage.css'

function LandingPage() {
  const navigate = useNavigate()
  
  const handleCreateAccount = () => {
    navigate('/signup')
  }
  
  const handleLogin = () => {
    navigate('/signin')
  }
  
  return (
    <div className="landing-page">
      <div className="landing-content">
        <h1 className="landing-title">Welcome to PopX</h1>
        <p className="landing-subtitle">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        
        <div className="landing-actions">
          <Button 
            variant="primary" 
            fullWidth 
            onClick={handleCreateAccount}
          >
            Create Account
          </Button>
          
          <Button 
            variant="secondary" 
            fullWidth 
            onClick={handleLogin}
          >
            Already Registered? Login
          </Button>
        </div>
      </div>
    </div>
  )
}

export default LandingPage
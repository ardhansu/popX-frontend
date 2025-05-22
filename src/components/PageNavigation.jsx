import { useNavigate } from 'react-router-dom'
import '../styles/components/PageNavigation.css'

function PageNavigation({ currentPage, totalPages }) {
  const navigate = useNavigate()
  
  const goToHome = () => {
    navigate('/')
  }
  
  const goToPrevious = () => {
    switch (currentPage) {
      case 2:
        navigate('/')
        break
      case 3:
        navigate('/signin')
        break
      case 4:
        navigate('/signup')
        break
      default:
        break
    }
  }
  
  const goToNext = () => {
    switch (currentPage) {
      case 1:
        navigate('/signin')
        break
      case 2:
        navigate('/signup')
        break
      case 3:
        navigate('/home')
        break
      default:
        break
    }
  }
  
  return (
    <div className="page-navigation">
      <button className="nav-button home-button" onClick={goToHome}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
          <polyline points="9 22 9 12 15 12 15 22"></polyline>
        </svg>
      </button>
      
      <div className="nav-controls">
        <button 
          className="nav-button prev-button" 
          onClick={goToPrevious}
          disabled={currentPage === 1}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
        </button>
        
        <span className="page-indicator">{currentPage} of {totalPages}</span>
        
        <button 
          className="nav-button next-button" 
          onClick={goToNext}
          disabled={currentPage === totalPages}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </button>
      </div>
    </div>
  )
}

export default PageNavigation
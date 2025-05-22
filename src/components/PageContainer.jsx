import { useLocation } from 'react-router-dom'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import '../styles/components/PageContainer.css'

function PageContainer({ children }) {
  const location = useLocation()
  
  return (
    <div className="page-container">
      <div className="page-content">
        <TransitionGroup component={null}>
          <CSSTransition key={location.pathname} classNames="page-transition" timeout={300}>
            <div className="page-wrapper">
              {children}
            </div>
          </CSSTransition>
        </TransitionGroup>
      </div>
    </div>
  )
}

export default PageContainer
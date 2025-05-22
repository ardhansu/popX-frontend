import '../styles/pages/HomePage.css'

function HomePage() {
  // In a real app, this would come from API or context
  const user = {
    name: 'Marry Doe',
    email: 'Marry@Gmail.Com',
    avatar: 'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=600',
    bio: 'Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam'
  }
  
  return (
    <div className="home-page">
      <div className="home-header">
        <h1 className="home-title">Account Settings</h1>
      </div>
      
      <div className="profile-section">
        <div className="profile-header">
          <div className="profile-avatar-container">
            <img src={user.avatar} alt={user.name} className="profile-avatar" />
            <div className="profile-badge">
              <span>P</span>
            </div>
          </div>
          
          <div className="profile-info">
            <h2 className="profile-name">{user.name}</h2>
            <p className="profile-email">{user.email}</p>
          </div>
        </div>
        
        <p className="profile-bio">{user.bio}</p>
      </div>
      
      <div className="divider"></div>
    </div>
  )
}

export default HomePage
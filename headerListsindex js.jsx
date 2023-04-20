import './tabs.css'

const Header = () => (
  <nav className="nav-header">
    <div className="nav-content">
      <p className="website-logo">RA</p>
      <ul className="nav-menu">
        <li className='nav-li'>
          <img
            className="social-network-img"
            src="https://th.bing.com/th/id/OIP.X-3PgW1kZj3OFpeSAXjxuwHaHa?w=199&h=199&c=7&r=0&o=5&pid=1.7"
            alt="Linked In"
          />
        </li>
        <li className='nav-li'>
          <img
            className="social-network-img"
            src="https://logos-download.com/wp-content/uploads/2016/09/GitHub_logo.png"
            alt="Git Hub"
          />
        </li>
        <li className='nav-li'>
          <img
            className="social-network-img"
            src="https://th.bing.com/th?id=OIP.kcEW0BnMyMcnnb7XKdVIJgHaGB&w=277&h=225&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2"
            alt="Twitter"
          />
        </li>
      </ul>
    </div>
  </nav>
)

export default Header
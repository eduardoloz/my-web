import './Navbar.css'

const Navbar = () => {
  return (
    <nav className='navbar'>
      <a href="\">Home</a>
      <a href="\projects">Projects</a>
      <a href="#about">About</a>
      <div className="right">
        <a href="\contact">Contact</a>
        <i class="fa-brands fa-github"></i>
      </div>
    </nav>
	);
}

export default Navbar;
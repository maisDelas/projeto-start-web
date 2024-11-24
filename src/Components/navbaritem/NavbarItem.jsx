

const NavbarItem = ({ alt, href, label, src }) => {
    return (
      <div className="navbar-item">
        <img src={src} alt={alt} />
        <a href={`#${href}`}>{label}</a>
      </div>
    )
  }
  
  export default NavbarItem;
  
import { Link } from "react-router-dom"

function Header() {
  return (
    <div>
<nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="ms-5">
    <a className="navbar-brand" href="#" ><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6rR8p0rD9sAD61ZIrdanuEeIF43ULf0-h7Q&s" width="35px" alt="" /></a>
    </div>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse d-flex justify-content-end" id="navbarNav">
    <ul className="navbar-nav my-3">
      <li className="nav-item active me-5">
        <Link className="nav-link" to="">Home</Link>
      </li>
      <li className="nav-item active me-5">
        <Link className="nav-link" to="register">Register</Link>
      </li>
      <li className="nav-item active me-5">
        <Link className="nav-link" to="login">Login</Link>
      </li>

    </ul>
  </div>
</nav>
    </div>
  )
}

export default Header
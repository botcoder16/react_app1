import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
export default function Navbar(props) {
  // To use javascript variables in html use `${}`
  return (
    <div>
      <nav className={`navbar navbar-expand-lg border-bottom navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
          <a className="navbar-brand" href="/">{props.title}</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/add_comment">Add Comment</Link>
              </li>
            </ul>
              <div className="float-end">

            <button className="nav-item btn btn-outline-primary mx-3" aria-expanded="false">
              <span className="nav-item" type="button" onClick={props.toggleTheme}>{props.text}</span>
            </button>
              </div>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  )
}

Navbar.propTypes = { title: PropTypes.string.isRequired }
Navbar.defaultProps = { title: "Default title" }
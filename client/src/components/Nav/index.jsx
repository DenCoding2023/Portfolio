import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap"; // Import Bootstrap components

function Nav() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <Link className="navbar-brand" to="/">Luciano</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/teams">
                About Me
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/PokemonTeamB">
                Portfolio
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/picachu">
                Contact
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/picachu">
                Resume
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" onClick={() => Auth.logout()} className="nav-link">
                Logout
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      
      {/* Medium-sized circular image and text */}
      <Container fluid className="py-5">
        <Row className="justify-content-center align-items-center">
          <Col md={6} className="text-center">
            <img
              src="/images/image-1.jpg"
              alt="Main Image"
              className="img-fluid rounded-circle glow-image medium-circle"
            />
            <h1>Welcome to Battle Buddy Builder</h1>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Nav;

import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav style={styles.nav}>
      <NavLink to="/home" style={styles.link}>Home</NavLink>
      <NavLink to="/aboutus" style={styles.link}>About Us</NavLink>
      <NavLink to="/todos" style={styles.link}>Todos</NavLink>
    </nav>
  );
}

const styles = {
  nav: {
    padding: "15px",
    backgroundColor: "#222",
    display: "flex",
    gap: "20px",
  },
  link: {
    color: "white",
    textDecoration: "none",
    fontSize: "18px",
  },
};

export default Navbar;
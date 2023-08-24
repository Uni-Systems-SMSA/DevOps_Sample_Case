import React from "react";

// reactstrap components
import { Container, Nav, NavItem, NavLink } from "reactstrap";

function Footer() {
  return (
    <footer className="footer">
      <Container fluid>
        <Nav>
          <NavItem>
            <NavLink href="https://apply.workable.com/uni-systems/">
              Work with us!
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="https://www.unisystems.com/company">
              About Us
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="https://www.linkedin.com/company/unisystems/">
              LinkedIn
            </NavLink>
          </NavItem>
        </Nav>
        <div className="copyright">
          Version 0.10 © {new Date().getFullYear()} made with{" "}
          <i className="tim-icons icon-heart-2" /> by{" "}
          <a
            href="https://www.linkedin.com/in/paris-rafail-tataridis-494767231/"
            target="_blank"
          >
            TataridisP
          </a>{" "}
          for a better web.
        </div>
      </Container>
    </footer>
  );
}

export default Footer;

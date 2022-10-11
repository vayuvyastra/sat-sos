import "./Navbar.css";

import NavbarLinks from "./NavbarLinks";

function Navbar() {
  return (
    <>
      <div className="nav-container">
        <div>
          <NavbarLinks name="Vayuyastra" src="rocket" />
          <NavbarLinks name="Mission" src="confirmation_number" />
          <NavbarLinks name="Teams" src="groups_2" />
          <NavbarLinks name="About" src="info" />
        </div>
      </div>
    </>
  );
}

export default Navbar;

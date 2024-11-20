import Container from "../container";
import Logo from "./logo";
import MenuLinks from "./menu-links";
import UserMenu from "./user-menu";

const Navbar = () => {
  return (
    <div className="fixed border-b border-blue-200 w-full z-20 bg-white p-4 shadow-sm">
      <Container>
        <div className="flex items-center justify-between">
          <Logo />
          <div>
            <MenuLinks />
          </div>
          <UserMenu />
        </div>
      </Container>
    </div>
  );
};

export default Navbar;

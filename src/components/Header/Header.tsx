import HeaderStyled from "./HeaderStyled";

const Header = (): React.ReactElement => {
  return (
    <HeaderStyled>
      <img
        className="image-logo"
        src="/images/logo-sand-rose.svg"
        alt="SandRose-log"
        width="230"
        height="90"
      ></img>
    </HeaderStyled>
  );
};

export default Header;

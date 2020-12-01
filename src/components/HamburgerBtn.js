import "../styles/HamburgerBtn.css";

const HamburgerBtn = (props) => {
  const isHamburgerActive = props.isHamburgerActive;
  const handleOnClick = props.handleOnClick;
  return (
    <button
      onClick={handleOnClick}
      className={
        "hamburger hamburger--collapse" +
        (isHamburgerActive ? " is-active" : "")
      }
      type="button"
      name="hamburgerBtn"
    >
      <span className="hamburger-box">
        <span className="hamburger-inner"></span>
      </span>
    </button>
  );
};

export default HamburgerBtn;

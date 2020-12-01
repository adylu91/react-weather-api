import "../styles/SideMenu.css";

const SideMenu = (props) => {
  const handleOnClick = props.handleOnClick;
  let savedTowns = [...props.savedTowns];
  savedTowns = savedTowns.map((it) => {
    return (
      <div
        className="sideMenu_town"
        key={it}
        name="savedTown"
        onClick={handleOnClick}
      >
        <span>{it}</span>
      </div>
    );
  });
  return (
    <>
      <h3 className="sideMenu_header">Zapisane miasta:</h3>
      {savedTowns}
      {savedTowns.length === 0 ? (
        <p className="sideMenu_townsInfo">brak zapisanych miast</p>
      ) : (
        <button
          className="sideMenu_clearBtn"
          name="clearTowns"
          type="button"
          onClick={handleOnClick}
        >
          Wyczyść
        </button>
      )}
    </>
  );
};

export default SideMenu;

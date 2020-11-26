import "../styles/SearchResults.css";

const SearchResults = (props) => {
  const handleOnClick = props.handleOnClick;
  let resultsList = [...props.resultsList];
  let view;
  resultsList = resultsList.map((it) => {
    return (
      <div
        className="searchResults_item"
        key={it.name + it.province}
        name={it.name + "_" + it.province}
        onClick={handleOnClick}
      >
        <h1 className="searchResults_header">{it.name}</h1>
        <p className="searchResults_area">{it.province}</p>
      </div>
    );
  });

  if (resultsList.length > 7) {
    view = resultsList.slice(0, 7);
    view.push(
      <div className="searchResults_more">
        <span>{`+ ${resultsList.length - 7} więcej...`}</span>
      </div>
    );
  } else if (resultsList.length <= 7) {
    view = [...resultsList];
  }

  return resultsList.length === 0 ? (
    <div className="searchResults_alert">Brak wyników</div>
  ) : (
    <div className="searchResults_wrapper">{view}</div>
  );
};

export default SearchResults;

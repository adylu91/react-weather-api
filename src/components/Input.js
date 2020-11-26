const Input = (props) => {
  return (
    <>
      <label className="app_input_label" htmlFor="app_input_town">
        Szukaj miasta:
      </label>
      <input
        onChange={props.handleOnChange}
        className="app_input_town"
        id="app_input_town"
        type="text"
        value={props.inputTextValue}
        autoComplete="off"
        placeholder="wpisz nazwę szukanego miasta..."
      />
    </>
  );
};

export default Input;

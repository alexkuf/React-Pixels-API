const Header = ({ setInputValue, setCurrentPage }) => {
  return (
    <div className="px-3 py-2 bg-dark text-white sticky-top">
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <i className="bi bi-image fs-2"></i>
          <ul className="nav col-12 col-lg-auto my-2 justify-content-center my-md-0 ms-2 text-small">
            Pixels
          </ul>
          <input
            type="search"
            className="form-control ms-auto"
            aria-label="Search"
            style={{ width: "18rem" }}
            placeholder="Search..."
            onChange={(e) => {
              setCurrentPage(1);
              setInputValue(e.target.value);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;

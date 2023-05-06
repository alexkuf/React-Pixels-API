const Footer = () => {
  return (
    <div className="px-3 py-2 bg-dark text-white">
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <ul className="nav col-12 col-lg-auto my-2 justify-content-center my-md-0 ms-2 text-small">
            Alex
          </ul>
          <span className="mx-2">&copy;</span>
          <span>{new Date().getFullYear()}</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;

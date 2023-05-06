const ImagesGal = ({ img, setImgId, setIsClicked }) => {
  return (
    <li className="card border-0">
      <img
        src={img.src.large2x}
        alt="..."
        onClick={() => {
          setImgId(img.id);
          setIsClicked(true);
        }}
      />
      <div className="ditails">
        <div className="photographer">
          <i className="bi bi-camera me-2"></i>
          <span>{img.photographer}</span>
        </div>
      </div>
    </li>
  );
};
export default ImagesGal;

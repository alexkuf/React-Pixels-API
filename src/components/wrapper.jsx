const Wrapper = ({ imgId, dataImages, setIsClicked }) => {
  const downloadImge = (url, fileName) => {
    fetch(url)
      .then((res) => res.blob())
      .then((file) => {
        const a = document.createElement("a");
        a.href = URL.createObjectURL(file);
        a.download = new Date().getTime() + "-" + fileName;
        a.click();
      })
      .catch(() => alert("Failed to download image!"));
  };

  return (
    dataImages &&
    dataImages.map((elem, ind) => {
      if (elem.id === imgId) {
        return (
          <div className="lightbox" key={ind}>
            <div className="wrapper">
              <header>
                <p className="imgPhotographer">
                  <i className="bi bi-camera me-2"></i>
                  <span>Photographer: {elem.photographer}</span>
                </p>

                <button className="close" onClick={() => setIsClicked(false)}>
                  <i className="bi bi-x fs-2"></i>
                </button>
              </header>
              <div className="preview-img">
                <div className="img">
                  <img src={elem.src.large2x} alt="preview-img" />
                </div>
                <div className="info">
                  <div className="downLink">Download:</div>
                  <button
                    className="downloadImge"
                    onClick={() => {
                      downloadImge(elem.src.original, "original");
                    }}
                    title="Download image"
                  >
                    Original
                    <i className="bi bi-download"></i>
                  </button>

                  <button
                    className="downloadImge"
                    onClick={() => {
                      downloadImge(elem.src.landscape, "landscape");
                    }}
                    title="Download image"
                  >
                    Landscape
                    <i className="bi bi-download"></i>
                  </button>

                  <button
                    className="downloadImge"
                    onClick={() => {
                      downloadImge(elem.src.large, "large");
                    }}
                    title="Download image"
                  >
                    Large
                    <i className="bi bi-download"></i>
                  </button>

                  <button
                    className="downloadImge"
                    onClick={() => {
                      downloadImge(elem.src.large2x, "large2x");
                    }}
                    title="Download image"
                  >
                    Large2x
                    <i className="bi bi-download"></i>
                  </button>

                  <button
                    className="downloadImge"
                    onClick={() => {
                      downloadImge(elem.src.medium, "medium");
                    }}
                    title="Download image"
                  >
                    Medium
                    <i className="bi bi-download"></i>
                  </button>

                  <button
                    className="downloadImge"
                    onClick={() => {
                      downloadImge(elem.src.portrait, "portrait");
                    }}
                    title="Download image"
                  >
                    Portrait
                    <i className="bi bi-download"></i>
                  </button>

                  <button
                    className="downloadImge"
                    onClick={() => {
                      downloadImge(elem.src.small, "small");
                    }}
                    title="Download image"
                  >
                    Small
                    <i className="bi bi-download"></i>
                  </button>

                  <button
                    className="downloadImge"
                    onClick={() => {
                      downloadImge(elem.src.tiny, "tiny");
                    }}
                    title="Download image"
                  >
                    Tiny
                    <i className="bi bi-download"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      }
      return "";
    })
  );
};

export default Wrapper;

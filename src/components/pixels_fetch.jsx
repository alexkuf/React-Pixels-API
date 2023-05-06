import { useEffect, useState } from "react";
import ImagesGal from "./images";
import Header from "./header";
import Footer from "./footer";
import Wrapper from "./wrapper";

const PixelFetch = () => {
  const [dataImages, setDataImages] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const [inputValue, setInputValue] = useState(null);
  const [imgId, setImgId] = useState();
  const [isClicked, setIsClicked] = useState(false);

  const API_key = "QFCvMowTPgGarfKrklaAvDN3mvh6SlJJf0hGXQ4UCNJJ4jKt0VxMUFHX";
  const PER_PAGE = 15;

  useEffect(() => {
    const getAllData = async () => {
      const response = await fetch(
        !inputValue
          ? `https://api.pexels.com/v1/curated?page=${currentPage}per_page=${PER_PAGE}`
          : `https://api.pexels.com/v1/search?query=${inputValue}&page=${currentPage}per_page=${PER_PAGE}`,
        { headers: { Authorization: API_key } }
      );
      const data = await response.json();
      if (currentPage === 1) {
        setDataImages(await data.photos);
      } else if (
        currentPage !== 1 &&
        (inputValue === null) | (inputValue !== null)
      ) {
        setDataImages((dataImages) => [...dataImages, ...data.photos]);
      }
    };
    getAllData();
  }, [currentPage, inputValue]);

  return (
    <>
      <Header
        inputValue={inputValue}
        setInputValue={setInputValue}
        setCurrentPage={setCurrentPage}
        setDataImages={setDataImages}
      />
      <div className="container-fluid">
        <section className="gallery">
          <ul className="images">
            {dataImages?.length > 0 ? (
              dataImages &&
              dataImages.map((img, ind) => (
                <ImagesGal
                  key={ind}
                  img={img}
                  dataImages={dataImages}
                  setImgId={setImgId}
                  setIsClicked={setIsClicked}
                />
              ))
            ) : (
              <div
                className="container-fluid text-center fs-1"
                style={{ width: "30rem", height: "2870px" }}
              >
                No data
              </div>
            )}
          </ul>
          <button
            type="button"
            className="btn btn-primary mb-3"
            onClick={() => {
              setCurrentPage(currentPage + 1);
            }}
          >
            Load More
          </button>
        </section>
      </div>
      {isClicked ? (
        <Wrapper
          imgId={imgId}
          dataImages={dataImages}
          setIsClicked={setIsClicked}
        />
      ) : null}

      <Footer />
    </>
  );
};

export default PixelFetch;

import "./styles.css";

import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";

import InfoProjects from "../../Data/InfoProjects";
import Footer from "../../Components/Footer";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

export default function Details() {
  const { id } = useParams();

  const [infoArray, setInfoArray] = useState([]);

  useEffect(() => {
    let filteredArray = InfoProjects.filter((item) => item.id === id);

    setInfoArray(filteredArray);
  }, [id]);

  const carousel = useRef(null);

  function carouselScrollLeft() {
    carousel.current.scrollLeft -= carousel.current.offsetWidth;
  }
  function carouselScrollRight() {
    carousel.current.scrollLeft += carousel.current.offsetWidth;
  }

  return (
    <>
      {infoArray.map((item) => {
        const arrayImg = [
          item.src1,
          item.src2,
          item.src3,
          item.src4,
          item.src5,
          item.src6,
          item.src7,
        ];
        const arrayImgFilter = arrayImg.filter((img) => img !== undefined);

        return (
          <div key={item.id} className="PageDetail">
            <h1>{item.name}</h1>

            <section className="containerCarousel">
              <button
                className="buttonCarouselRight"
                onClick={carouselScrollRight}
              >
                <FaAngleRight />
              </button>

              <div className="carousel" ref={carousel}>
                {arrayImgFilter.map((img) => (
                  <img key={img} src={"../" + img} alt={item.name} />
                ))}
              </div>

              <button
                className="buttonCarouselLeft"
                onClick={carouselScrollLeft}
              >
                <FaAngleLeft />
              </button>
            </section>

            <p className="techUsed">
              Tecnologias utilizadas para desenvolvimento do Projeto:{" "}
              {item.technologiesUsed}
            </p>
            <p>{item.moreInfo}</p>

            <a href={item.linkVercel} target="_blank" rel="noreferrer">
              Veja no site
            </a>

            <a href={item.linkGitHub} target="_blank" rel="noreferrer">
              Veja no gitHub
            </a>
          </div>
        );
      })}
      <Footer />
    </>
  );
}

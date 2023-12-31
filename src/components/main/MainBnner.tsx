import React, { useState } from "react";
import { Bnner } from "../../styles/MainBnnerStyle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faArrowRight,
  faPause,
  faPlay,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import useInterval from "../../hooks/useInterval";

interface MainSlide {
  pk: number;
  title: string;
  img: string;
  backgroundColor: string;
  link: string;
}

const mainData: MainSlide[] = [
  {
    pk: 1,
    title: "연말을 더 설레게 하는 감성 여행지 특집🎄",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWCV1zV6_Qxrng8K_lSGVjNyjRfVr44R3CWw&usqp=CAU",
    backgroundColor: "rgb(194, 209, 245)",
    link: "/tlog",
  },
  {
    pk: 2,
    title: "마음의 온도를 높이는 겨울 여행지 추천🎅",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN6mwTMjqNS9THt23h6bIK0N83cxq5Ix24RQ&usqp=CAU",
    backgroundColor: "#f7d3c4",
    link: "/tlog",
  },
  {
    pk: 3,
    title: "미리보는 완벽한 겨울 낭만 여행지",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSE0BfeH3yUkj8qk7b4GdP6LiktUNBOkdhCclb-w5BlmHSyF3UCJQX3I_S0fpNzjArlOXs&usqp=CAU",
    backgroundColor: "#8ed0db",
    link: "/tlog",
  },
  {
    pk: 4,
    title: "늦가을 바람 따라 떠나는 정선 드라이브",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWCV1zV6_Qxrng8K_lSGVjNyjRfVr44R3CWw&usqp=CAU",
    backgroundColor: "#cef4c5",
    link: "/tlog",
  },
  {
    pk: 5,
    title: "한국관광 홍보영상 속 촬영지로 떠나는 여행!",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN6mwTMjqNS9THt23h6bIK0N83cxq5Ix24RQ&usqp=CAU",
    backgroundColor: "#dde7ac",
    link: "/tlog",
  },
];

const MainBnner: React.FC = () => {
  const totalSlide = mainData.length;
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [progress, setProgress] = useState<number>(0);

  useInterval(
    () => {
      const newProgress = progress + 100 / (4000 / 100);

      if (newProgress >= 100) {
        setProgress(0);
        nextSlide();
      } else {
        setProgress(newProgress);
      }
    },
    isPlaying ? 100 : null,
  );

  const prevSlide = () => {
    setCurrentSlide(prevSlide =>
      prevSlide === 0 ? totalSlide - 1 : prevSlide - 1,
    );
    setProgress(0);
  };

  const nextSlide = () => {
    setCurrentSlide(prevSlide =>
      prevSlide + 1 >= totalSlide ? 0 : prevSlide + 1,
    );
    setProgress(0);
  };

  const togglePlay = () => {
    setIsPlaying(prevState => !prevState);
  };

  return (
    <Bnner>
      {mainData?.map((data, index) => (
        <div
          className="main-top"
          key={index}
          style={{
            display: index === currentSlide ? "flex" : "none",
            backgroundColor: data.backgroundColor,
          }}
        >
          <ul>
            <li>
              <img className="top-img" src={data.img} alt={data.title} />
            </li>
            <li className="top-info">
              <span>{data.title}</span>
            </li>
            <li className="top-detail">
              <Link to={data.link}>자세히 보기</Link>
            </li>
            <li>
              <div className="progress-bar">
                <div className="progress">
                  <div
                    className="inner-progress"
                    style={{ width: `${progress}%` }}
                  />
                </div>
                <div className="current-slide">
                  {currentSlide + 1} / {totalSlide}
                </div>
                <div className="progress-bt">
                  <button className="prev-bt" onClick={prevSlide}>
                    <FontAwesomeIcon icon={faArrowLeft} />
                  </button>
                  <button onClick={togglePlay} className="stop-bt">
                    {isPlaying ? (
                      <FontAwesomeIcon icon={faPause} />
                    ) : (
                      <FontAwesomeIcon icon={faPlay} />
                    )}
                  </button>
                  <button className="next-bt" onClick={nextSlide}>
                    <FontAwesomeIcon icon={faArrowRight} />
                  </button>
                </div>
              </div>
            </li>
          </ul>
        </div>
      ))}
    </Bnner>
  );
};

export default MainBnner;

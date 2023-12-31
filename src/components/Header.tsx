import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { HeaderWrap, Spacer } from "../styles/HeaderStyle";
import { setTrue } from "../reducers/tlogSlice";
import { useDispatch } from "react-redux";
import Search from "./Search";
import { LoginModal } from "./Modal";

const Header: React.FC = () => {
  const [moveScroll, setMoveScroll] = useState<boolean>(false);
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [clickSearch, setClickSearch] = useState<boolean>(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const handleMoveScroll = () => {
      if (window.scrollY > 180) {
        setMoveScroll(true);
      } else {
        setMoveScroll(false);
      }
    };
    window.addEventListener("scroll", handleMoveScroll);
    return () => {
      window.removeEventListener("scroll", handleMoveScroll);
    };
  }, []);

  const handleImgClick = () => {
    dispatch(setTrue());
  };

  const handleMyPageClick = () => {
    navigate("/mypage");
  };

  const handleModalOpen = () => {
    setModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const handleCancel = () => {
    setClickSearch(false);
    document.body.style.overflow = "unset";
  };

  return (
    <>
      {clickSearch ? (
        <HeaderWrap clickSearch={clickSearch}>
          <div className="dim"></div>
          <div className="header-inner">
            <ul className="header-title">
              <li>
                <img src="/logo/logo.png" alt="Logo" />
              </li>
              <li onClick={handleCancel}>✖</li>
            </ul>
            <div className="header-body">
              <ul>
                <li>
                  <Search
                    clickSearch={clickSearch}
                    setClickSearch={setClickSearch}
                  />
                </li>
                <li>
                  <h2>최근 인기 검색</h2>
                </li>
                <li>
                  <h2>최근 인기 태그</h2>
                </li>
              </ul>
            </div>
          </div>
          <Spacer />
        </HeaderWrap>
      ) : (
        <HeaderWrap clickSearch={clickSearch}>
          <div
            className={`header-inner ${
              moveScroll ? "header-inner-change" : ""
            }`}
          >
            <ul className="main-category">
              <NavLink to={`/`}>
                <li>
                  <img src="/logo/logo.png" alt="Logo" />
                </li>
              </NavLink>
              <NavLink
                to={`/`}
                className={({ isActive }) =>
                  "nav-link" + (isActive ? "-active" : "")
                }
              >
                <li>
                  <span>홈</span>
                </li>
              </NavLink>
              <NavLink
                to={`/theme`}
                className={({ isActive }) =>
                  "nav-link" + (isActive ? "-active" : "")
                }
              >
                <li>
                  <span>테마</span>
                </li>
              </NavLink>
              <NavLink
                to={`/travlemap`}
                className={({ isActive }) =>
                  "nav-link" + (isActive ? "-active" : "")
                }
              >
                <li>
                  <span>여행지도</span>
                </li>
              </NavLink>
              <NavLink
                to={`/tlog`}
                className={({ isActive }) =>
                  "nav-link" + (isActive ? "-active" : "")
                }
              >
                <li onClick={handleImgClick}>
                  <span>티로그</span>
                </li>
              </NavLink>
            </ul>
            <ul className="etc-category">
              <li>
                <Search
                  clickSearch={clickSearch}
                  setClickSearch={setClickSearch}
                />
              </li>
              <li>
                <img src="/leng/leng.png" alt="leng" />
              </li>
              <li onClick={handleMyPageClick}>
                <img src="/login/login.png" alt="Profile" />
              </li>
              {modalOpen && (
                <LoginModal modalOpen={modalOpen} setModalOpen={setModalOpen} />
              )}
              <li onClick={handleModalOpen}>
                <img src="" alt="" />
              </li>
            </ul>
          </div>
          <Spacer />
        </HeaderWrap>
      )}
    </>
  );
};

export default Header;

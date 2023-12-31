import styled from "@emotion/styled";

export const MypageColor = {
  mainblue: "#006dab",
  mainwhite: "#ffffff",
  backdim: "rgb(0, 0, 0, 0.2)",
};

export const MypageWrap = styled.div`
  width: 1200px;
  margin: 0 auto;
  padding: 40px 10px;
  height: 100%;
  & h2 {
    color: ${MypageColor.mainblue};
    line-height: 2;
  }
  .mypage-container {
    width: 100%;
    height: 100%;
    padding: 10px;
    border-radius: 5px;
    /* background-color: #fffacd; */
    /* gap: 30px; */
    display: flex;
    justify-content: center;
    align-content: center;
  }
`;

/* 프로필 섹션 */
export const ProfileSection = styled.div`
  width: 600px;
  padding: 10px;
  ul {
    text-align: center;
    margin: 0 auto;
    width: 300px;
    height: 300px;
    border-radius: 10px;
    background-color: ${MypageColor.mainblue};
    color: ${MypageColor.mainwhite};
    li {
      padding: 20px;
    }
    .profilepic {
      img {
        border-radius: 50%;
      }
    }
  }
`;

/* 마이메뉴 export const섹션 */
export const MymenuSection = styled.div`
  width: 600px;
  text-align: left;

  ul {
    margin: 0 auto;
    li {
      padding: 10px;
      & h4 {
        padding-left: 10px;
        font-size: 1rem;
      }
      & div > button {
        cursor: pointer;
        border: 0;
        background: 0;
        padding-left: 10px;
      }
    }
  }
`;

// 즐겨찾기 더보기 메뉴
export const BookmarkWrap = styled.div`
  .mark-content {
    display: flex;
    justify-content: center;
    align-items: center;
    li {
      padding: 0;
      text-align: center;
      cursor: pointer;
    }

    .mark-img {
      position: relative;
    }
    .mark-img:hover {
      .mark-img-hover {
        display: block;
      }
    }
    .mark-img-hover {
      display: none;
      position: absolute;
      top: 0;
      left: 0;
      z-index: 9;
      background-color: ${MypageColor.backdim};
    }
    .mark-submenu {
      display: flex;
      gap: 10px;
      font-size: 1rem;
      justify-content: center;
      align-items: center;
      width: 100px;
      height: 100px;
    }
  }
`;

export const CourseWrap = styled.div`
  .mark-content {
    display: flex;
    justify-content: center;
    align-items: center;
    li {
      padding: 0;
      text-align: center;
    }
  }
`;

export const BookmarkMdStyle = styled.div`
  /* 모달창을 화면 중앙. 최상단에 노출 */
  .wrap {
    position: absolute;
    top: 0;
    left: 0;
    background-color: ${MypageColor.backdim};
    height: 100vh;
    width: 100vw;
    z-index: 9999;
    .container {
      /* 모달창 크기 */
      width: 500px;
      height: 500px;

      /* 최상단 위치 */
      z-index: 999;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);

      /* 모달창 디자인 */
      background-color: #f4f0ef;
      border-radius: 5px;
      box-shadow: 2px 1px 7px 1px rgba(0, 0, 0, 0.1);
    }

    /* 모달창 내부 X버튼 */
    .close {
      position: absolute;
      right: 10px;
      top: 10px;
      border: 0;
      font-size: 1.5rem;
      cursor: pointer;
    }

    // 모달 안 내용
    .modal-content {
      padding: 1rem;
    }
  }
`;

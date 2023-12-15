import styled from "@emotion/styled";

export const MainSpacer = styled.div`
  height: 30rem;
`;
export const Bnner = styled.div`
  margin-bottom: 150px;
  .main-top {
    position: absolute;
    height: 550px;
    width: 100%;
    left: 0;
    top: 0;
    ul {
      position: relative;
      width: 100%;
      height: 500px;
      .top-img {
        position: absolute;
        top: 38%;
        left: 18%;
        width: 700px;
        height: 450px;
      }

      .top-info {
        position: absolute;
        top: 63%;
        right: 20%;
        width: 23rem;
        height: 8rem;
        font-size: 2rem;
        font-weight: 600;
      }

      .top-detail {
        position: absolute;
        bottom: 10%;
        right: 34%;
        width: 6rem;
        height: 25px;
        font-size: 18px;
        font-weight: 600;
      }

      .progress-bar {
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        width: 500px;
        height: 40px;
        right: 10.25%;
        top: 574px;

        .progress-bt {
          margin-left: 240px;
          .prev-bt , .next-bt, .stop-bt{
            border: 0;
            background-color: transparent;
            margin-left: 20px;
          }
        }
      }
    }
  }
`;

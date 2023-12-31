import styled from "@emotion/styled";

export const AllTlogWrap = styled.div`
  max-width: 100%;
  > .all-tlog-title {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 30px;
    > h2 {
      text-align: center;
      font-size: 3rem;
      margin-bottom: 3rem;
      cursor: pointer;
    }
    > div {
      border-radius: 50%;
      margin-bottom: 40px;
      cursor: pointer;
      > img {
        width: 150px;
        height: 150px;
        border-radius: 50%;
      }
    }
  }
`;

export const RegionButtons = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  min-width: 100%;
  > li > button {
    width: 50px;
    height: 25px;
    padding: 2px 8px;
    border: 1px solid black;
    border-radius: 8px;
  }
`;

export const ThemeButtons = styled.div`
  > ul {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    max-width: 100%;
    margin: 15px 0;
    > li > span {
      padding: 5px 10px;
      border: 1px solid black;
      border-radius: 30px;
    }
  }
`;
export const AllTlogPostContents = styled.div`
  display: flex;
  gap: 20px;
  max-width: 100%;
  margin: 30px 0 30px 42px;
  > ul {
    width: 300px;
    height: 250px;
    > li {
      max-width: 300px;
      > img {
        width: 300px;
        height: 205px;
        margin-bottom: 5px;
        border-radius: 10px;
        border: none;
      }
      > span {
        height: 45px;
      }
    }
  }
`;

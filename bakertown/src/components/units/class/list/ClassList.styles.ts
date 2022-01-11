import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  height: 100%;
  min-height: 700px;
  scroll-behavior: smooth;
`;

export const Sidebar = styled.div`
  margin-top: 79px;
  margin-right: 27px;
`;

export const SideTitle = styled.div`
  width: 246px;
  height: 66px;
  background-color: #f7f7f7;
  border-radius: 10px;
  font-size: 24px;
  font-weight: bold;
  /* padding-top: 20px;*/
  padding-left: 29px;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 16px;
  cursor: pointer;

  :hover {
    color: rgba(0, 0, 0, 0.7);
  }
`;

export const SideButton = styled.div`
  font-size: 20px;
  padding-top: 5.5px;
  padding-bottom: 9.5px;
  padding-left: 29px;
  cursor: pointer;

  :hover {
    background: rgba(220, 220, 220, 0.1);
    font-weight: bold;
  }
`;

export const SmallLine = styled.div`
  width: 187px;
  margin-left: 29px;
  border-bottom: 1px solid #e2e2e2;
`;

export const ClassList = styled.div``;

export const ListToSelect = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  /* background: yellow; */
  margin-top: 72px;
  margin-bottom: 51px;
`;

export const ListTitle = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ListTitleText = styled.div`
  font-size: 32px;
  font-weight: bold;
`;

export const ListSelect = styled.select`
  height: 50px;
  width: 150px;
  padding-left: 55px;
  margin-right: 10px;
  border: 0px solid gray;
  cursor: pointer;
  :hover {
    color: gray;
  }
  :focus {
    /* outline: 1px solid rgba(0, 0, 0, 0.3); */
    outline: none;
  }
`;

export const ListOption = styled.option`
  /* :hover {
    cursor: pointer;
  } */
`;

export const ListContents = styled.div`
  width: 1000px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const ClassWrapper = styled.div`
  margin-bottom: 80px;
  cursor: pointer;
  :hover {
    color: rgba(0, 0, 0, 0.5);
  }
`;

export const ClassImage = styled.img`
  width: 220px;
  height: 200px;
  border-radius: 10px;
  background-color: #c4c4c4;
  margin-bottom: 20px;
`;

export const ClassPatissierToPrice = styled.div`
  padding-left: 10px;
`;

export const ClassPatissier = styled.div`
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 13px;
`;

export const ClassName = styled.div`
  width: 218px;
  height: 30px;
  font-size: 17px;
  margin-bottom: 15px;
  margin-top: 15px;
  display: flex;
  flex-direction: row;
  align-items: center;
  /* background: yellow; */
`;

export const ClassLine = styled.div`
  width: 220px;
  border-bottom: 1px solid rgba(220, 220, 220, 0.8);
`;

export const ClassPrice = styled.div`
  margin-top: 10px;
  font-size: 18px;
  font-weight: bold;
  display: flex;
`;

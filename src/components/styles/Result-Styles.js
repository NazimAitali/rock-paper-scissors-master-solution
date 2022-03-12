import styled from "styled-components";

export const ResultStyles = styled.section`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-direction: column;
  width: 312px;
  height: 200px;
  position: absolute;
  top: 400px;
  @media (min-width: ${({ theme }) => theme.breakPoint.mobile}) {
    justify-content: space-between;
    width: 271px;
    height: 190px;
    z-index: 3;
    position: relative;
    top: 0;
  }
`;
export const Text = styled.p`
  font-weight: 700;
  font-size: 56px;
  color: white;
  width: 100%;
  height: 75%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 53px;
  letter-spacing: 3px;
  @media (min-width: ${({ theme }) => theme.breakPoint.mobile}) {
    width: 81%;
    height: 66%;
    align-items: flex-end;
    padding-top: 0px;
  }
`;
export const Again = styled.span`
  font-size: 17px;
  letter-spacing: 3px;
  color: ${({ theme }) => theme.colors.body.color.bgPrimary};
  background-color: white;
  width: 71%;
  height: 25%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 9px;
  cursor: pointer;
  &:hover {
    color: red;
  }
  @media (min-width: ${({ theme }) => theme.breakPoint.mobile}) {
    width: 82%;
    height: 25%;
  }
`;

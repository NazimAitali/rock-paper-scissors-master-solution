import styled from "styled-components";
export const MainStyles = styled.main`
  width: 365px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (min-width: ${({ theme }) => theme.breakPoint.mobile}) {
    width: ${({ width }) => width || "600px"};
  }
`;
export const Choises = styled.section`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  padding: ${({ padding }) => padding || "66px 0px 199px"};
  background-image: url(${({ bg }) => bg});
  background-position-x: center;
  background-position-y: 50%;
  background-repeat: no-repeat;
  background-size: 64%;
  width: 100%;
  justify-content: center;
  @media (min-width: ${({ theme }) => theme.breakPoint.mobile}) {
    padding: ${({ padding }) => padding || "66px 0px 0px"};
    background-size: 57%;
    background-position-y: 51%;
  }
`;

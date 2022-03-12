import styled from "styled-components";
import rules from "../../assets/images/image-rules.svg";
export const FooterStyles = styled.footer`
  width: 313px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 50px 0px;
  margin: 0 auto;
  @media (min-width: ${({ theme }) => theme.breakPoint.mobile}) {
    width: 118%;
    bottom: ${({ bottom }) => bottom || "100px"};
    padding: 0px 0px;
    position: relative;
    justify-content: flex-end;
  }
  @media (min-width: ${({ theme }) => theme.breakPoint.largeScreen}) {
    bottom: ${({ bottom }) => bottom || "125px"};
  }
`;

export const Button = styled.button`
  color: white;
  border: none;
  background-color: transparent;
  border-radius: 8px;
  border: 2px white solid;
  padding: 10px 36px;
  font-size: 17px;
  font-weight: 600;
  cursor: pointer;
`;
export const RulesStyles = styled.section`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const Rule = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background-color: white;
  background-image: url(${rules});
  background-position: center;
  background-repeat: no-repeat;
  background-size: 81%;
  z-index: 3;
  @media (min-width: ${({ theme }) => theme.breakPoint.mobile}) {
    width: 400px;
    height: 415px;
    border-radius: 10px;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    background-size: 75%;
    background-position-y: 113px;
  }
`;
export const Title = styled.p`
  padding: 28px 0px 213px;
  font-size: 33px;
  letter-spacing: 2px;
  @media (min-width: ${({ theme }) => theme.breakPoint.mobile}) {
    padding: 28px 33px;
  }
`;
export const Close = styled.img`
  width: 22px;
  padding: 258px 0px 0px;
  cursor: pointer;
  @media (min-width: ${({ theme }) => theme.breakPoint.mobile}) {
    padding: 36px 0px;
    margin-right: 31px;
  }
`;

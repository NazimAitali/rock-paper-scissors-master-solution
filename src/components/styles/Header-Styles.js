import styled from "styled-components";

export const HeaderStyles = styled.header`
  padding: 30px 0;
  @media (min-width: ${({ theme }) => theme.breakPoint.mobile}) {
    padding: 49px 2px 0px;
  }
  @media (min-width: ${({ theme }) => theme.breakPoint.largeScreen}) {
    padding: 25px 2px 0px;
  }
`;

export const SectionStyles = styled.section`
  width: 83%;
  height: 100px;
  border: 3px solid ${({ theme }) => theme.colors.header.headerOutline};
  border-radius: 7px;
  padding: 10px 7px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  @media (min-width: ${({ theme }) => theme.breakPoint.mobile}) {
    width: 74%;
    height: 148px;
    border-radius: 13px;
    padding: 10px 23px;
  }
`;
export const FlexBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled.img`
  width: 96px;
  padding: 2px 0px 0px 12px;
  @media (min-width: ${({ theme }) => theme.breakPoint.mobile}) {
    width: 171px;
    padding: 2px 0px 0px 9px;
  }
`;
export const Score = styled.section`
  width: 80px;
  background-color: ${({ theme }) => theme.colors.body.color.white};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-radius: 4px;
  @media (min-width: ${({ theme }) => theme.breakPoint.mobile}) {
    width: 148px;
  }
`;
export const Title = styled.h1`
  font-family: "Roboto", sans-serif;
  color: ${({ theme }) => theme.colors.header.scoreText};
  font-size: 10px;
  font-weight: 700;
  padding-top: 10px;
  @media (min-width: ${({ theme }) => theme.breakPoint.mobile}) {
    font-size: 16px;
    padding-top: 15px;
  }
`;
export const Result = styled.p`
  color: ${({ theme }) => theme.colors.header.darkText};
  font-size: 37px;
  font-weight: 700;
  padding-bottom: 8px;
  padding-top: 0px;
  @media (min-width: ${({ theme }) => theme.breakPoint.mobile}) {
    font-size: 59px;
  }
`;

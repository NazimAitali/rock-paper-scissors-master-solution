import styled from "styled-components";

export const Container = styled.div`
  width: 1366px;
  max-width: 100%;
  margin: 0 auto;
  @media (min-width: ${({ theme }) => theme.breakPoint.mobile}) {
    max-width: 70%;
  }
`;

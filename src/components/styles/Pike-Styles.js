import styled from "styled-components";

export const PikeStyles = styled.div`
  width: 130px;
  height: 130px;
  object-fit: none;
  border-radius: 50%;
  ${({ top }) => top || "0 auto"};
  ${({ right }) => right || "0 auto"};
  ${({ left }) => left || "0 auto"};
  background-color: ${({ theme }) => theme.colors.body.color.white};
  background-image: url(${({ img }) => img});
  background-repeat: no-repeat;
  background-position: center;
  background-size: 45%;
  border: 16px solid ${({ bg }) => bg};
  box-shadow: 0px 3px 0px 0px ${({ shadow }) => shadow};
  cursor: pointer;
  z-index: 1;
  @media (min-width: ${({ theme }) => theme.breakPoint.mobile}) {
    width: 198px;
    height: 198px;
    border: 23px solid ${({ bg }) => bg};
  }
`;
export const DisplayPikeStyles = styled.section`
  width: 130px;
  height: 130px;
  object-fit: none;
  border-radius: 50%;
  ${({ top }) => top || "0 auto"};
  ${({ right }) => right || "0 auto"};
  ${({ left }) => left || "0 auto"};
  background-color: ${({ theme }) => theme.colors.body.color.white};
  background-image: url(${({ img }) => img});
  background-repeat: no-repeat;
  background-position: center;
  background-size: 45%;
  border: 16px solid ${({ bg }) => bg};
  box-shadow: 0px 3px 0px 0px ${({ shadow }) => shadow};
  cursor: pointer;
  z-index: 1;
  @media (min-width: ${({ theme }) => theme.breakPoint.mobile}) {
    width: 295px;
    height: 295px;
    border: 37px solid ${({ bg }) => bg};
    box-shadow: 0px 5px 0px 0px ${({ shadow }) => shadow};
  }
`;
export const DisplayContainer = styled.div`
  display: flex;
  align-items: flex-end;
  ${({ align }) => align};
  justify-content: space-between;
  flex-direction: column;
  height: 177px;
  width: 156px;
  position: relative;
  @media (min-width: ${({ theme }) => theme.breakPoint.mobile}) {
    width: 336px;
    height: 400px;
    flex-direction: column-reverse;
  }
`;

export const LayerSmall = styled.div`
  height: 72%;
  width: 81%;
  position: absolute;
  top: 3px;
  right: ${({ right }) => right || "29px"};
  background-color: white;
  opacity: 0.05;
  border-radius: 50%;
  animation: anime 0.3s 0s ease-out forwards;
  @keyframes anime {
    0% {
      transform: scale(1);
    }
    100% {
      transform: scale(1.35);
    }
  }
  @media (min-width: ${({ theme }) => theme.breakPoint.mobile}) {
    height: 302px;
    width: 302px;
    position: absolute;
    top: 100px;
    right: ${({ right }) => right || "39px"};
  }
`;

export const LayerMedium = styled.div`
  height: 91%;
  width: 105%;
  position: absolute;
  top: -12px;
  right: ${({ right }) => right || "10px"};
  background-color: white;
  opacity: 0.05;
  border-radius: 50%;
  animation: anime 0.3s 0.2s ease-out forwards;
  @keyframes anime {
    0% {
      transform: scale(1);
    }
    100% {
      transform: scale(1.35);
    }
  }
  @media (min-width: ${({ theme }) => theme.breakPoint.mobile}) {
    height: 410px;
    width: 410px;
    position: absolute;
    top: 45px;
    right: ${({ right }) => right || "-14px"};
  }
`;

export const LayerLarge = styled.div`
  height: 119%;
  width: 134%;
  position: absolute;
  top: -39px;
  right: ${({ right }) => right || "-13px"};
  background-color: white;
  opacity: 0.05;
  border-radius: 50%;
  animation: anime 0.3s 0.4s ease-out forwards;
  @keyframes anime {
    0% {
      transform: scale(1);
    }
    100% {
      transform: scale(1.35);
    }
  }
  @media (min-width: ${({ theme }) => theme.breakPoint.mobile}) {
    height: 530px;
    width: 530px;
    position: absolute;
    top: -12px;
    right: ${({ right }) => right || "-71px"};
  }
`;
export const Text = styled.p`
  color: ${({ theme }) => theme.colors.body.color.white};
  font-size: 17px;
  letter-spacing: 2px;
  width: max-content;
  margin-right: ${({ left }) => left || "0px"};
  @media (min-width: ${({ theme }) => theme.breakPoint.mobile}) {
    letter-spacing: 4.5px;
    top: -92px;
    left: ${({ left }) => left || "89px"};
    font-size: 24px;
  }
`;
export const Loading = styled.div`
  width: 117px;
  height: 135px;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (min-width: ${({ theme }) => theme.breakPoint.mobile}) {
    width: 295px;
    height: 295px;
  }
`;
export const Pulse = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  width: 130px;
  height: 130px;
  border-radius: 50%;
  animation: pulse 2s cubic-bezier(0.22, 0.61, 0.36, 1) infinite;
  @keyframes pulse {
    0% {
      width: 110px;
      height: 110px;
    }
    50% {
      width: 20px;
      height: 20px;
    }
    100% {
      width: 110px;
      height: 110px;
    }
  }

  @media (min-width: ${({ theme }) => theme.breakPoint.mobile}) {
    width: 295px;
    height: 295px;
    animation: pulse 2s cubic-bezier(0.22, 0.61, 0.36, 1) infinite;
    @keyframes pulse {
      0% {
        width: 290px;
        height: 290px;
      }
      50% {
        width: 100px;
        height: 100px;
      }
      100% {
        width: 295px;
        height: 295px;
      }
    }
  }
`;

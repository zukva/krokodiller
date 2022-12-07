import styled, { css } from 'styled-components'

export const flexCenterCSS = css`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const PageContainer = styled.div`
  ${flexCenterCSS}
  width: 100vw;
  height: 100vh;
`;

export const Plate = styled.div`
  ${flexCenterCSS}
  flex-direction: column;
  background: ${({ theme }) => theme.colors.common.white};
  padding: ${({ theme }) => theme.plate.padding};
  border-radius: ${({ theme }) => theme.plate.borderRadius};

  box-shadow: ${({ theme }) => theme.plate.shadow};
`;

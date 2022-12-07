import styled from 'styled-components';

import { flexCenterCSS } from '../../../styled'

export const Container = styled.button`
  ${flexCenterCSS}
  border: none;
  ${({ theme }) => {
    const { height } = theme.button;
    return [
      `height: ${height}px;`,
      `padding: 0 ${height}px;`,
      `border-radius: ${height / 2}px;`
    ].join('\n');
  }}
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.common.white}
`;

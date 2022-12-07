import styled from 'styled-components';

export const Container = styled.div<{ size: string }>`
  font-size: ${({ theme, size }) => theme.fonts.size[size]}
`;

import styled from 'styled-components';

export const Container = styled.div`
  display: block;
  margin: 5px 0;
`;

export const Input = styled.input`
  width: 250px;
  border: none;
  border-bottom: ${({ theme }) => theme.input.borderThickness} solid;
  border-bottom-color: ${({ theme }) => theme.colors.primary};
`;

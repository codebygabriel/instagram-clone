import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 268px;
  padding: 15px 0;

  gap: 10px;
  display: flex;
  align-items: center;
`;

export const SeparatorLabel = styled.span`
  font-size: 13.5px;
  font-weight: 600;
  text-transform: uppercase;

  color: #8E8E8E;
`;

export const SeparatorLine = styled.hr`
  width: 100%;
  height: 1px;

  border: none;
  background: var(--border);
`;
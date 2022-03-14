import styled from 'styled-components';
import { ButtonStyleProps } from './types';

export const Container = styled.button<ButtonStyleProps>(({
  width,
  height,
  disabled,
}: ButtonStyleProps) => ({
  width: '100%',
  maxWidth: width || 268,
  height: height || 30,
  padding: '5px 10px',

  transition: 'background 0.2s, box-shadow 0.2s',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  
  opacity: !!disabled ? 0.3 : 1,
  cursor: !!disabled ? 'default' : 'pointer',

  borderRadius: 4,
  background: 'var(--blue)',

  '&:hover, &:active': {
    background: 'rgba(0, 149, 246, 0.75)',
  },

  '&:focus': {
    boxShadow: '0 0 0 3.75px rgba(0, 149, 246, 0.2)',
  },
}));

export const ButtonLabel = styled.span`
  font-size: 14px;
  font-weight: 700;
  color: var(--white);
`;

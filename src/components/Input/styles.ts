import styled from 'styled-components';
import { InputStyleProps } from './types';

export const Container = styled.input<InputStyleProps>(({
  width,
  height,
  disabled,
}: InputStyleProps) => ({
  width: '100%',
  maxWidth: width || 268,
  height: height || 38,
  padding: '0px 8px',

  transition: 'background 0.2s, box-shadow 0.2s',

  fontSize: 12,

  borderRadius: 4,
  background: 'var(--background)',
  border: '1px solid var(--border)',

  '&:focus': {
    boxShadow: '0 0 0 3.75px rgba(0, 0, 0, 0.05)',
  },
}));

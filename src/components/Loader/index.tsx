import { LoaderProps } from './types';
import { Container } from './styles';

export function Loader({ size, color }: LoaderProps) {
  return (
    <Container width={size || 24} height={size || 24} viewBox="25 25 50 50">
      <circle stroke={color || 'var(--white)'} cx="50" cy="50" r="20"></circle>
    </Container>
  );
};
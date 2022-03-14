import { SeparatorProps } from './types';
import { Container, SeparatorLabel, SeparatorLine } from './styles';

export function Separator({ label }: SeparatorProps) {
  return (
    <Container>
      <SeparatorLine />

      <SeparatorLabel>{label}</SeparatorLabel>

      <SeparatorLine />
    </Container>
  );
};
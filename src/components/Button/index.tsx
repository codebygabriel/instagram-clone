import { Loader } from '../Loader';

import { ButtonProps } from './types';
import { Container, ButtonLabel } from './styles';

export function Button(props: ButtonProps) {
  return (//@ts-ignore
    <Container 
      {...props}
      disabled={props.disabled || false}
    >
      {!!props.isLoading ? <Loader size={18} /> : (
        <ButtonLabel>{props.label}</ButtonLabel>
      )}
    </Container>
  );
};
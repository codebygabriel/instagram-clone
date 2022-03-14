import { forwardRef } from 'react';

import { InputProps } from './types';
import { Container } from './styles';

export function Input(props: InputProps, ref: any) {
  return (//@ts-ignore
    <Container
      ref={ref}
      type={props.type || 'text'}
      placeholder={props.placeholder || 'Type...'}
      {...props}
    />
  );
};

export default forwardRef(Input);
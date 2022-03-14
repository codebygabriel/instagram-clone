export type InputProps = {
  width?: string | number;
  height?: string | number;
  type?: 'button' | 'checkbox' | 'color' | 'date' | 'datetime-local' | 'email' | 'file' | 'hidden' | 'image' | 'month' | 'number' | 'password' | 'radio' | 'range' | 'reset' | 'search' | 'submit' | 'tel' | 'text' | 'time' | 'url' | 'week';
  disabled?: boolean;
  placeholder?: string;
} & React.HTMLProps<HTMLInputElement>;


export type InputStyleProps = {
  width?: string | number;
  height?: string | number;
  disabled?: boolean;
};
export type ButtonProps = {
  width?: string | number;
  height?: string | number;
  label: string;
  disabled?: boolean;
  isLoading?: boolean;
  onClick: () => void;
} & React.HTMLProps<HTMLButtonElement>;

export type ButtonStyleProps = {
  width?: string | number;
  height?: string | number;
  disabled?: boolean;
};
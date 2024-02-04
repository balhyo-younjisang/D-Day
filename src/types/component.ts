export type ImageProps = {
  src: string;
  alt: string;
};

export type BoxProps = {
  width: string;
  height: string;
};

export type ButtonProps = {
  text: string;
  backgroundColor: string;
};

export type IconProps = ImageProps & BoxProps;

export type IconButtonProps = IconProps & ButtonProps;

export interface IComment {
  id: number;
  text: string;
  userId: string;
}
export interface IImage {
  id: number;
  url: string;
  title: string;
  comments: [IComment];
}

export interface ImagesGridProps {
  images: [IImage];
}

export interface ButtonProps {
  label: string;
  onAction: () => void;
}

export interface InputProps {
  label: string;
  value: string;
  rows: number | null;
  onChange: (e: any) => void;
}

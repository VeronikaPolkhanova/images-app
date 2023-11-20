export interface IComment {
  id: number;
  text: string;
  userId: number;
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
  type: string;
  onAction: () => void;
}

export interface InputProps {
  label: string;
  value: string;
  rows: number | null;
  errMessage: string;
  onChange: (e: any) => void;
}

export interface IJwtPayload {
  id: string;
}

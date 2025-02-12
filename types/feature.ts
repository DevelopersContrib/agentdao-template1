import Link from 'next/link';
export type Feature = {
  id: number;
  icon: string;
  title: string;
  description: string;
  image: string;
  links: JSX.Element[];
};

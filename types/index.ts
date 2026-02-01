import { SVGProps } from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export interface IndexProps {
  data: any;
  error: boolean;
}

export interface IArticles {
  author: string;
  content: string;
  description: string;
  publishedAt: string;
  source: {
    id: null | string;
    name: string;
  };
  title: string;
  url: string;
  urlToImage: string;
}

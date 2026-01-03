import { SVGProps } from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export interface IndexProps {
  data: any;
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

import Image from "next/image";

import { AnimatedTitle } from "./AnimatedTitle";

import { IArticles } from "@/types";

interface CardProps {
  data: IArticles;
}

export default function Card({
  data: { url, description, title, urlToImage },
}: CardProps) {
  return (
    <article className="w-full">
      <h4>
        <a
          aria-label={title}
          className={`flex flex-col sm:flex-row relative bg-gray-900 visited:bg-[#1e082e] w-full hover:bg-[#121212] transition-background duration-150 visited:text-purple-600 overflow-hidden group`}
          href={url}
          rel="noreferrer"
          target="_blank"
        >
          {urlToImage && (
            <div className="relative w-full sm:w-[120px] md:w-[150px] h-[120px] sm:h-auto sm:min-h-[100px] md:min-h-[120px] flex-shrink-0 overflow-hidden">
              <Image
                alt={title}
                className="object-cover w-full h-full"
                crossOrigin="anonymous"
                fill
                referrerPolicy="no-referrer"
                src={urlToImage}
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 120px, 150px"
              />
            </div>
          )}
          <div className="flex min-w-0 flex-1 flex-col max-w-full p-3 sm:p-4">
            <AnimatedTitle>{title}</AnimatedTitle>
            <p className="text-xs sm:text-sm whitespace-normal mt-1 sm:mt-2 line-clamp-3 sm:line-clamp-4">
              {description.replace(/&#39;/g, "'").replace(/&amp;/g, "&")}
            </p>
          </div>
        </a>
      </h4>
    </article>
  );
}

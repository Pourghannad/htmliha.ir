import Image from "next/image";

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
          className={`flex relative ${urlToImage ? "pl-[165px]" : ""} bg-gray-900 visited:bg-[#1e082e] w-full hover:bg-[#121212] transition-background duration-150 visited:text-purple-600 p-2 overflow-hidden group`}
          href={url}
          rel="noreferrer"
          target="_blank"
        >
          {urlToImage && (
            <div className="absolute overflow-hidden w-[150px] top-0 left-0 h-full max-sm:top-3.5">
              <Image
                alt={title}
                className="w-[400px] object-contain max-w-[400px] h-[400px] absolute top-12 -left-44 bottom-0 m-auto"
                crossOrigin="anonymous"
                height={400}
                referrerPolicy="no-referrer"
                src={urlToImage}
                width={400}
              />
            </div>
          )}
          <div className="flex-col max-w-full">
            <span className="text-2xl h-9 relative font-bold line-clamp-1 whitespace-pre">
              <span className="absolute group-hover:animate-wiggle">
                {title}
              </span>
            </span>
            <p className="text-sm whitespace-normal">{description}</p>
          </div>
        </a>
      </h4>
    </article>
  );
}

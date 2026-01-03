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
          className={`flex relative ${urlToImage ? "pl-[165px]" : ""} bg-gray-900 visited:bg-[#1e082e] w-full hover:bg-[#121212] transition-background duration-150 visited:text-purple-600 p-2 overflow-hidden`}
          href={url}
          rel="noreferrer"
          target="_blank"
        >
          {urlToImage && (
            <div className="absolute overflow-hidden w-[150px] top-0 left-0 h-full">
              <img
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
            <span className="text-2xl font-bold line-clamp-1 whitespace-pre text-ellipsis">
              {title}
            </span>
            <p className="text-sm whitespace-normal">{description}</p>
          </div>
        </a>
      </h4>
    </article>
  );
}

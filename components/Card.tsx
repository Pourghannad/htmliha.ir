import { IArticles } from "@/types";

interface CardProps {
  data: IArticles;
  key: number;
}

export default function Card({
  data: { url, description, title, urlToImage },
  key,
}: CardProps) {
  return (
    <article key={key} className="w-full">
      <h4>
        <a
          className={`flex relative ${urlToImage ? "pl-[165px]" : ""} bg-gray-900 visited:bg-[#1e082e] w-full hover:bg-black transition-background visited:text-purple-600 p-2 overflow-hidden`}
          href={url}
          rel="noreferrer"
          target="_blank"
        >
          {urlToImage && (
            <div className="absolute overflow-hidden w-[150px] top-0 left-0 h-full">
              <img
                alt={title}
                className="w-[400px] object-contain max-w-[400px] h-[400px] absolute top-0 -left-1/3 bottom-0 m-auto"
                height={400}
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

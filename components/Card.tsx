import { IArticles } from "@/types";

interface CardProps {
  data: IArticles;
  key: number;
}

export default function Card({
  data: { url, description, title },
  key,
}: CardProps) {
  return (
    <article key={key} className="w-full">
      <h4>
        <a
          className="flex flex-col bg-gray-900 visited:bg-[#1e082e] w-full hover:bg-black transition-background visited:text-purple-600 p-4"
          href={url}
          rel="noreferrer"
          target="_blank"
        >
          <span className="text-2xl font-bold line-clamp-1 whitespace-pre text-ellipsis">
            {title}
          </span>
          <span className="text-sm whitespace-normal">{description}</span>
        </a>
      </h4>
    </article>
  );
}

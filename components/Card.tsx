interface CardProps {
  title: string;
  url: string;
  key: number;
}

export default function Card({ title, url, key }: CardProps) {
  return (
    <article className="bg-gray-900" key={key}>
      <h4>
        <a className="line-clamp-1" href={url} rel="noreferrer" target="_blank">
          {title}
        </a>
      </h4>
    </article>
  );
}

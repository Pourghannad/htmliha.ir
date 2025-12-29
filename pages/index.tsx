import DefaultLayout from "@/layouts/default";

export const getServerSideProps = async () => {
  const res = await fetch(
    `https://newsapi.org/v2/everything?q=javascript&pageSize=20&sortBy=publishedAt&apiKey=${process.env.NEWS_API_TOKEN}&sortBy=popularity&language=en`
  );
  const data = await res.json();

  return { props: { data } };
};

interface IndexProps {
  data: any;
}

interface IArticles {
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

export default function IndexPage({ data }: IndexProps) {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        HTMLIHA
        {data?.articles?.map((item: IArticles, index: number) => {
          return (
            <div key={index}>
              <h4>
                <a href={item.url} rel="noreferrer" target="_blank">
                  {item.title}
                </a>
              </h4>
            </div>
          );
        })}
      </section>
    </DefaultLayout>
  );
}

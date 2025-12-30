import Card from "@/components/Card";
import DefaultLayout from "@/layouts/default";

export const getServerSideProps = async () => {
  const today = new Date();
  const res = await fetch(
    `https://newsapi.org/v2/everything?q=+javascript&from=2025-12-26&to=2025-12-29pageSize=10&sortBy=publishedAt&apiKey=${process.env.NEWS_API_TOKEN}&language=en`
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
        {data?.articles?.map((item: IArticles, index: number) => {
          if (
            !item.url.includes("git.") &&
            !item.url.includes(".jp") &&
            !item.url.includes("dw.com")
          ) {
            return <Card key={index} url={item.url} title={item.title} />;
          }
        })}
      </section>
    </DefaultLayout>
  );
}

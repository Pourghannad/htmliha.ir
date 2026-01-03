import Card from "@/components/Card";
import DefaultLayout from "@/layouts/default";


export const getServerSideProps = async () => {
  const res = await fetch(
    `https://newsapi.org/v2/everything?q=javascript&domains=techcrunch.com,thenextweb.com,kottke.org,bleepingcomputer.com,searchenginejournal.com,c-sharpcorner.com,hackaday.com,lifesciencesworld.com,duck-lang.dev,nullprogram.com,hackread.com,htmhell.dev&pageSize=98&sortBy=publishedAt&apiKey=${process.env.NEWS_API_TOKEN}&language=en`,
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
      <section className="flex flex-col items-center justify-center gap-6 py-8 md:py-10">
        {console.log('data', data)}
        {data?.articles?.map((item: IArticles, index: number) => {
          return <Card key={index} title={item.title} description={item.description} url={item.url} />;
        })}
      </section>
    </DefaultLayout>
  );
}

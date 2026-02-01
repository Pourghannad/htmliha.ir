import Card from "@/components/Card";
import DefaultLayout from "@/layouts/default";
import { IArticles, IndexProps } from "@/types";

export const getServerSideProps = async () => {
  try {
    const res = await fetch(
      `https://newsapi.org/v2/everything?q=javascript&domains=techcrunch.com,thenextweb.com,kottke.org,bleepingcomputer.com,searchenginejournal.com,c-sharpcorner.com,hackaday.com,lifesciencesworld.com,duck-lang.dev,nullprogram.com,hackread.com,htmhell.dev&pageSize=98&sortBy=publishedAt&apiKey=${process.env.NEWS_API_TOKEN}&language=en`,
    );
    const data = await res.json();

    return { props: { data } };
  } catch {
    return { props: { error: true } };
  }
};

export default function IndexPage({ data, error }: IndexProps) {
  return (
    <DefaultLayout>
      {error ? (
        <section className="flex justify-center items-center font-extrabold text-4xl">
          {"Error :("}
        </section>
      ) : (
        <section className="flex flex-col items-center justify-center gap-6 py-8 md:py-10">
          {data?.articles?.map((item: IArticles, index: number) => {
            return <Card key={index} data={item} />;
          })}
        </section>
      )}
    </DefaultLayout>
  );
}

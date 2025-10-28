import DefaultLayout from "@/layouts/default";

export const getServerSideProps = async () => {
  const res = await fetch(
    `https://newsapi.org/v2/everything?q=javascript&pageSize=20&sortBy=publishedAt&apiKey=${process.env.NEWS_API_TOKEN}&sortBy=popularity&language=en`,
  );
  const data = await res.json();

  return { props: { data } };
};

interface IndexProps {
  data: any;
}

export default function IndexPage({ data }: IndexProps) {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        HTMLIHA
        {data?.articles?.map((item, index) => {
          return (
            <div key={index}>
              <h4>{item.title}</h4>
            </div>
          );
        })}
      </section>
    </DefaultLayout>
  );
}

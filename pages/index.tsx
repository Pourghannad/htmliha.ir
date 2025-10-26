import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const getServerSideProps = async () => {
  // Fetch data from external API
  const res = await fetch(
    `https://newsapi.org/v2/everything?q=javascript&pageSize=20&sortBy=publishedAt&apiKey=${process.env.NEWS_API_TOKEN}&sortBy=popularity&language=en`
  );
  const data = await res.json();
  // Pass data to the page via props
  return { props: { data } };
};

export default function Home(props) {
  return (
    <main className="flex flex-col min-h-screen w-[980px] m-auto">
      {console.log("props.data.articles", props.data.articles)}
      <Header />
      <Footer />
    </main>
  );
}

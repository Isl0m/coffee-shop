import Layout from "@components/layout/Layout";

type FormInput = {
  name: string;
  description: string;
  price: number;
  rating: number;
  imageSrc: string;
};

const Home = () => {
  return (
    <Layout>
      <div className="mb-4 text-3xl font-extrabold md:text-5xl lg:text-6xl text-transparent bg-clip-text bg-gradient-to-r to-cyan-600 from-indigo-400">
        Hello, world!
      </div>
    </Layout>
  );
};

export default Home;

import Layout from "../components/Layout.jsx";
import SuperCenter from "../components/SuperCenter.jsx";

const Home = () => {
  return (
    <Layout>
      <SuperCenter>
        <p className="text-4xl font-bold leading-3 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
          Hello, I'm Kalwabed. Welcome to the another power of{" "}
          <a
            href="http://deno.land"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:no-underline"
          >
            Deno
          </a>
        </p>
        <div className="text-gray-500 font-light tracking-wide">
          Go to{" "}
          <a
            href="https://kawari.space"
            className="text-blue-500 hover:no-underline underline hover:text-blue-600 focus:outline-none"
          >
            kawari.space
          </a>
        </div>
      </SuperCenter>
    </Layout>
  );
};

export default Home;
